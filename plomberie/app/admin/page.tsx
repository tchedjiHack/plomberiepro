// app/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import AuthGuard from '@/app/components/AuthGuard';
import { Mail, Users, MessageSquare, CheckCircle, Eye, Send, LogOut } from 'lucide-react';

interface Message {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
  user_id: string;
}

function AdminDashboardContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, lus: 0, repondus: 0 });
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [responseText, setResponseText] = useState('');
  const [sending, setSending] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    fetchMessages();
    fetchStats();
    getUserEmail();
  }, []);

  const getUserEmail = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUserEmail(user.email || '');
    }
  };

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMessages(data);
    }
    setLoading(false);
  };

  const fetchStats = async () => {
    const { data } = await supabase
      .from('messages')
      .select('status');

    if (data) {
      setStats({
        total: data.length,
        lus: data.filter(m => m.status === 'lu').length,
        repondus: data.filter(m => m.status === 'repondu').length,
      });
    }
  };

  const markAsRead = async (messageId: string) => {
    await supabase
      .from('messages')
      .update({ status: 'lu' })
      .eq('id', messageId);
    
    fetchMessages();
    fetchStats();
  };

  const sendResponse = async () => {
    if (!selectedMessage || !responseText.trim()) return;

    setSending(true);
    
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('admin_responses')
      .insert([
        {
          message_id: selectedMessage.id,
          admin_id: user?.id,
          response: responseText,
        },
      ]);

    if (!error) {
      await supabase
        .from('messages')
        .update({ status: 'repondu' })
        .eq('id', selectedMessage.id);

      setResponseText('');
      setSelectedMessage(null);
      fetchMessages();
      fetchStats();
    }

    setSending(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'envoye': return 'bg-yellow-100 text-yellow-700';
      case 'lu': return 'bg-blue-100 text-blue-700';
      case 'repondu': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header avec déconnexion - pas de navbar */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard Admin</h1>
              <p className="text-white/80 mt-1">Connecté en tant que : {userEmail}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total messages</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
              <Mail className="w-10 h-10 text-blue-500" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Messages lus</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.lus}</p>
              </div>
              <Eye className="w-10 h-10 text-blue-500" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Messages répondus</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.repondus}</p>
              </div>
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
        </div>

        {/* Liste des messages */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Demandes des clients
            </h2>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Aucune demande pour le moment</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {messages.map((msg) => (
                <div key={msg.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{msg.nom}</h3>
                      <p className="text-sm text-gray-500">{msg.email} • {msg.telephone}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(msg.status)}`}>
                      {msg.status === 'envoye' ? 'À traiter' : msg.status === 'lu' ? 'Lu' : 'Répondu'}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{msg.message}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">
                      Reçu le {new Date(msg.created_at).toLocaleString('fr-FR')}
                    </p>
                    <div className="flex gap-2">
                      {msg.status !== 'lu' && msg.status !== 'repondu' && (
                        <button
                          onClick={() => markAsRead(msg.id)}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition"
                        >
                          Marquer comme lu
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedMessage(msg)}
                        className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                      >
                        Répondre
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Modal de réponse */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Répondre à {selectedMessage.nom}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Message original :</strong> {selectedMessage.message}
            </p>
            <textarea
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              rows={5}
              placeholder="Votre réponse..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setSelectedMessage(null)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-400 transition"
              >
                Annuler
              </button>
              <button
                onClick={sendResponse}
                disabled={sending || !responseText.trim()}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {sending ? 'Envoi...' : 'Envoyer la réponse'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <AuthGuard allowedRoles={['admin']}>
      <AdminDashboardContent />
    </AuthGuard>
  );
}