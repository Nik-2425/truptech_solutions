import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InnovationSpotlight = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const innovations = [
    {
      id: 1,
      title: "Quantum Computing Integration",
      description: "Exploring quantum algorithms for complex optimization problems in logistics and financial modeling",
      status: "Research Phase",
      progress: 25,
      icon: "Atom",
      color: "accent",
      timeline: "Q3 2025",
      applications: [
        "Cryptographic Security",
        "Supply Chain Optimization",
        "Financial Risk Modeling",
        "Drug Discovery Acceleration"
      ],
      impact: "1000x faster processing for specific computational problems",
      readiness: "Early Research"
    },
    {
      id: 2,
      title: "Autonomous AI Agents",
      description: "Self-learning AI systems that can independently manage business processes and make strategic decisions",
      status: "Beta Testing",
      progress: 70,
      icon: "Bot",
      color: "trust-builder",
      timeline: "Q1 2025",
      applications: [
        "Customer Service Automation",
        "Inventory Management",
        "Predictive Maintenance",
        "Content Generation"
      ],
      impact: "85% reduction in manual oversight requirements",
      readiness: "Beta Available"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Brain-computer interfaces for direct interaction with digital systems and enhanced accessibility",
      status: "Prototype",
      progress: 45,
      icon: "Brain",
      color: "warning",
      timeline: "Q4 2025",
      applications: [
        "Accessibility Solutions",
        "Thought-to-Text Systems",
        "Virtual Reality Control",
        "Medical Rehabilitation"
      ],
      impact: "Revolutionary accessibility for disabled users",
      readiness: "Prototype Testing"
    },
    {
      id: 4,
      title: "Sustainable Computing",
      description: "Carbon-negative data centers powered by renewable energy and advanced cooling systems",
      status: "Implementation",
      progress: 80,
      icon: "Leaf",
      color: "success",
      timeline: "Q2 2025",
      applications: [
        "Green Data Centers",
        "Energy Optimization",
        "Carbon Footprint Tracking",
        "Renewable Integration"
      ],
      impact: "90% reduction in computing carbon footprint",
      readiness: "Pilot Program"
    },
    {
      id: 5,
      title: "Holographic Displays",
      description: "3D holographic interfaces for immersive data visualization and collaborative workspaces",
      status: "Development",
      progress: 55,
      icon: "Eye",
      color: "primary",
      timeline: "Q3 2025",
      applications: [
        "Data Visualization",
        "Remote Collaboration",
        "Medical Imaging",
        "Design Prototyping"
      ],
      impact: "Immersive 3D interaction without VR headsets",
      readiness: "Development Phase"
    }
  ];

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveInnovation(prev => (prev + 1) % innovations?.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, innovations?.length]);

  const currentInnovation = innovations?.[activeInnovation];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Research Phase': return 'text-warning bg-warning/10';
      case 'Beta Testing': return 'text-trust-builder bg-trust-builder/10';
      case 'Prototype': return 'text-accent bg-accent/10';
      case 'Implementation': return 'text-success bg-success/10';
      case 'Development': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Innovation Lab</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pioneering Tomorrow's Technology Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At TrupTECH, we don't just follow technology trends—we create them. 
            Explore our cutting-edge research and development initiatives that will shape the future of business technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Innovation Showcase */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elevated border-l-4 border-accent">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-${currentInnovation?.color}/10 rounded-xl flex items-center justify-center`}>
                  <Icon name={currentInnovation?.icon} size={32} className={`text-${currentInnovation?.color}`} />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(currentInnovation?.status)}`}>
                  {currentInnovation?.status}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {currentInnovation?.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {currentInnovation?.description}
              </p>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Development Progress</span>
                  <span className="text-sm text-muted-foreground">{currentInnovation?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`bg-${currentInnovation?.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${currentInnovation?.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surface rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                  <div className="font-semibold text-foreground">{currentInnovation?.timeline}</div>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Readiness</div>
                  <div className="font-semibold text-foreground">{currentInnovation?.readiness}</div>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingUp" size={20} className="text-accent mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Expected Impact</div>
                    <div className="text-sm text-muted-foreground">{currentInnovation?.impact}</div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Key Applications</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentInnovation?.applications?.map((app, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={14} className={`text-${currentInnovation?.color}`} />
                      <span className="text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="FileText"
                  iconPosition="left"
                  className="flex-1"
                >
                  Technical Brief
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className={`flex-1 bg-${currentInnovation?.color} hover:bg-${currentInnovation?.color}/90`}
                >
                  Discuss Partnership
                </Button>
              </div>
            </div>

            {/* Innovation Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {innovations?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveInnovation(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    activeInnovation === index
                      ? `bg-${currentInnovation?.color} w-8`
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Innovation Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Innovation Roadmap</h3>
            
            {innovations?.map((innovation, index) => (
              <div
                key={innovation?.id}
                className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-200 cursor-pointer ${
                  activeInnovation === index
                    ? 'bg-surface shadow-subtle scale-105'
                    : 'hover:bg-surface/50'
                }`}
                onClick={() => setActiveInnovation(index)}
              >
                <div className={`w-10 h-10 bg-${innovation?.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={innovation?.icon} size={20} className={`text-${innovation?.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground truncate">{innovation?.title}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                      {innovation?.timeline}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {innovation?.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(innovation?.status)}`}>
                      {innovation?.status}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-muted rounded-full h-1">
                        <div 
                          className={`bg-${innovation?.color} h-1 rounded-full transition-all duration-300`}
                          style={{ width: `${innovation?.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{innovation?.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Partnership CTA */}
            <div className="bg-brand-gradient rounded-xl p-6 text-white mt-8">
              <h4 className="text-lg font-bold mb-2">Join Our Innovation Journey</h4>
              <p className="text-white/90 text-sm mb-4">
                Partner with us to explore cutting-edge technologies and shape the future of your industry.
              </p>
              <div className="flex space-x-3">
                <Link to="/contact-consultation-hub-multi-channel-communication-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    iconName="Handshake"
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Partnership Inquiry
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Innovation Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSpotlight;