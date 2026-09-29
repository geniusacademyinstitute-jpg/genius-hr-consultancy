import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Filter, Users } from 'lucide-react';

const phases = [
  { 
    id: '01', 
    title: 'FIND', 
    text: 'Identify suitable candidate pools across multiple channels.',
    icon: Search
  },
  { 
    id: '02', 
    title: 'FILTER', 
    text: 'Screen and verify candidates against the actual requirement.',
    icon: Filter
  },
  { 
    id: '03', 
    title: 'CONNECT', 
    text: 'Coordinate seamlessly between the employer and candidate.',
    icon: Users
  }
];

export default function BusinessProblem() {
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
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" animate={controls} variants={variants}>
            <span className="inline-block bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
              The Challenge
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 leading-tight">
              Hiring is more than finding resumes.
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" animate={controls} variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors duration-300 pointer-events-none">
                  {p.id}
                </div>
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 mb-6 relative z-10">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                  {p.title}
                </h3>
                <p className="text-slate-600 font-medium relative z-10">
                  {p.text}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
