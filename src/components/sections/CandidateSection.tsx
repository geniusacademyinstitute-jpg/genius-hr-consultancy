import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const CandidateSection = () => {
 return (
  <section className="bg-slate-50 section-padding">
   <div className="container mx-auto px-6 max-w-2xl text-center">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
    >
     <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
      Looking for your next opportunity?
     </h2>
     <p className="text-slate-600 text-lg mb-8 leading-relaxed">
      Share your profile with our recruitment team and we can consider it for relevant opportunities based on available vacancies and employer requirements.
     </p>
     <Button href="/candidates" variant="primary" className="mb-10 w-full sm:w-auto">
      Submit Your Resume
     </Button>
     
     <div className="text-sm text-slate-500 mt-4 border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
      <strong className="text-slate-900">Disclaimer:</strong> Submitting your profile does not guarantee employment or an interview.
     </div>
    </motion.div>
   </div>
  </section>
 );
};

export default CandidateSection;
