import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Sparkles } from 'lucide-react';
import { surahs } from './data/verses';
import { QuranVerse } from './components/QuranVerse';
import { Verse, Surah } from './types/quran';

function App() {
  const [currentSurah, setCurrentSurah] = useState<Surah>(surahs[0]);
  const [currentVerse, setCurrentVerse] = useState<Verse>(surahs[0].verses[0]);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomVerse = () => {
    setIsLoading(true);
    
    // Select random surah
    const randomSurah = surahs[Math.floor(Math.random() * surahs.length)];
    // Select random verse from the surah
    const randomVerse = randomSurah.verses[Math.floor(Math.random() * randomSurah.verses.length)];
    
    setTimeout(() => {
      setCurrentSurah(randomSurah);
      setCurrentVerse(randomVerse);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center">
          <Book className="w-12 h-12 text-zinc-400 mr-3" />
          <h1 className="text-4xl font-bold text-white">
            Hikma
          </h1>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isLoading && <QuranVerse key={currentVerse.id} verse={currentVerse} surah={currentSurah} />}
      </AnimatePresence>

      <motion.button
        onClick={generateRandomVerse}
        disabled={isLoading}
        className="mt-8 px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-medium flex items-center space-x-2 shadow-lg hover:shadow-zinc-800/20 transition-all duration-300 disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sparkles className="w-5 h-5" />
        <span>Nouveau Verset</span>
      </motion.button>
    </div>
  );
}

export default App;