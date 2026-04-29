// app/services/depannage/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { 
  Phone, 
  Droplets, 
  Wrench, 
  Clock, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  AlertTriangle,
  Droplet,
  Thermometer,
  Snowflake,
  Home,
  Bath,
  Zap
} from 'lucide-react';

export default function Depannage() {
  const servicesList = [
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Fuite d'eau",
      description: "Recherche et réparation de fuites sur canalisations, robinetterie et chauffe-eau."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Canalisation bouchée",
      description: "Débouchage mécanique ou hydro-curage pour éviers, douches, WC et canalisations."
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Chauffe-eau en panne",
      description: "Diagnostic et réparation de tous types de chauffe-eaux (électrique, gaz, solaire)."
    },
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Problème de pression",
      description: "Rétablissement de la pression d'eau, remplacement de réducteur de pression."
    },
    {
      icon: <Bath className="w-6 h-6" />,
      title: "Sanitaires défectueux",
      description: "Réparation de WC, lavabos, bidets, douches et baignoires."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Urgence 24h/24",
      description: "Intervention rapide jour et nuit, même le week-end et jours fériés."
    }
  ];

  const garanties = [
    "Devis gratuit et sans engagement",
    "Déplacement offert en Île-de-France",
    "Matériaux de qualité garantis 5 ans",
    "Intervention sous 1h en urgence",
    "Artisans certifiés RGE",
    "Paiement sécurisé (CB, chèque, espèces)"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/depannage-hero.jpg"
            alt="Dépannage plomberie urgence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mb-4 mx-auto px-4 py-24 md:py-32">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">                       
            
            {/* Titre */}
          <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 whitespace-nowrap">
      Dépannage <span className="text-blue-300">Plomberie</span>
    </h1>

            <p>
              <span className="text-4xl font-bold text-blue-300 block my-7">Urgence 24h/24 - 7j/7</span>
            </p>
            
            {/* Description */}
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Fuite d'eau, canalisation bouchée, chauffe-eau en panne ? 
              Notre équipe intervient rapidement partout en Île-de-France.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Demander un devis
              </Link>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos <span className="text-blue-500">interventions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Nous intervenons pour tous types de problèmes de plomberie, du plus simple au plus complexe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-blue-50 dark:bg-blue-950/30 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pourquoi faire appel à Plomberie<span className="text-blue-500">Pro</span> ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Des artisans passionnés et des garanties solides pour votre tranquillité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Liste des garanties */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Nos <span className="text-blue-500">engagements</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {garanties.map((garantie, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{garantie}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Besoin d'un dépannage urgent ?</h3>
              <p className="text-white/80 mb-6">
                Notre équipe est disponible 24h/24, 7j/7. Intervention rapide sous 1h.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Appeler maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />            
      
      
    </div>
  );
}