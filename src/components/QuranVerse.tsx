import React from 'react';
import { motion } from 'framer-motion';
import { VerseDecoration } from './VerseDecoration';
import { Verse, Surah } from '../types/quran';

interface QuranVerseProps {
  verse: Verse;
  surah: Surah;
}

export const QuranVerse: React.FC<QuranVerseProps> = ({ verse, surah }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-2xl w-full bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-lg shadow-zinc-800/10 p-8 space-y-6 border border-zinc-800 overflow-hidden"
    >
      <VerseDecoration />
      
      <motion.p 
        className="text-2xl md:text-3xl text-right font-arabic leading-relaxed text-zinc-200 relative z-10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {verse.text}
      </motion.p>
      
      <motion.p 
        className="text-lg text-zinc-400 italic relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {verse.translation}
      </motion.p>
      
      <motion.div 
        className="text-sm text-zinc-500 font-medium relative z-10 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span>Sourate {surah.transliteration} ({surah.translation})</span>
        <span>Verset {verse.id}</span>
      </motion.div>
    </motion.div>
  );
};