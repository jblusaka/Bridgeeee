import React, { useState, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded components
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyServices = React.lazy(() => import('./components/Services'));
const LazyProjects = React.lazy(() => import('./components/Projects'));
const LazyStatistics = React.lazy(() => import('./components/Statistics'));
const LazyGallery = React.lazy(() => import('./components/Gallery'));
const LazyStrategy = React.lazy(() => import('./components/Strategy'));
const LazyGovernance = React.lazy(() => import('./components/Governance'));
const LazyContact = React.lazy(() => import('./components/Contact'));
const LazyFooter = React.lazy(() => import('./components/Footer'));

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  React.useEffect(() => {
    document.title =
      language === 'en'
        ? 'Bridgelink Mineral Consultants Ltd - Mining Excellence in Zambia & DRC'
        : 'Bridgelink Mineral Consultants Ltd - Excellence Minière en Zambie et RDC';
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      {/* Above-the-fold content */}
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />

      {/* Lazy-loaded sections individually */}
      <Suspense fallback={<LoadingSpinner />}>
        <LazyAbout language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyServices language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyProjects language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyStatistics language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyGallery language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyStrategy language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyGovernance language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyContact language={language} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyFooter language={language} />
      </Suspense>
    </div>
  );
}

export default App;
