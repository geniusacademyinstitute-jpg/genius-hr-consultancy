import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { business } from '@/config/business';

export default function MobileActionBar() {
 return (
  <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 pb-[env(safe-area-inset-bottom)]">
   <div className="flex items-center justify-between px-2 py-3">
    <a 
     href={business.whatsappLink}
     target="_blank"
     rel="noopener noreferrer"
     className="flex-1 flex flex-col items-center gap-1.5 text-[13px] font-semibold text-slate-600 hover:text-cyan-600 transition-colors"
    >
     <MessageCircle size={22} />
     <span>WhatsApp</span>
    </a>
    
    <div className="w-px h-10 bg-slate-900/10"></div>
    
    <a 
     href={business.phoneLink}
     className="flex-1 flex flex-col items-center gap-1.5 text-[13px] font-semibold text-slate-600 hover:text-cyan-600 transition-colors"
    >
     <Phone size={22} />
     <span>Call Us</span>
    </a>
    
    <div className="w-px h-10 bg-slate-900/10"></div>
    
    <Link 
     to="/employers"
     className="flex-1 flex flex-col items-center gap-1.5 text-[13px] font-semibold text-cyan-600 hover:text-cyan-600-deep transition-colors"
    >
     <FileText size={22} />
     <span>Submit Req</span>
    </Link>
   </div>
  </div>
 );
}
