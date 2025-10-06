import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';
import { prefersReducedMotion } from '../utils/performanceOptimizations';

export const About: React.FC = () => {
  const shouldReduceMotion = prefersReducedMotion();

  const stats = [
    { icon: Award, label: 'Years Experience', value: '25+' },
    { icon: Users, label: 'Expert Team Members', value: '50+' },
    { icon: Globe, label: 'Countries Served', value: '15+' },
    { icon: TrendingUp, label: 'Successful Projects', value: '200+' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              About BridgeLink
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              With over two decades of experience in geological consulting, BridgeLink 
              Mineral Consultants has established itself as a trusted partner in the 
              mining and exploration industry.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our team of expert geologists, engineers, and consultants work together 
              to provide comprehensive solutions that bridge the gap between geological 
              science and practical mining applications.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-300"
                >
                  <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
              <OptimizedImage
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
                alt="Geological survey team"
                className="w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-100 max-w-[200px] sm:max-w-none"
            >
              <div className="text-lg sm:text-2xl font-bold text-amber-600">ISO 9001</div>
              <div className="text-xs sm:text-sm text-gray-600">Certified Quality</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;