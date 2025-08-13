import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage-ai-technology-solutions-hub',
      icon: 'Home'
    },
    {
      name: 'Solutions',
      path: '/solutions-explorer-interactive-service-discovery',
      icon: 'Layers'
    },
    {
      name: 'Projects',
      path: '/live-project-observatory-real-time-work-showcase',
      icon: 'Activity'
    },
    {
      name: 'Stories',
      path: '/global-client-stories-cultural-intelligence-showcase',
      icon: 'Users'
    },
    {
      name: 'Contact',
      path: '/contact-consultation-hub-multi-channel-communication-center',
      icon: 'MessageCircle'
    }
  ];

  const moreItems = [
    {
      name: 'About',
      path: '/about-trup-tech-trust-technology-story',
      icon: 'Info'
    }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hello%20TrupTECH,%20I%27m%20interested%20in%20your%20technology%20solutions', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-brand border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-ai-technology-solutions-hub" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center shadow-brand">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-subtle"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                TrupTECH
              </span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-surface ${
                  isActivePath(item?.path)
                    ? 'text-accent bg-accent/10 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-surface transition-colors duration-150 ${
                        isActivePath(item?.path)
                          ? 'text-accent bg-accent/5' :'text-popover-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="text-success hover:text-success hover:bg-success/10"
            >
              WhatsApp
            </Button>
            
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/20"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-brand ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10 shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleWhatsAppClick}
                  iconName="MessageCircle"
                  iconPosition="left"
                  fullWidth
                  className="justify-start text-success hover:text-success hover:bg-success/10"
                >
                  WhatsApp Chat
                </Button>
                
                <Button
                  variant="default"
                  size="sm"
                  iconName="Calendar"
                  iconPosition="left"
                  fullWidth
                  className="justify-start bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-60">
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-success hover:bg-success/90 rounded-full shadow-floating flex items-center justify-center transition-all duration-300 hover:scale-105 animate-pulse-subtle"
          aria-label="Contact via WhatsApp"
        >
          <Icon name="MessageCircle" size={24} color="white" />
        </button>
      </div>
    </header>
  );
};

export default Header;