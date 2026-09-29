import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
 text-sm font-bold tracking-wider uppercase text-cyan-600?: string;
 title: string;
 description?: string;
 align?: 'left' | 'center';
 dark?: boolean;
}

export default function SectionHeading({
 text-sm font-bold tracking-wider uppercase text-cyan-600,
 title,
 description,
 align = 'center',
 dark = false,
}: SectionHeadingProps) {
 const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
 
 return (
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: '-50px' }}
   transition={{ duration: 0.6 }}
   className={`max-w-3xl ${alignClass}`}
  >
   {text-sm font-bold tracking-wider uppercase text-cyan-600 && (
    <span className="text-sm font-bold tracking-wider uppercase text-cyan-600 block text-cyan-600 font-bold tracking-wider uppercase text-sm mb-3">
     {text-sm font-bold tracking-wider uppercase text-cyan-600}
    </span>
   )}
   <h2
    className={` text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance ${
     dark ? 'text-white' : 'text-slate-600-900'
    }`}
   >
    {title}
   </h2>
   {description && (
    <p
     className={`text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
      dark ? 'text-cyan-100/70' : 'text-slate-600'
     }`}
    >
     {description}
    </p>
   )}
  </motion.div>
 );
}
