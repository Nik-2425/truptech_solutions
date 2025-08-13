import React from 'react';
import Icon from '../../../components/AppIcon';


const PhilosophySection = () => {
  const philosophyPoints = [
    {
      icon: "Target",
      title: "Democratizing Technology",
      description: "Making advanced AI, automation, and cutting-edge solutions accessible to businesses of all sizes, from startups to enterprises."
    },
    {
      icon: "MessageSquare",
      title: "Technology Translation",
      description: "Bridging the gap between complex technological possibilities and practical business outcomes through clear communication."
    },
    {
      icon: "Heart",
      title: "Human-Centered Approach",
      description: "Technology serves people, not the other way around. Every solution is designed with the end user's experience in mind."
    },
    {
      icon: "Globe",
      title: "Cultural Intelligence",
      description: "Understanding that great technology solutions must adapt to local cultures, business practices, and communication styles."
    }
  ];

  const realExamples = [
    {
      client: "Local Manufacturing Company",
      challenge: "Overwhelmed by Industry 4.0 concepts",
      solution: "Implemented gradual automation with clear ROI tracking",
      result: "40% efficiency increase with full team buy-in"
    },
    {
      client: "International E-commerce Startup",
      challenge: "Scaling across 8 countries with different regulations",
      solution: "Built adaptive platform with localization features",
      result: "Successfully launched in all target markets"
    },
    {
      client: "Traditional Service Business",
      challenge: "Feared AI would replace human workers",
      solution: "Designed AI tools to augment human capabilities",
      result: "Increased productivity while retaining all staff"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Philosophy Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Lightbulb" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Philosophy</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trust + Technology = Transformation
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that trust is the foundation of successful technology adoption. Our approach combines technical excellence with transparent communication and cultural sensitivity.
          </p>
        </div>

        {/* Philosophy Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {philosophyPoints?.map((point, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={point?.icon} size={24} color="white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {point?.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {point?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real Examples */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Philosophy in Action
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real examples of how our Trust + Technology approach has helped clients navigate digital transformation with confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {realExamples?.map((example, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Building" size={16} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground">{example?.client}</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-error">Challenge:</span>
                    <p className="text-sm text-muted-foreground mt-1">{example?.challenge}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-accent">Solution:</span>
                    <p className="text-sm text-muted-foreground mt-1">{example?.solution}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-success">Result:</span>
                    <p className="text-sm text-muted-foreground mt-1">{example?.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;