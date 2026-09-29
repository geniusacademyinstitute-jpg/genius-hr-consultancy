import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/config/business';
import { Briefcase, Users, FileCheck, Calendar, RefreshCcw } from 'lucide-react';

const icons = [Briefcase, Users, FileCheck, Calendar, RefreshCcw];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-slate-50 section-padding">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide uppercase shadow-sm">
            What We Do
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 leading-tight">
            Our Recruitment Services
          </h2>
        </div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-medium">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
