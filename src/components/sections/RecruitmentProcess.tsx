import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  { id: '01', title: 'Understand', desc: 'Detailed requirement analysis and role mapping.' },
  { id: '02', title: 'Source', desc: 'Identifying candidates from various channels.' },
  { id: '03', title: 'Screen', desc: 'Evaluating candidates against the requirement.' },
  { id: '04', title: 'Shortlist', desc: 'Presenting curated profiles ready for review.' },
  { id: '05', title: 'Coordinate', desc: 'Managing the interview and feedback loop.' },
  { id: '06', title: 'Follow Up', desc: 'Ensuring smooth transition post-offer.' }
];

export default function RecruitmentProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-slate-900 text-white section-padding">
      <div className="container-main">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
            Our Process
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4">
            A recruitment process built around your requirement.
          </h2>
          <p className="text-slate-400 font-medium">
            We follow a structured system to ensure thorough candidate screening.
          </p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-800 md:before:hidden"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-16 md:pl-0 flex flex-col h-full group"
            >
              {/* Mobile Timeline Node */}
              <div className="absolute left-0 top-1 w-12 h-12 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center font-bold text-cyan-400 z-10 md:hidden">
                {step.id}
              </div>

              {/* Card */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8 relative overflow-hidden group-hover:bg-slate-800 transition-colors duration-300 flex-1">
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-700/30 group-hover:text-cyan-500/10 transition-colors duration-300 pointer-events-none">
                  {step.id}
                </div>
                <div className="hidden md:flex w-12 h-12 bg-slate-900 rounded-full items-center justify-center font-bold text-cyan-400 border border-slate-700 mb-6 relative z-10">
                  {step.id}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-medium relative z-10">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
