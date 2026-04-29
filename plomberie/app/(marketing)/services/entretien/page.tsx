// app/services/entretien/page.tsx
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
  Calendar,
  Settings,
  Filter,
  AlertCircle,
  Home,
  Bath,
  Thermometer,
  Droplet,
  Gauge,
  Zap
} from 'lucide-react';

export default function Entretien() {
  const servicesList = [
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Entretien chauffe-eau",
      description: "Vidange, contrôle de l'anode, vérification des sécurités. Prolongez la durée de vie de votre chauffe-eau."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Détartrage canalisation",
      description: "Nettoyage professionnel des canalisations pour prévenir les bouchons et mauvaises odeurs."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Révision robinetterie",
      description: "Contrôle et entretien des robinets, remplacement des joints pour éviter les fuites."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Contrôle pression eau",
      description: "Vérification et réglage de la pression d'eau pour protéger vos installations."
    },
    {
      icon: <Bath className="w-6 h-6" />,
      title: "Entretien sanitaire",
      description: "Nettoyage et contrôle des WC, lavabos, douches et baignoires."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Contrat d'entretien",
      description: "Formule sur mesure avec passage régulier pour une tranquillité totale."
    }
  ];

  const avantages = [
    "Prévention des pannes coûteuses",
    "Prolongation de la durée de vie des équipements",
    "Réduction de votre facture d'eau",
    "Intervention programmée à votre convenance",
    "Rapport détaillé après chaque visite",
    "Priorité en cas d'urgence"
  ];



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/entretien-hero.jpg"
            alt="Entretien plomberie professionnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">                       
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Entretien Plomberie
              <span className="text-blue-300 block">Prévention et durabilité</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Protégez vos installations avec nos contrats d'entretien sur mesure. 
              Interventions programmées et priorité en cas d'urgence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                Devis entretien
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services d'entretien */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos prestations <span className="text-blue-500">d'entretien</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Un entretien régulier pour des installations performantes et durables
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

      {/* Avantages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Pourquoi un <span className="text-blue-500">entretien régulier</span> ?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                L'entretien préventif de vos installations vous permet d'éviter les pannes coûteuses 
                et de prolonger la durée de vie de vos équipements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/entretien-avantages.jpg"
                alt="Avantages entretien plomberie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Protégez vos installations dès aujourd'hui
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Souscrivez à un contrat d'entretien et bénéficiez de la tranquillité d'esprit
          </p>
          <Link
            href="tel:0123456789"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-200 hover:scale-105 text-lg shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Demander un devis
          </Link>
        </div>
      </section>

    <Footer />
    </div>
  );
}