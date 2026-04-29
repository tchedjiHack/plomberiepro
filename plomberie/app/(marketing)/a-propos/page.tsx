// app/page.tsx (extrait - ajoutez les IDs aux sections)
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Droplets, Wrench, Clock, Shield, ThumbsUp, MapPin, Star, CheckCircle, AlertCircle, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';
import Footer from '@/app/components/Footer';

export default function Home() {

  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: ''
  });

    const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    // Validation simple
    if (!formData.nom || !formData.telephone) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez remplir tous les champs obligatoires'
      });
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            nom: formData.nom,
            telephone: formData.telephone,
            email: formData.email || null,
            message: formData.message || null,
            status: 'nouveau'
          }
        ])
        .select();

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Votre demande a été envoyée ! Nous vous rappellerons sous 15 minutes.'
      });
      
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        telephone: '',
        email: '',
        message: ''
      });
      
      // Optionnel : fermer le message après 5 secondes
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section avec ID pour ancrage */}
     <section id="accueil" className="relative overflow-hidden pt-6">

      <div className="absolute inset-0">
    <Image
      src="/images/plumb.jpg"
      alt="Plomberie professionnelle"
      fill
      className="object-cover"
      priority
    />
<div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 to-blue-950/80"></div>          </div>
      <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 lg:py-48">
        {/* Contenu hero centré */}
        <div className="flex flex-col items-center text-center">
          {/* Badge étoiles */}
             <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur rounded-full px-6 py-3 mb-8">
            <span className="text-yellow-300 text-sm font-medium">⭐ 4.9/5</span>
            <span className="text-white/80 text-sm">• 500+ avis clients</span>
          </div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Une <span className="text-blue-500">fuite</span> ou une <span className="text-blue-500">panne</span> ?
          </h1>
          
          {/* Sous-titre */}
          <h3 className="text-xl md:text-2xl lg:text-2xl text-white leading-tight mb-16"> <span className='font-bold'>Plomberie</span> 
            <span className="text-blue-500 font-bold"> Pro</span> intervient vite et s'en occupe pour de bon.
          </h3>
          
         
          
          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Bouton Appelez maintenant */}
            
            <Link 
              href="tel:0123456789" 
              className="group relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 overflow-hidden"
            >
              {/* Effet nuage */}
              {/* <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="absolute -inset-4 rounded-full bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-0 group-hover:scale-100 origin-center"></span> */}
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Appeler maintenant</span>
            </Link>
            
            {/* Bouton Nos services */}
            <Link 
              href="#services" 
              className="group relative border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>
              <span className="absolute -inset-4 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-0 group-hover:scale-100 origin-center"></span>
              <span className="relative z-10">Nos services</span>
            </Link>
          </div>

              <div className="w-full mt-18">
                <p className="text-white/90 text-base md:text-lg">
                 Au service des particuliers et professionnels · Intervention locale
                </p>
              </div>
  {/* Délai d'intervention */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 w-full max-w-3xl mx-auto">
                
                {/* Délai d'intervention */}
                <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-blue-400/50">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400">1h</div>
                  <div className="text-white/70 text-sm md:text-base mt-2">Délai moyen d'intervention</div>
                </div>
                
                {/* Disponibilité */}
                <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-blue-400/50">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400">7j/7</div>
                  <div className="text-white/70 text-sm md:text-base mt-2">Disponibilité toute la semaine</div>
                </div>
                
                {/* Garantie */}
                <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-blue-400/50">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400">5 ans</div>
                  <div className="text-white/70 text-sm md:text-base mt-2">Garantie sur nos travaux</div>
                </div>
                
              </div>
  
          </div>
                
      </div>
    </section>

      {/* Services Section avec ID */}
      <section id="services" className="relative py-20 px-4 overflow-hidden">

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nos <span className='text-blue-500'>services</span>  professionnels</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Des solutions adaptées à tous vos besoins en plomberie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                {service.badge && (
                  <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold px-2 py-1 rounded-full">
                    ⚡ {service.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À propos avec ID */}
      <section id="apropos" className="bg-gray-100 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">À propos de nous</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              Depuis 1995, nous offrons des services de plomberie de qualité supérieure avec des artisans passionnés et dévoués.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div >
                        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/plumb.jpg"
              alt="Notre équipe de plombiers professionnels"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Artisans certifiés</h3>
                  <p className="text-gray-600 dark:text-gray-400">Tous nos plombiers sont certifiés RGE et régulièrement formés aux dernières technologies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Intervention rapide</h3>
                  <p className="text-gray-600 dark:text-gray-400">Nous nous engageons à intervenir sous 1h maximum en cas d'urgence dans toute l'Île-de-France.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Satisfaction garantie</h3>
                  <p className="text-gray-600 dark:text-gray-400">Avec plus de 500 avis positifs, notre priorité est votre entière satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Pourquoi nous faire confiance ?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Des années d'expérience au service de nos clients</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-blue-900 dark:bg-blue-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 rounded-full mb-6">
            <AlertCircle className="w-8 h-8" />
            <span className="font-bold text-4xl text-white">URGENT ?</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Besoin d'un plombier en urgence ?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Intervention rapide sous 1h dans toute l'Île-de-France
          </p>
          <Link
            href="tel:0123456789"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 hover:scale-105 text-lg shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Appeler maintenant
          </Link>
        </div>
      </section>

      {/* Contact Section avec ID */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2">
              {/* Partie gauche - Informations */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Demandez votre devis gratuit</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Remplissez le formulaire et nous vous rappelons sous 15 minutes maximum.
                </p>
                
                {/* Témoignage rapide */}
                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                    <span className="text-white/80 text-sm">Marie, Paris</span>
                  </div>
                  <p className="text-white/80 text-sm italic">
                    "Devis reçu en 10 min, intervention le jour même. Très professionnel !"
                  </p>
                </div>
                
                {/* Horaires */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Réponse sous 15 min</p>
                      <p className="text-sm text-white/60">7j/7, même le dimanche</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Appel direct</p>
                      <p className="text-sm text-white/60">01 23 45 67 89</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Partie droite - Formulaire */}
              <div className="p-8 md:p-12">
                {/* Message de statut */}
                {submitStatus.type === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-green-700 dark:text-green-300 text-sm">{submitStatus.message}</p>
                  </div>
                )}
                
                {submitStatus.type === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm">{submitStatus.message}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description du problème
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Décrivez votre problème (fuite, panne, installation...)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer la demande
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    En soumettant ce formulaire, vous acceptez que vos données soient traitées pour répondre à votre demande.
                    <br />Sans engagement et 100% gratuit.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Testimonials */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Ce que disent nos clients</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Plus de 500 clients satisfaits</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

// Données (inchangées)
const services = [
  {
    icon: <Wrench className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: "Dépannage urgence",
    description: "Intervention rapide pour fuites, canalisations bouchées et pannes de chauffe-eau.",
    badge: "24h/24"
  },
  {
    icon: <Droplets className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: "Installation",
    description: "Installation de sanitaires, radiateurs, chauffe-eaux et équipements neufs."
  },
  {
    icon: <Shield className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    title: "Rénovation complète",
    description: "Rénovation de salle de bain, mise aux normes et économies d'eau."
  }
];

const features = [
  {
    icon: <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Rapide",
    description: "Intervention sous 1h en urgence"
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Professionnel",
    description: "Artisans certifiés RGE"
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Garantie 5 ans",
    description: "Tous nos travaux sont garantis"
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Devis gratuit",
    description: "Sans engagement"
  }
];

const testimonials = [
  {
    name: "Marie Dubois",
    content: "Intervention très rapide et professionnelle. Le technicien a résolu mon problème de fuite en moins d'une heure. Je recommande !",
    service: "Dépannage urgence"
  },
  {
    name: "Thomas Martin",
    content: "Excellent travail pour la rénovation complète de ma salle de bain. Respect des délais et prix très correct.",
    service: "Rénovation"
  },
  {
    name: "Sophie Bernard",
    content: "Service client au top. Devis clair et détaillé. Très satisfaite de l'installation de mon nouveau chauffe-eau.",
    service: "Installation"
  }
];