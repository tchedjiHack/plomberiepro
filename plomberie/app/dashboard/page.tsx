// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import AuthGuard from '@/app/components/AuthGuard';
import Link from 'next/link';
import { Mail, LogOut, User, Clock, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
  admin_responses?: { response: string; created_at: string }[];
}

export default function UserDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchUserAndMessages();
  }, []);

  const fetchUserAndMessages = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);

    if (user) {
      const { data: messages, error } = await supabase
        .from('messages')
        .select(`
          *,
          admin_responses (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (!error && messages) {
        setMessages(messages);
      }
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'envoye':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Envoyé</span>;
      case 'lu':
        return <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Lu</span>;
      case 'repondu':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Répondu</span>;
      default:
        return null;
    }
  };

  return (
    <AuthGuard allowedRoles={['user']}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <User className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Mon Espace
                </h1>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Mes messages
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Historique de toutes vos demandes de devis
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow">
              <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Aucun message
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vous n'avez encore envoyé aucune demande.
              </p>
              <Link
                href="/#contact"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Envoyer une demande
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {msg.nom}
                      </h3>
                      <p className="text-sm text-gray-500">{msg.email} • {msg.telephone}</p>
                    </div>
                    {getStatusBadge(msg.status)}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {msg.message}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Envoyé le {new Date(msg.created_at).toLocaleDateString('fr-FR')}</span>
                  </div>

                  {/* Réponse admin */}
                  {msg.admin_responses && msg.admin_responses.length > 0 && (
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Réponse de l'équipe
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {msg.admin_responses[0].response}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Répondu le {new Date(msg.admin_responses[0].created_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </AuthGuard>
  );
}