// app/services/installation/page.tsx
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
  Home,
  Bath,
  Thermometer,
  Droplet,
  Zap,
  Hammer,
  PaintBucket,
  Ruler
} from 'lucide-react';

export default function Installation() {
  const servicesList = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Installation chauffe-eau",
      description: "Remplacement et pose de chauffe-eaux électriques, gaz ou thermodynamiques."
    },
    {
      icon: <Bath className="w-6 h-6" />,
      title: "Rénovation salle de bain",
      description: "Installation complète de sanitaires, douches, baignoires et meubles vasque."
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Pose robinetterie",
      description: "Installation de robinets, mitigeurs et douchettes design."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Installation WC",
      description: "Pose de WC classiques, suspendus ou japonais."
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Travaux de plomberie",
      description: "Création ou modification de réseaux d'eau et d'évacuation."
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      title: "Raccordements électroménager",
      description: "Installation lave-linge, lave-vaisselle et adoucisseur d'eau."
    }
  ];

  const etapes = [
    {
      numero: "1",
      titre: "Étude et conseil",
      description: "Analyse de vos besoins, visite technique et devis personnalisé."
    },
    {
      numero: "2",
      titre: "Planification",
      description: "Planification des travaux à votre convenance, délais respectés."
    },
    {
      numero: "3",
      titre: "Installation",
      description: "Pose professionnelle par nos artisans certifiés."
    },
    {
      numero: "4",
      titre: "Finitions et garantie",
      description: "Nettoyage du chantier et garantie 5 ans sur nos travaux."
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/installation-hero.jpg"
            alt="Installation plomberie professionnelle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">                       

            <div className="inline-flex items-center gap-2 bg-blue-500/90 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Hammer className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Installation & rénovation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Installation Plomberie
              <span className="text-blue-300 block">Rénovez et modernisez</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              De l'étude à la réalisation, confiez-nous vos projets d'installation 
              et de rénovation. Artisans qualifiés et matériaux de qualité.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services d'installation */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos prestations <span className="text-blue-500">d'installation</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Des solutions sur mesure pour tous vos projets de plomberie
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

      {/* Étapes de réalisation */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comment <span className="text-blue-500">nous travaillons</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour des résultats parfaits
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {etapes.map((etape, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition">
                  {etape.numero}
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {etape.titre}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {etape.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des garanties solides
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Pour votre tranquillité, nous vous offrons des garanties étendues
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <Shield className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white text-lg">Garantie décennale</h3>
              <p className="text-white/70 text-sm">Assurance responsabilité civile</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <Clock className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white text-lg">Garantie 5 ans</h3>
              <p className="text-white/70 text-sm">Sur tous nos travaux</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <CheckCircle className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white text-lg">Satisfaction garantie</h3>
              <p className="text-white/70 text-sm">Ou remboursé</p>
            </div>
          </div>
        </div>
      </section>
    
    <Footer />
    </div>
  );
}