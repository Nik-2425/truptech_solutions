import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import ValuesSection from './components/ValuesSection';
import CredentialsSection from './components/CredentialsSection';
import WhyTrupTechSection from './components/WhyTrupTechSection';
import TechConcernsSection from './components/TechConcernsSection';

const AboutTrupTechPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About TrupTECH - Trust & Technology Story | AI Solutions & Digital Transformation</title>
        <meta name="description" content="Discover TrupTECH's story as technology translators who democratize advanced AI and automation solutions. Meet our global team, learn our values, and see why businesses worldwide trust us." />
        <meta name="keywords" content="TrupTECH story, technology translation, AI democratization, digital transformation, cultural intelligence, global team, trust technology" />
        <meta property="og:title" content="About TrupTECH - Trust & Technology Story" />
        <meta property="og:description" content="Founded on the belief that advanced technology should be accessible to all businesses. Learn how TrupTECH bridges complex possibilities with practical outcomes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-trup-tech-trust-technology-story" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <PhilosophySection />
          <TeamSection />
          <TimelineSection />
          <ValuesSection />
          <CredentialsSection />
          <WhyTrupTechSection />
          <TechConcernsSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">TrupTECH Solutions</div>
                    <div className="text-sm text-white/60">Trust + Technology</div>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                  Democratizing advanced technology solutions for businesses of all sizes. 
                  We bridge the gap between complex possibilities and practical outcomes.
                </p>
                
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm">📧</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm">💼</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm">🐦</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-2">
                  <div className="text-white/60 hover:text-white cursor-pointer transition-colors">Our Story</div>
                  <div className="text-white/60 hover:text-white cursor-pointer transition-colors">Team</div>
                  <div className="text-white/60 hover:text-white cursor-pointer transition-colors">Careers</div>
                  <div className="text-white/60 hover:text-white cursor-pointer transition-colors">Press</div>
                </div>
              </div>
              
              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Get in Touch</h4>
                <div className="space-y-2">
                  <div className="text-white/60">hello@truptech.com</div>
                  <div className="text-white/60">+1 (555) 123-4567</div>
                  <div className="text-white/60">Global Offices</div>
                  <div className="text-white/60">24/7 Support</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} TrupTECH Solutions. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <div className="text-white/60 hover:text-white cursor-pointer transition-colors text-sm">Privacy Policy</div>
                <div className="text-white/60 hover:text-white cursor-pointer transition-colors text-sm">Terms of Service</div>
                <div className="text-white/60 hover:text-white cursor-pointer transition-colors text-sm">Cookie Policy</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutTrupTechPage;