import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { whyGeniusReasons } from '@/config/business';
import { Target, ShieldCheck, UserCheck, MessageSquare } from 'lucide-react';

const icons = [Target, ShieldCheck, UserCheck, MessageSquare];

export default function WhyGenius() {
  const { ref, controls, variants } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white section-padding" ref={ref}>
      <div className="container-main max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" animate={controls} variants={variants}>
            <span className="inline-block bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
              Our Principles
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 leading-tight">
              Built around the way businesses actually hire.
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" animate={controls} variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {whyGeniusReasons.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={index} variants={itemVariants} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 shrink-0">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
