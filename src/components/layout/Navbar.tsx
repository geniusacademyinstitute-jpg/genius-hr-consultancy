import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/config/business';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const navLinks = navigation.map((n) => ({ label: n.label, path: n.href }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-4'
          : 'bg-white py-6 border-b border-slate-100'
      }`}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-4 2xl:gap-10">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col z-50 relative group transition-opacity hover:opacity-90 py-1 shrink-0">
            {/* Desktop Wordmark */}
            <div className="hidden xl:flex flex-col">
              <div className="flex items-baseline gap-2 2xl:gap-2.5">
                <span className="font-extrabold text-[24px] 2xl:text-[34px] tracking-tight text-slate-900 leading-none">
                  GENIUS
                </span>
                <span className="font-semibold text-[16px] 2xl:text-[22px] tracking-wider text-cyan-600 leading-none translate-y-[1px]">
                  HR CONSULTANCY
                </span>
              </div>
              <span className="block text-[9px] 2xl:text-[12px] uppercase tracking-[0.16em] text-slate-500 mt-1.5 2xl:mt-2 font-semibold leading-none">
                BY GENIUS GROUPS VENTURES
              </span>
            </div>

            {/* Mobile/Tablet Wordmark - Dedicated Lockup */}
            <div className="flex xl:hidden flex-col items-start justify-center">
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-[22px] tracking-tight text-slate-900 leading-none">
                  GENIUS
                </span>
                <span className="font-semibold text-[14px] tracking-wider text-cyan-600 leading-none">
                  HR CONSULTANCY
                </span>
              </div>
              <span className="block text-[8.5px] uppercase tracking-[0.2em] text-slate-500 mt-1.5 font-semibold leading-none">
                BY GENIUS GROUPS VENTURES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center gap-4 2xl:gap-8 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] 2xl:text-[15px] transition-colors hover:text-cyan-600 font-bold ${
                    isActive ? 'text-cyan-600' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Section */}
          <div className="hidden xl:flex items-center justify-end">
            <Button href="/employers" variant="primary" size="md" className="w-[220px] 2xl:w-[260px] text-[13px] 2xl:text-[15px] whitespace-nowrap justify-center">
              Submit Hiring Requirement
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden relative z-50 p-2 text-slate-900"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out xl:hidden pt-24 pb-safe ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full px-6 overflow-y-auto">
            <div className="flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-bold ${
                    location.pathname === link.path ? 'text-cyan-600' : 'text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pb-12 pt-8 border-t border-slate-200 flex flex-col gap-4">
              <Button href="/employers" variant="primary" className="w-full">
                Submit Requirement
              </Button>
              <Button href="/contact" variant="secondary" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
