import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function EmployerSection() {
  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-main">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-0"
          >
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-slate-900 leading-[1.1] mb-6">
              You tell us who you need.<br/>
              <span className="text-cyan-600">We work on the search.</span>
            </h2>
            <p className="text-slate-600 font-medium text-lg mb-10 leading-relaxed max-w-lg">
              Whether you are hiring for one position or managing multiple openings, share the requirement with our recruitment team and we will understand the role before beginning the candidate search process.
            </p>
            <Button href="/employers" variant="primary" size="lg" className="w-full sm:w-auto">
              Submit Hiring Requirement
            </Button>
          </motion.div>

          {/* Right Side Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200 max-w-md mx-auto relative z-10">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-6">
                <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center border border-slate-100">
                  <div className="w-5 h-5 bg-cyan-600 rounded-full" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Requirement Intake</div>
                  <div className="text-xs font-medium text-slate-500">Secure & Confidential</div>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-slate-200 rounded-full" />
                  <div className="h-10 w-full bg-white rounded-lg border border-slate-200 shadow-sm" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-32 bg-slate-200 rounded-full" />
                  <div className="h-10 w-full bg-white rounded-lg border border-slate-200 shadow-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-2 w-16 bg-slate-200 rounded-full" />
                    <div className="h-10 w-full bg-white rounded-lg border border-slate-200 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-12 bg-slate-200 rounded-full" />
                    <div className="h-10 w-full bg-white rounded-lg border border-slate-200 shadow-sm" />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="h-12 w-full bg-cyan-600 hover:bg-cyan-700 transition-colors rounded-full flex items-center justify-center shadow-md">
                    <div className="h-2 w-24 bg-white/50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-50 rounded-full blur-3xl -z-10 opacity-70" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
