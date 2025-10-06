import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe, Award } from 'lucide-react';
import { prefersReducedMotion } from '../utils/performanceOptimizations';

interface StrategyProps {
  language: 'en' | 'fr';
}

const Strategy: React.FC<StrategyProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Strategy & Goals',
      subtitle: 'Positioning for Sustainable Growth',
      description: 'Our strategic roadmap focuses on sustainable expansion, operational excellence, and establishing Bridgelink as the leading mining consolidation vehicle in Zambia.',
      strategies: [
        {
          icon: Target,
          period: 'Short-term (1-2 years)',
          title: 'Cost Reduction & Production Increase',
          goals: [
            'Optimize operational efficiency across all sites',
            'Implement advanced cost management systems',
            'Increase production capacity by 25%',
            'Streamline supply chain operations'
          ],
          color: 'from-red-500 to-pink-600'
        },
        {
          icon: TrendingUp,
          period: 'Medium-term (3-5 years)',
          title: 'Expand Exploration & New Mines',
          goals: [
            'Acquire new mineral concessions in target regions',
            'Develop 3-5 new mining sites',
            'Expand geological survey capabilities',
            'Establish regional processing centers'
          ],
          color: 'from-blue-500 to-cyan-600'
        },
        {
          icon: Globe,
          period: 'Long-term (5-10 years)',
          title: 'Leading Consolidation Vehicle',
          goals: [
            'Become the premier mining consolidator in Zambia',
            'Establish international partnerships',
            'Achieve carbon-neutral operations',
            'Lead industry sustainability initiatives'
          ],
          color: 'from-green-500 to-emerald-600'
        }
      ],
      focus: {
        title: 'Strategic Focus Areas',
        areas: [
          {
            icon: Award,
            title: 'Gold Operations',
            description: 'Expanding gold mining capabilities with advanced extraction technologies'
          },
          {
            icon: Target,
            title: 'Copper Production',
            description: 'Maximizing copper output through operational efficiency improvements'
          },
          {
            icon: TrendingUp,
            title: 'Coltan Development',
            description: 'Developing coltan resources to meet growing global demand'
          },
          {
  const shouldReduceMotion = prefersReducedMotion();

            icon: Globe,
            title: 'Cobalt Innovation',
            description: 'Leading cobalt extraction innovation for electric vehicle markets'
          }
        ]
      }
    },
    fr: {
      title: 'Stratégie & Objectifs',
      subtitle: 'Positionnement pour une Croissance Durable',
      description: 'Notre feuille de route stratégique se concentre sur l\'expansion durable, l\'excellence opérationnelle et l\'établissement de Bridgelink comme le véhicule de consolidation minière leader en Zambie.',
      strategies: [
        {
          icon: Target,
          period: 'Court terme (1-2 ans)',
          title: 'Réduction des Coûts & Augmentation de la Production',
          goals: [
            'Optimiser l\'efficacité opérationnelle sur tous les sites',
            'Implémenter des systèmes avancés de gestion des coûts',
            'Augmenter la capacité de production de 25%',
            'Rationaliser les opérations de chaîne d\'approvisionnement'
          ],
          color: 'from-red-500 to-pink-600'
        },
        {
          icon: TrendingUp,
          period: 'Moyen terme (3-5 ans)',
          title: 'Expansion de l\'Exploration & Nouvelles Mines',
          goals: [
            'Acquérir de nouvelles concessions minérales dans les régions cibles',
            'Développer 3-5 nouveaux sites miniers',
            'Étendre les capacités d\'enquête géologique',
            'Établir des centres de traitement régionaux'
          ],
          color: 'from-blue-500 to-cyan-600'
        },
        {
          icon: Globe,
          period: 'Long terme (5-10 ans)',
          title: 'Véhicule de Consolidation Leader',
          goals: [
            'Devenir le consolidateur minier premier en Zambie',
            'Établir des partenariats internationaux',
            'Atteindre des opérations neutres en carbone',
            'Diriger les initiatives de durabilité de l\'industrie'
          ],
          color: 'from-green-500 to-emerald-600'
        }
      ],
      focus: {
        title: 'Domaines d\'Attention Stratégique',
        areas: [
          {
            icon: Award,
            title: 'Opérations d\'Or',
            description: 'Expansion des capacités d\'extraction d\'or avec des technologies d\'extraction avancées'
          },
          {
            icon: Target,
            title: 'Production de Cuivre',
            description: 'Maximisation de la production de cuivre grâce à des améliorations d\'efficacité opérationnelle'
          },
          {
            icon: TrendingUp,
            title: 'Développement du Coltan',
            description: 'Développement des ressources de coltan pour répondre à la demande mondiale croissante'
          },
          {
            icon: Globe,
            title: 'Innovation Cobalt',
            description: 'Innovation leader dans l\'extraction de cobalt pour les marchés de véhicules électriques'
          }
        ]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              {content[language].title}
            </h2>
            <p className="text-lg sm:text-xl text-amber-600 font-semibold">
              {content[language].subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {content[language].description}
            </p>
          </motion.div>

          {/* Strategy Timeline */}
          <div className="space-y-6 sm:space-y-8">
            {content[language].strategies.map((strategy) => (
              <motion.div
                key={strategy.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col xl:flex-row xl:items-center xl:space-x-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 xl:mb-0">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${strategy.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <strategy.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {strategy.period}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{strategy.title}</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
                      {strategy.goals.map((goal, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.2 }}
              </motion.div>
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
          </div>

                <strategy.icon className="h-10 w-10 sm:h-12 sm:w-12 text-amber-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{strategy.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{strategy.description}</p>
              {content[language].focus.title}
            </h3>
              <ul className="space-y-1 sm:space-y-2">
              {content[language].focus.areas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                    transition={{ duration: shouldReduceMotion ? 0.1 : 0.4, delay: shouldReduceMotion ? 0 : (index * 0.2) + (featureIndex * 0.1) }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-white" />
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{area.description}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Strategy</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">