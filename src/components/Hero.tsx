import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';
import { prefersReducedMotion } from '../utils/performanceOptimizations';

export const Hero: React.FC = () => {
  const shouldReduceMotion = prefersReducedMotion();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <OptimizedImage
          src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
          alt="Mining landscape"
          className="w-full h-full"
          priority={true}
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Animated Background Elements */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-10 will-change-transform">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      )}

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          Expert Geological
          <span className="block text-amber-400">Consulting</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-4"
        >
          Bridging the gap between geological expertise and mineral exploration success
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <button
            onClick={scrollToAbout}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center min-h-[44px] touch-manipulation"
          >
            Explore Our Services
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center min-h-[44px] touch-manipulation flex items-center"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.1 : 1, delay: shouldReduceMotion ? 0 : 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-amber-400 transition-colors duration-300 p-2 touch-manipulation"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;