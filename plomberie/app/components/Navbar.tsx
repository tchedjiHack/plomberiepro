// app/components/Navbar.tsx - Version avec dropdown Services
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Droplets, Menu, X, ChevronDown } from 'lucide-react';
// import ThemeToggle from './ThemeToggle';

export default function Navbar() {

    const pathname = usePathname(); // AJOUTÉ
  
  // AJOUTÉ : Pages où la navbar ne doit pas s'afficher
  const hideNavbarPaths = ['/admin', '/dashboard', '/unauthorized', '/admin/dashboard'];
  const shouldHideNavbar = hideNavbarPaths.includes(pathname);
  
  // AJOUTÉ : Si on est sur une page à cacher, on ne rend rien
  if (shouldHideNavbar) {
    return null;
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
  setIsMobileMenuOpen(false);
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services'},
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ];

  const servicesDropdown = [
    { href: '/services/depannage', label: 'Dépannage', description: 'Intervention rapide 24h/24' },
    { href: '/services/entretien', label: 'Entretien', description: 'Maintenance préventive' },
    { href: '/services/installation', label: 'Installation', description: 'Installation de matériel' },
  ];

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex px-2 md:px-4 justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto w-full md:w-auto md:min-w-[0px] lg:min-w-[950px] transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-0 invisible -translate-y-full'
              : 'opacity-100 visible translate-y-0'
          } ${
            isScrolled
              ? 'bg-white/40 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
              : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md'
          } rounded-2xl border border-gray-100 dark:border-gray-700`}
        >
          <div className="px-5 py-3.5 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <h1 className="text-2xl font-bold">
                <span className="text-white">Plomberie</span>
                <span className="text-blue-500 ml-1">Pro</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href === '' ? '/services' : link.href}
                    className="text-gray-200 hover:text-blue-500 font-medium transition relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/login"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 overflow-hidden"
              >
                Se connecter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel - Centré avec animation */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 transition-all duration-300 md:hidden ${
          isMobileMenuOpen 
            ? 'scale-100 opacity-100 translate-y-[-50%]' 
            : 'scale-90 opacity-0 translate-y-[-40%] pointer-events-none'
        }`}
      >
        <div className="flex flex-col max-h-[80vh] overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-900 rounded-t-2xl flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">
                <span className="text-gray-900 dark:text-white">Plomberie</span>
                <span className="text-blue-500 ml-1">Pro</span>
              </h1>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Mobile Navigation Links - Centrés */}
            <div className="flex-1 py-4">
            {navLinks.map((link) => (
              <div key={link.href} className="w-full">
                <div className="flex justify-center">
                  <Link
                    href={link.href === '' ? '/services' : link.href}
                    onClick={closeMobileMenu}
                    className="inline-block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition font-medium"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 shadow-md"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}