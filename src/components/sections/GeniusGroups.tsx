import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function GeniusGroups() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section className="bg-slate-50 py-24" ref={ref}>
      <div className="container-main max-w-4xl">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={variants}
          className="bg-white border-2 border-slate-900 rounded-2xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden"
        >
          {/* Subtle cyan accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-cyan-600" />
          
          <span className="inline-block bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
            GENIUS GROUPS VENTURES
          </span>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            One group. Multiple capabilities.
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Genius HR Consultancy operates as the dedicated recruitment and HR services vertical of <strong className="text-slate-900">Genius Groups Ventures</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
