import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center bg-slate-50 overflow-hidden">
      
      {/* Decorative gradient blur (subtle sibling tie) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container-main relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side */}
          <motion.div 
            className="w-full lg:w-6/12"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
                RECRUITMENT & HR CONSULTANCY
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              <span className="block">Your Hiring.</span>
              <span className="block text-cyan-600 mt-1">Our Recruitment Expertise.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed font-medium"
            >
              We help businesses identify, screen and connect with suitable candidates through a structured recruitment process built around their hiring requirements.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/employers" variant="primary" size="lg">
                Submit Hiring Requirement
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Our Team
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Structure matching GA */}
          <div className="hidden lg:flex lg:w-6/12 items-center justify-end relative">
            <div className="relative w-full max-w-lg">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 relative z-20"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Requirement Intake</h3>
                    <p className="text-sm text-slate-500 font-medium">Active Search Process</p>
                  </div>
                  <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-cyan-600 rounded-sm" />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Requirement Analysis</h4>
                      <p className="text-sm text-slate-600 mt-1">Deep alignment on role responsibilities.</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Candidate Profiling</h4>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 bg-slate-100 rounded-full w-full" />
                        <div className="h-2 bg-slate-100 rounded-full w-4/5" />
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Curated Shortlist</h4>
                      <div className="mt-3 flex gap-2">
                        <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-bold">Screened</span>
                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background accent block */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-slate-900 rounded-2xl p-6 text-white shadow-2xl z-30 w-64"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold tracking-wide uppercase text-slate-300">Active Pipeline</span>
                </div>
                <div className="text-2xl font-bold">Ready for Review</div>
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
