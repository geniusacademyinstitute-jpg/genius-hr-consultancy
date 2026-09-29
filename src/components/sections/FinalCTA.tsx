import React from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl w-full flex flex-col items-center"
        >
          <span className="inline-block bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-wide uppercase">
            Start Hiring
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6 leading-tight">
            Have a position to fill?
          </h2>
          <p className="text-xl text-slate-300 font-medium mb-12">
            Let's start with the requirement.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/employers" variant="primary" size="lg">
              Submit Hiring Requirement
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
