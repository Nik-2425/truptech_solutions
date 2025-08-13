import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import GlobalClientMap from './components/GlobalClientMap';
import SolutionsPreview from './components/SolutionsPreview';
import LiveProjectTicker from './components/LiveProjectTicker';
import ClientTestimonials from './components/ClientTestimonials';
import InnovationSpotlight from './components/InnovationSpotlight';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach(el => observer?.observe(el));

    return () => {
      scrollElements?.forEach(el => observer?.unobserve(el));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>TrupTECH Solutions - AI Technology Solutions Hub | Trust + Technology</title>
        <meta 
          name="description" 
          content="Democratizing advanced AI and automation solutions for businesses worldwide. TrupTECH delivers cutting-edge technology solutions with global expertise and local understanding. Transform your business with our AI-powered platforms, automation systems, and custom development services." 
        />
        <meta 
          name="keywords" 
          content="AI solutions, automation systems, custom development, tech consulting, artificial intelligence, machine learning, business automation, digital transformation, technology solutions, TrupTECH" 
        />
        <meta name="author" content="TrupTECH Solutions" />
        <meta property="og:title" content="TrupTECH Solutions - AI Technology Solutions Hub" />
        <meta 
          property="og:description" 
          content="Transform your business with AI-powered solutions. Serving 130+ clients across 8 countries with 99.9% uptime SLA." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://truptech.com/homepage-ai-technology-solutions-hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TrupTECH Solutions - AI Technology Solutions Hub" />
        <meta 
          name="twitter:description" 
          content="Democratizing advanced technology solutions for businesses worldwide. Trust + Technology." 
        />
        <link rel="canonical" href="https://truptech.com/homepage-ai-technology-solutions-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Global Client Map */}
          <div className="scroll-reveal">
            <GlobalClientMap />
          </div>

          {/* Solutions Preview */}
          <div className="scroll-reveal">
            <SolutionsPreview />
          </div>

          {/* Live Project Ticker */}
          <div className="scroll-reveal">
            <LiveProjectTicker />
          </div>

          {/* Client Testimonials */}
          <div className="scroll-reveal">
            <ClientTestimonials />
          </div>

          {/* Innovation Spotlight */}
          <div className="scroll-reveal">
            <InnovationSpotlight />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;