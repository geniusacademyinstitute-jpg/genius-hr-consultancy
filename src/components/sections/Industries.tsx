import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '@/config/business';
import { CheckCircle2 } from 'lucide-react';

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="bg-slate-50 section-padding">
      <div className="container-main max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-slate-900 leading-tight mb-4">
            Recruitment support across business sectors.
          </h2>
          <p className="text-slate-600 font-medium">
            We provide structured hiring solutions tailored to the unique requirements of each industry.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-cyan-50/50 hover:bg-cyan-50 border border-cyan-100/50 shadow-sm hover:shadow-md transition-all rounded-full px-6 py-3 flex items-center gap-3 cursor-default"
            >
              <CheckCircle2 size={18} className="text-cyan-600 shrink-0" />
              <span className="text-sm font-bold text-slate-800">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
