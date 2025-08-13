import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InnovationLab = () => {
  const [activeExperiment, setActiveExperiment] = useState(0);

  const experiments = [
    {
      id: 1,
      title: "AI-Powered Code Review Assistant",
      description: "Developing an intelligent system that automatically reviews code quality, suggests improvements, and identifies potential security vulnerabilities using advanced machine learning algorithms.",
      status: "beta-testing",
      progress: 75,
      technologies: ["GPT-4", "Python", "Docker", "Kubernetes"],
      estimatedLaunch: "Q2 2025",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      features: [
        "Real-time code analysis",
        "Security vulnerability detection",
        "Performance optimization suggestions",
        "Multi-language support"
      ]
    },
    {
      id: 2,
      title: "Blockchain Supply Chain Tracker",
      description: "Revolutionary supply chain transparency solution using blockchain technology to track products from manufacturing to delivery, ensuring authenticity and reducing fraud.",
      status: "development",
      progress: 45,
      technologies: ["Ethereum", "Solidity", "React", "Node.js"],
      estimatedLaunch: "Q3 2025",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      features: [
        "Immutable product tracking",
        "Smart contract automation",
        "Real-time notifications",
        "Multi-stakeholder dashboard"
      ]
    },
    {
      id: 3,
      title: "Quantum-Safe Encryption Protocol",
      description: "Next-generation encryption system designed to withstand quantum computing attacks, ensuring long-term data security for enterprise applications.",
      status: "research",
      progress: 25,
      technologies: ["Quantum Cryptography", "C++", "Python", "OpenSSL"],
      estimatedLaunch: "Q4 2025",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      features: [
        "Quantum-resistant algorithms",
        "Zero-knowledge proofs",
        "Hardware security modules",
        "Enterprise integration"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'beta-testing':
        return 'text-success bg-success/10 border-success/20';
      case 'development':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'research':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 70) return 'bg-success';
    if (progress >= 40) return 'bg-accent';
    return 'bg-warning';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8 mb-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center">
            <Icon name="Zap" size={24} color="white" />
          </div>
          <h2 className="text-2xl font-bold text-card-foreground">Innovation Lab</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our cutting-edge research projects and beta technologies that will shape the future of digital solutions.
        </p>
      </div>
      {/* Experiment Navigation */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center bg-surface rounded-lg p-1">
          {experiments?.map((experiment, index) => (
            <button
              key={experiment?.id}
              onClick={() => setActiveExperiment(index)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeExperiment === index
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-card-foreground'
              }`}
            >
              Experiment {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* Active Experiment Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experiment Image */}
        <div className="relative overflow-hidden rounded-xl">
          <Image 
            src={experiments?.[activeExperiment]?.image}
            alt={experiments?.[activeExperiment]?.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(experiments?.[activeExperiment]?.status)}`}>
              {experiments?.[activeExperiment]?.status?.replace('-', ' ')?.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Experiment Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">
              {experiments?.[activeExperiment]?.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {experiments?.[activeExperiment]?.description}
            </p>
          </div>

          {/* Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-card-foreground">Development Progress</span>
              <span className="text-sm text-muted-foreground">{experiments?.[activeExperiment]?.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(experiments?.[activeExperiment]?.progress)}`}
                style={{ width: `${experiments?.[activeExperiment]?.progress}%` }}
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-3">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experiments?.[activeExperiment]?.technologies?.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-lg border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-3">Key Features</h4>
            <div className="space-y-2">
              {experiments?.[activeExperiment]?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Launch Timeline */}
          <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Calendar" size={20} className="text-accent" />
              <div>
                <p className="text-sm font-medium text-card-foreground">Estimated Launch</p>
                <p className="text-sm text-muted-foreground">{experiments?.[activeExperiment]?.estimatedLaunch}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              iconName="Bell"
              iconPosition="left"
              className="text-accent border-accent/20 hover:bg-accent/10"
            >
              Get Notified
            </Button>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="mt-8 pt-8 border-t border-border text-center">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          Interested in Beta Testing?
        </h3>
        <p className="text-muted-foreground mb-4">
          Join our innovation program and get early access to cutting-edge technologies.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            iconName="FileText"
            iconPosition="left"
          >
            Learn More
          </Button>
          <Button
            variant="default"
            iconName="Rocket"
            iconPosition="left"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Join Beta Program
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InnovationLab;