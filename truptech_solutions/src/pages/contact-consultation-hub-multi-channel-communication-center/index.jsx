import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import CommunicationChannels from './components/CommunicationChannels';
import ContactForm from './components/ContactForm';
import ConsultationBooking from './components/ConsultationBooking';
import QuickAssessment from './components/QuickAssessment';
import TeamExpertise from './components/TeamExpertise';
import SupportOptions from './components/SupportOptions';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ContactConsultationHub = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [activeSection, setActiveSection] = useState('contact');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hello%20TrupTECH,%20I%27m%20interested%20in%20discussing%20my%20technology%20needs.%20Can%20we%20schedule%20a%20consultation?', '_blank');
  };

  const handleBookConsultation = () => {
    setActiveSection('booking');
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setActiveSection('form');
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationSections = [
    { id: 'contact', label: 'Contact Options', icon: 'MessageCircle' },
    { id: 'form', label: 'Contact Form', icon: 'FileText' },
    { id: 'booking', label: 'Book Consultation', icon: 'Calendar' },
    { id: 'assessment', label: 'Quick Assessment', icon: 'CheckSquare' },
    { id: 'experts', label: 'Meet Experts', icon: 'Users' },
    { id: 'support', label: 'Support Options', icon: 'HelpCircle' }
  ];

  const handleSectionNavigation = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`${sectionId}-section`);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <ContactHero 
        onWhatsAppClick={handleWhatsAppClick}
        onBookConsultation={handleBookConsultation}
      />
      {/* Section Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-1 py-4 overflow-x-auto">
            {navigationSections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => handleSectionNavigation(section?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeSection === section?.id
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span>{section?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Communication Channels Section */}
      <div id="contact-section">
        <CommunicationChannels onChannelSelect={handleChannelSelect} />
      </div>
      {/* Contact Form Section */}
      <div id="form-section">
        <ContactForm selectedChannel={selectedChannel} />
      </div>
      {/* Consultation Booking Section */}
      <div id="booking-section">
        <ConsultationBooking />
      </div>
      {/* Quick Assessment Section */}
      <div id="assessment-section">
        <QuickAssessment />
      </div>
      {/* Team Expertise Section */}
      <div id="experts-section">
        <TeamExpertise />
      </div>
      {/* Support Options Section */}
      <div id="support-section">
        <SupportOptions />
      </div>
      {/* Footer CTA Section */}
      <section className="py-16 bg-brand-gradient text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses worldwide who trust TrupTECH for their technology solutions. 
            Let's discuss how we can accelerate your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-success hover:bg-success/90 text-white shadow-lg"
            >
              Start WhatsApp Chat
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleBookConsultation}
              iconName="Calendar"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Free Consultation
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-white/80">Countries Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-white/80">Global Support</div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} color="white" />
                </div>
                <div>
                  <div className="text-xl font-bold">TrupTECH</div>
                  <div className="text-sm text-white/70">Solutions</div>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Empowering businesses worldwide with cutting-edge technology solutions. 
                From AI automation to cloud infrastructure, we're your trusted technology partner.
              </p>
              <div className="flex space-x-4">
                <Icon name="MapPin" size={16} className="text-white/60" />
                <span className="text-sm text-white/80">Global Headquarters: San Francisco, CA</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>hello@truptech.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={14} />
                  <span>WhatsApp Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} />
                  <span>24/7 Global Support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © {new Date()?.getFullYear()} TrupTECH Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-white/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-white/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-white/60 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 w-12 h-12 bg-accent hover:bg-accent/90 rounded-full shadow-floating flex items-center justify-center transition-all duration-300 hover:scale-105 z-50"
          aria-label="Scroll to top"
        >
          <Icon name="ArrowUp" size={20} color="white" />
        </button>
      )}
    </div>
  );
};

export default ContactConsultationHub;