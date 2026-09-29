import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { business } from '@/config/business';
import Button from '@/components/ui/Button';

const ContactSection = () => {
 return (
  <section className="bg-white section-padding">
   <div className="container mx-auto px-6 max-w-6xl">
    <div className="lg:grid lg:grid-cols-2 gap-16">
     {/* Left Side */}
     <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 lg:mb-0 flex flex-col justify-center"
     >
      <h2 className=" text-4xl lg:text-5xl font-bold text-slate-600-600-900 mb-6 leading-tight">
       Let's Talk About Your Next Hire.
      </h2>
      <p className="text-slate-600-600 text-lg mb-8 leading-relaxed">
       Have a position to fill or a recruitment requirement to discuss? Connect with our team and tell us what you are looking for.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
       <Button href="/employers" variant="primary">
        Submit Requirement
       </Button>
       <Button href={business.whatsappLink} variant="secondary">
        WhatsApp Us
       </Button>
      </div>
     </motion.div>

     {/* Right Side */}
     <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200"
     >
      <div className="space-y-6 mb-8">
       <a href={business.phoneLink} className="flex items-start gap-4 group">
        <div className="mt-1 text-cyan-600">
         <Phone size={24} />
        </div>
        <div>
         <p className="font-medium text-slate-600-600-900 group-hover:text-cyan-600 transition-colors">
          {business.phone}
         </p>
         <p className="text-sm text-slate-600-600">Call us</p>
        </div>
       </a>
       
       <a href={business.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
        <div className="mt-1 text-cyan-600">
         <MessageCircle size={24} />
        </div>
        <div>
         <p className="font-medium text-slate-600-600-900 group-hover:text-cyan-600 transition-colors">
          WhatsApp
         </p>
         <p className="text-sm text-slate-600-600">Message us anytime</p>
        </div>
       </a>

       <a href={business.emailLink} className="flex items-start gap-4 group">
        <div className="mt-1 text-cyan-600">
         <Mail size={24} />
        </div>
        <div>
         <p className="font-medium text-slate-600-600-900 group-hover:text-cyan-600 transition-colors">
          {business.email}
         </p>
         <p className="text-sm text-slate-600-600">Email us</p>
        </div>
       </a>

       <div className="flex items-start gap-4">
        <div className="mt-1 text-cyan-600">
         <MapPin size={24} />
        </div>
        <div>
         <p className="font-medium text-slate-600-600-900">
          {business.address.full}
         </p>
         <p className="text-sm text-slate-600-600">Location</p>
        </div>
       </div>

       <div className="flex items-start gap-4">
        <div className="mt-1 text-cyan-600">
         <Clock size={24} />
        </div>
        <div>
         <p className="font-medium text-slate-600-600-900">
          {business.businessHours.weekdays}
         </p>
         <p className="text-sm text-slate-600-600">{business.businessHours.weekends}</p>
        </div>
       </div>
      </div>

      {/* Map Placeholder or iframe */}
      <div className="rounded-xl bg-slate-900/5 h-48 flex items-center justify-center overflow-hidden">
       {business.mapUrl ? (
        <iframe 
         src={business.mapUrl} 
         width="100%" 
         height="100%" 
         style={{ border: 0 }} 
         allowFullScreen={false} 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"
         title="Office Location"
        ></iframe>
       ) : (
        <span className="text-slate-600-600 text-sm">Map view unavailable</span>
       )}
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
};

export default ContactSection;
