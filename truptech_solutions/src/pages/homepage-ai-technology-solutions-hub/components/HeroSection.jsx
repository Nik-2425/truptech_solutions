import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    clients: 0,
    solutions: 0
  });

  const metrics = [
    { label: "Active Projects", value: 47, icon: "Activity", color: "text-accent" },
    { label: "Global Clients", value: 128, icon: "Users", color: "text-trust-builder" },
    { label: "AI Solutions Deployed", value: 89, icon: "Zap", color: "text-warning" }
  ];

  const codeSnippets = [
    "const ai = new TrupTECH.AI({ model: 'gpt-4' });",
    "await automation.deploy({ scale: 'enterprise' });",
    "const results = await ml.predict(data);",
    "blockchain.verify({ transaction: tx });",
    "iot.connect({ devices: sensors });",
    "cloud.scale({ instances: 'auto' });"
  ];

  useEffect(() => {
    // Animate numbers on load
    const animateNumber = (target, key) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 30);
    };

    animateNumber(47, 'projects');
    animateNumber(128, 'clients');
    animateNumber(89, 'solutions');

    // Cycle through metrics
    const metricTimer = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % metrics?.length);
    }, 3000);

    return () => clearInterval(metricTimer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hello%20TrupTECH,%20I%27m%20interested%20in%20your%20AI%20technology%20solutions', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-32 h-32 border border-accent rounded-lg rotate-12 opacity-30"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-24 h-24 border border-trust-builder rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-20 h-20 border border-warning rounded-lg -rotate-12 opacity-25"></div>
        </div>
      </div>
      {/* Code Snippets Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {codeSnippets?.map((snippet, index) => (
          <div
            key={index}
            className="absolute text-xs font-mono text-accent animate-pulse-subtle"
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 12)}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {snippet}
          </div>
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Brand Message */}
            <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="Zap" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Trust + Technology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technology that
              <span className="block text-accent animate-typewriter">works, partnerships</span>
              <span className="block">that last</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Democratizing advanced AI and automation solutions for businesses of all sizes. 
              Your vision, our innovation—delivered with global expertise and local understanding.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/solutions-explorer-interactive-service-discovery">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Layers"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/20 w-full sm:w-auto"
                >
                  Explore Solutions
                </Button>
              </Link>
              
              <Link to="/contact-consultation-hub-multi-channel-communication-center">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Book Consultation
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="text-success hover:bg-success/10 w-full sm:w-auto"
              >
                WhatsApp Chat
              </Button>
            </div>

            {/* Real-time Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {metrics?.map((metric, index) => (
                <div
                  key={metric?.label}
                  className={`text-center p-4 rounded-lg backdrop-blur-sm transition-all duration-500 ${
                    currentMetric === index 
                      ? 'bg-white/10 scale-105 shadow-brand' 
                      : 'bg-white/5 hover:bg-white/8'
                  }`}
                >
                  <Icon 
                    name={metric?.icon} 
                    size={24} 
                    className={`mx-auto mb-2 ${metric?.color}`} 
                  />
                  <div className="text-2xl font-bold text-white mb-1">
                    {index === 0 ? animatedNumbers?.projects : 
                     index === 1 ? animatedNumbers?.clients : 
                     animatedNumbers?.solutions}+
                  </div>
                  <div className="text-xs text-gray-300">{metric?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Tech Circle */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-trust-builder rounded-full opacity-20 animate-pulse-subtle"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-trust-builder to-accent rounded-full opacity-30 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Cpu" size={48} className="text-accent mx-auto mb-4" />
                    <div className="text-white font-semibold">AI-Powered</div>
                    <div className="text-gray-300 text-sm">Solutions</div>
                  </div>
                </div>
              </div>

              {/* Orbiting Tech Icons */}
              {[
                { icon: "Brain", position: "top-0 left-1/2 -translate-x-1/2", delay: "0s" },
                { icon: "Workflow", position: "top-1/4 right-0", delay: "1s" },
                { icon: "Database", position: "bottom-1/4 right-0", delay: "2s" },
                { icon: "Shield", position: "bottom-0 left-1/2 -translate-x-1/2", delay: "3s" },
                { icon: "Globe", position: "bottom-1/4 left-0", delay: "4s" },
                { icon: "Smartphone", position: "top-1/4 left-0", delay: "5s" }
              ]?.map((item, index) => (
                <div
                  key={index}
                  className={`absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-subtle ${item?.position}`}
                  style={{ animationDelay: item?.delay }}
                >
                  <Icon name={item?.icon} size={20} className="text-accent" />
                </div>
              ))}
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-float">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span className="text-white text-sm font-medium">99.9% Uptime</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-warning" />
                <span className="text-white text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;