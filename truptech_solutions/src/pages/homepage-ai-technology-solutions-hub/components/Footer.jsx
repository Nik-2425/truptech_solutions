import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "AI Solutions", path: "/solutions-explorer-interactive-service-discovery" },
        { name: "Automation Systems", path: "/solutions-explorer-interactive-service-discovery" },
        { name: "Custom Development", path: "/solutions-explorer-interactive-service-discovery" },
        { name: "Tech Consulting", path: "/solutions-explorer-interactive-service-discovery" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About TrupTECH", path: "/about-trup-tech-trust-technology-story" },
        { name: "Our Projects", path: "/live-project-observatory-real-time-work-showcase" },
        { name: "Client Stories", path: "/global-client-stories-cultural-intelligence-showcase" },
        { name: "Innovation Lab", path: "/homepage-ai-technology-solutions-hub" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", path: "/global-client-stories-cultural-intelligence-showcase" },
        { name: "Technical Blog", path: "/homepage-ai-technology-solutions-hub" },
        { name: "Whitepapers", path: "/homepage-ai-technology-solutions-hub" },
        { name: "API Documentation", path: "/homepage-ai-technology-solutions-hub" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact-consultation-hub-multi-channel-communication-center" },
        { name: "Help Center", path: "/contact-consultation-hub-multi-channel-communication-center" },
        { name: "System Status", path: "/homepage-ai-technology-solutions-hub" },
        { name: "Security", path: "/homepage-ai-technology-solutions-hub" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/truptech" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/truptech" },
    { name: "GitHub", icon: "Github", url: "https://github.com/truptech" },
    { name: "YouTube", icon: "Youtube", url: "https://youtube.com/truptech" }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hello%20TrupTECH,%20I%27d%20like%20to%20learn%20more%20about%20your%20technology%20solutions', '_blank');
  };

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    // Mock newsletter subscription
    alert('Thank you for subscribing to TrupTECH updates!');
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage-ai-technology-solutions-hub" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-trust-builder rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">TrupTECH</span>
                <span className="text-sm text-white/80 font-medium -mt-1">Solutions</span>
              </div>
            </Link>

            <p className="text-white/80 mb-6 leading-relaxed">
              Democratizing advanced technology solutions for businesses worldwide. 
              We bridge the gap between complex possibilities and practical business outcomes 
              through Trust + Technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-accent" />
                <span className="text-sm text-white/80">hello@truptech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-accent" />
                <span className="text-sm text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span className="text-sm text-white/80">Global Headquarters, Tech District</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="text-lg font-semibold mb-4">{section?.title}</h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated with TrupTECH</h3>
              <p className="text-white/80 text-sm">
                Get the latest insights on AI, automation, and technology trends delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
              <Button
                type="submit"
                variant="default"
                iconName="Send"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Link to="/contact-consultation-hub-multi-channel-communication-center">
                <Button
                  variant="outline"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Book Free Consultation
                </Button>
              </Link>
              
              <Button
                variant="ghost"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="text-success hover:bg-success/10"
              >
                WhatsApp Support
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>🌍 Serving 8+ Countries</span>
              <span>⚡ 99.9% Uptime SLA</span>
              <span>🔒 Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/80">
              <span>© {currentYear} TrupTECH Solutions. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>All Systems Operational</span>
              </div>
              <a href="#" className="hover:text-accent transition-colors duration-200">Status Page</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;