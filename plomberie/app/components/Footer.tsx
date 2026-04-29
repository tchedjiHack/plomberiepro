// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Phone, MapPin, Droplets, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/#contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/conditions-generales', label: 'Conditions générales' },
    { href: '/politique-confidentialite', label: 'Politique de confidentialité' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Grid principale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1 - Logo et description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Droplets className="w-5 h-5 text-white" />
              </div> */}
              <span className="font-bold text-white text-[200%]">Plomberie<span className="text-blue-400">Pro</span></span>
            </div>
            <p className="text-[95%] leading-relaxed">
              Votre expert en plomberie depuis 1995. 
            </p>
            <p className="text-[95%] leading-relaxed">
              Votre expert en plomberie depuis 1995.
            </p>
            <p className="text-[95%] leading-relaxed">
              Votre expert en plomberie depuis 1995.
            </p>
            <p className="text-[95%] leading-relaxed">
              Votre expert en plomberie depuis 1995.
            </p>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h4 className="font-bold text-white my-2 mb-5 text-[150%]">Liens rapides</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300 text-[95%]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Zones d'intervention & Horaires */}
          <div>
            <h4 className="font-bold text-white mb-4 text-[150%]">Zone d'intervention & Horaires</h4>
            <ul className="space-y-6">
              
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-[130%] medium text-white">Zone d'intervention</p>
                  <p className="text-[100%]">Paris & Île-de-France</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-[130%] medium text-white">Horaires</p>
                  <p className="text-[95]">Lun - Ven: 8h - 20h</p>
                  <p className="text-[95]">Sam - Dim: 9h - 18h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Liens légaux */}
          <div>
            <h4 className="font-bold text-white mb-4 text-[150%]">Informations légales</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300 text-[95%]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} PlombierPro. Tous droits réservés.</p>
          <p className="text-xs text-gray-500 mt-2">
            Conçu par Tchédji YOSSI.
          </p>
        </div>
      </div>
    </footer>
  );
}