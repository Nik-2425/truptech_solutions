import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveProjectTicker = () => {
  const [currentUpdate, setCurrentUpdate] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const projectUpdates = [
    {
      id: 1,
      type: "deployment",
      project: "E-commerce AI Platform",
      client: "TechFlow Solutions",
      status: "Deployed to Production",
      timestamp: "2 minutes ago",
      icon: "Rocket",
      color: "success",
      progress: 100
    },
    {
      id: 2,
      type: "milestone",
      project: "Manufacturing Automation",
      client: "Industrial Dynamics",
      status: "Phase 2 Completed",
      timestamp: "8 minutes ago",
      icon: "CheckCircle",
      color: "accent",
      progress: 75
    },
    {
      id: 3,
      type: "testing",
      project: "Fintech Security System",
      client: "FinanceForward",
      status: "Security Testing Passed",
      timestamp: "15 minutes ago",
      icon: "Shield",
      color: "trust-builder",
      progress: 85
    },
    {
      id: 4,
      type: "development",
      project: "Healthcare Analytics",
      client: "HealthTech Canada",
      status: "ML Model Training Complete",
      timestamp: "23 minutes ago",
      icon: "Brain",
      color: "warning",
      progress: 60
    },
    {
      id: 5,
      type: "integration",
      project: "Supply Chain Optimizer",
      client: "Pacific Logistics",
      status: "API Integration Successful",
      timestamp: "31 minutes ago",
      icon: "Link",
      color: "primary",
      progress: 45
    },
    {
      id: 6,
      type: "review",
      project: "Blockchain Payment Gateway",
      client: "Asia Financial Hub",
      status: "Client Review Approved",
      timestamp: "42 minutes ago",
      icon: "ThumbsUp",
      color: "success",
      progress: 90
    },
    {
      id: 7,
      type: "optimization",
      project: "AgriTech IoT Platform",
      client: "AgriTech Brasil",
      status: "Performance Optimization",
      timestamp: "1 hour ago",
      icon: "TrendingUp",
      color: "accent",
      progress: 70
    },
    {
      id: 8,
      type: "planning",
      project: "Smart City Dashboard",
      client: "Tokyo Innovation",
      status: "Architecture Planning",
      timestamp: "1 hour ago",
      icon: "Layout",
      color: "trust-builder",
      progress: 25
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentUpdate(prev => (prev + 1) % projectUpdates?.length);
        setIsVisible(true);
      }, 300);
    }, 3500);

    return () => clearInterval(timer);
  }, [projectUpdates?.length]);

  const currentProject = projectUpdates?.[currentUpdate];

  return (
    <section className="py-16 bg-gradient-to-r from-surface to-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">Live Updates</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real-Time Project Progress
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparency in action. Watch our projects come to life with real-time updates 
            from our development teams across the globe.
          </p>
        </div>

        {/* Live Ticker Display */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-card rounded-xl p-8 shadow-subtle border-l-4 border-${currentProject?.color} transition-all duration-300 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            <div className="flex items-start space-x-6">
              {/* Status Icon */}
              <div className={`w-12 h-12 bg-${currentProject?.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={currentProject?.icon} size={24} className={`text-${currentProject?.color}`} />
              </div>

              {/* Project Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground truncate">
                    {currentProject?.project}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {currentProject?.timestamp}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-sm text-muted-foreground">Client:</span>
                  <span className="text-sm font-medium text-foreground">{currentProject?.client}</span>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <span className={`text-sm font-medium text-${currentProject?.color}`}>
                    {currentProject?.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium text-foreground">{currentProject?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`bg-${currentProject?.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${currentProject?.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Activity Indicators */}
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={14} />
                    <span>Team Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>On Schedule</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MessageCircle" size={14} />
                    <span>Client Engaged</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {projectUpdates?.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentUpdate(index);
                    setIsVisible(true);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentUpdate === index
                    ? `bg-${currentProject?.color} w-6`
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={24} className="text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">47</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">98.5%</div>
            <div className="text-sm text-muted-foreground">On-Time Delivery</div>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <div className="w-12 h-12 bg-trust-builder/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-trust-builder" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Team Support</div>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveProjectTicker;