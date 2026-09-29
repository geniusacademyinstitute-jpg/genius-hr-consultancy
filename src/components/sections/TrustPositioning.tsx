import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
 { id: '01', title: 'Understand' },
 { id: '02', title: 'Source' },
 { id: '03', title: 'Screen' },
 { id: '04', title: 'Shortlist' },
 { id: '05', title: 'Coordinate' },
 { id: '06', title: 'Follow Up' }
];

export default function TrustPositioning() {
 const containerRef = useRef(null);
 const isInView = useInView(containerRef, { once: true, amount: 0.2 });

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
   opacity: 1,
   transition: { staggerChildren: 0.1 }
  }
 };

 const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
 };

 return (
  <section className="bg-slate-900 text-white section-padding overflow-hidden">
   <div className="container-main" ref={containerRef}>
    <div className="max-w-3xl mb-16">
     <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
     >
      A recruitment process built around your requirement.
     </motion.h2>
     <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-lg text-gray-400"
     >
      Every hiring requirement is different. Our approach begins with understanding the role, the business need and the candidate profile before moving into sourcing and coordination.
     </motion.p>
    </div>

    <motion.div 
     variants={containerVariants}
     initial="hidden"
     animate={isInView ? "visible" : "hidden"}
     className="mt-20"
    >
     <div className="flex lg:grid lg:grid-cols-6 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
      {steps.map((step, index) => (
       <motion.div 
        key={step.id} 
        variants={itemVariants}
        className="relative flex-none w-48 lg:w-auto snap-start"
       >
        {/* Connecting Line - Only on desktop and not for the last item */}
        {index !== steps.length - 1 && (
         <div className="hidden lg:block absolute top-[10px] left-8 right-[-2rem] h-px bg-white/20 z-0" />
        )}
        
        <div className="flex flex-col gap-4 relative z-10">
         <div className="text-cyan-600 text-sm font-mono bg-slate-900 inline-block pr-4 w-fit">
          {step.id}
         </div>
         <div className="text-white font-medium text-lg">
          {step.title}
         </div>
        </div>
       </motion.div>
      ))}
     </div>
    </motion.div>
   </div>
  </section>
 );
}
