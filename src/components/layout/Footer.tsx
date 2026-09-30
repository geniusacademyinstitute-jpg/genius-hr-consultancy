import React from 'react';
import { Link } from 'react-router-dom';
import { business } from '@/config/business';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 lg:pt-24 pb-12">
      <div className="container-main max-w-6xl">
        
        {/* Top Section - Brand & Mission */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-slate-800 pb-16 mb-16 gap-10">
          <div className="max-w-md">
            <div className="flex flex-col mb-4">
              <div className="flex items-baseline gap-2 md:gap-2.5">
                <span className="font-extrabold text-[28px] lg:text-[32px] tracking-tight text-white leading-none">
                  GENIUS
                </span>
                <span className="font-semibold text-[18px] lg:text-[21px] tracking-wider text-cyan-500 leading-none translate-y-[1px]">
                  HR CONSULTANCY
                </span>
              </div>
              <span className="block text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-slate-400 mt-1.5 md:mt-2 font-semibold leading-none">
                BY GENIUS GROUPS VENTURES
              </span>
            </div>
            <div className="text-white text-lg font-bold mb-3">{business.tagline}</div>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              Structured recruitment support for businesses looking for suitable talent.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3 text-sm text-slate-300 font-medium">
            <a href={`mailto:${business.email}`} className="text-white hover:text-cyan-400 transition-colors text-lg font-bold">
              {business.email}
            </a>
            <a href={business.phoneLink} className="hover:text-white transition-colors">
              {business.phone}
            </a>
            <a href={business.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp: {business.whatsapp}
            </a>
            <div className="text-left md:text-right mt-2 text-xs text-slate-500 leading-relaxed max-w-[200px]">
              {business.address.full}
            </div>
            <div className="text-left md:text-right text-xs text-slate-500 font-bold mt-1">
              {business.businessHours.weekdays} <br/> {business.businessHours.weekends}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-slate-800 pb-16 mb-8">
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/process" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">For Employers</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/employers" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">Submit Hiring Requirement</Link></li>
              <li><Link to="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Recruitment Services</Link></li>
              <li><Link to="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">For Candidates</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/candidates" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Submit Resume</Link></li>
              <li><Link to="/candidates#opportunities" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Opportunities</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Genius HR Consultancy. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Powered by Genius Groups Ventures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
