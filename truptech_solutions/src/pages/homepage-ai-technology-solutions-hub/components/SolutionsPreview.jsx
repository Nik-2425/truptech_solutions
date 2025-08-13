import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionsPreview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      id: 1,
      title: "AI Solutions",
      description: "Intelligent automation and machine learning systems that transform your business operations",
      icon: "Brain",
      color: "accent",
      features: [
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics",
        "Intelligent Chatbots"
      ],
      stats: { projects: 34, clients: 28 },
      gradient: "from-accent/20 to-accent/5"
    },
    {
      id: 2,
      title: "Automation Systems",
      description: "Streamline workflows and eliminate repetitive tasks with smart automation solutions",
      icon: "Workflow",
      color: "trust-builder",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Integration Platforms",
        "Smart Scheduling"
      ],
      stats: { projects: 42, clients: 35 },
      gradient: "from-trust-builder/20 to-trust-builder/5"
    },
    {
      id: 3,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your unique business requirements",
      icon: "Code",
      color: "warning",
      features: [
        "Web Applications",
        "Mobile Development",
        "API Integration",
        "Database Design"
      ],
      stats: { projects: 56, clients: 41 },
      gradient: "from-warning/20 to-warning/5"
    },
    {
      id: 4,
      title: "Tech Consulting",
      description: "Strategic technology guidance to help you make informed decisions and optimize investments",
      icon: "Lightbulb",
      color: "success",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Architecture Review",
        "Performance Optimization"
      ],
      stats: { projects: 38, clients: 32 },
      gradient: "from-success/20 to-success/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Layers" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technology Solutions That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From AI-powered automation to custom development, we deliver comprehensive technology solutions 
            that transform businesses and create competitive advantages in today's digital landscape.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {solutions?.map((solution) => (
            <div
              key={solution?.id}
              className={`group relative bg-card rounded-xl p-6 shadow-subtle hover-lift cursor-pointer transition-all duration-300 ${
                hoveredCard === solution?.id ? 'scale-105 shadow-elevated' : ''
              }`}
              onMouseEnter={() => setHoveredCard(solution?.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution?.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 bg-${solution?.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={solution?.icon} size={24} className={`text-${solution?.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground">
                  {solution?.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {solution?.description}
                </p>

                {/* Features List */}
                <div className={`space-y-2 mb-6 transition-all duration-300 ${
                  hoveredCard === solution?.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {solution?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={14} className={`text-${solution?.color}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{solution?.stats?.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{solution?.stats?.clients}</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                  <div className={`w-8 h-8 bg-${solution?.color}/10 rounded-full flex items-center justify-center group-hover:bg-${solution?.color}/20 transition-colors duration-300`}>
                    <Icon name="ArrowRight" size={16} className={`text-${solution?.color}`} />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-${solution?.color}/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Technology Stack Preview */}
        <div className="bg-surface rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Powered by Cutting-Edge Technology</h3>
            <p className="text-muted-foreground">We leverage the latest tools and frameworks to deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: "React", icon: "Code" },
              { name: "Python", icon: "Terminal" },
              { name: "TensorFlow", icon: "Brain" },
              { name: "AWS", icon: "Cloud" },
              { name: "Docker", icon: "Package" },
              { name: "MongoDB", icon: "Database" },
              { name: "Node.js", icon: "Server" },
              { name: "GraphQL", icon: "Zap" }
            ]?.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-card transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon name={tech?.icon} size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {tech?.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-brand-gradient rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive your business forward. 
              Get a free consultation and discover the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solutions-explorer-interactive-service-discovery">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Layers"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Explore All Solutions
                </Button>
              </Link>
              <Link to="/contact-consultation-hub-multi-channel-communication-center">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;