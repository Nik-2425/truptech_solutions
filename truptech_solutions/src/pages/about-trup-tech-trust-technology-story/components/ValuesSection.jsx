import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesSection = () => {
  const coreValues = [
    {
      icon: "Shield",
      title: "Transparency",
      description: "Open communication in every project phase",
      example: "Real-time project dashboards with milestone tracking and budget visibility for all clients.",
      color: "accent"
    },
    {
      icon: "Globe",
      title: "Cultural Intelligence",
      description: "Respecting and adapting to global diversity",
      example: "Localized user interfaces, timezone-aware communications, and culturally appropriate design patterns.",
      color: "trust-builder"
    },
    {
      icon: "Users",
      title: "Accessibility",
      description: "Making advanced technology available to all",
      example: "Flexible pricing models, comprehensive training programs, and ongoing support for businesses of every size.",
      color: "success"
    },
    {
      icon: "Heart",
      title: "Human-Centered",
      description: "Technology that enhances human potential",
      example: "AI tools designed to augment human capabilities rather than replace workers, with intuitive interfaces.",
      color: "warning"
    }
  ];

  const practicalExamples = [
    {
      title: "Project Management Transparency",
      description: "Every client receives access to our real-time project dashboard showing progress, timelines, and budget utilization.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      metrics: ["100% project visibility", "Real-time updates", "Budget tracking"]
    },
    {
      title: "Cultural Adaptation Framework",
      description: "Our solutions automatically adapt to local business practices, languages, and cultural preferences.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
      metrics: ["25+ languages supported", "Cultural UI patterns", "Local compliance"]
    },
    {
      title: "Comprehensive Support System",
      description: "From initial consultation to post-deployment support, we ensure every client feels confident and supported.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      metrics: ["24/7 support", "Training included", "Ongoing optimization"]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Compass" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Values</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Values Demonstrated Through Action
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our core values aren't just words on a wall—they're principles we live by in every client interaction and project delivery.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreValues?.map((value, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover-lift text-center">
              <div className={`w-16 h-16 bg-${value?.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name={value?.icon} size={24} className={`text-${value?.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {value?.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {value?.description}
              </p>
              
              <div className="bg-surface rounded-lg p-3">
                <p className="text-sm text-muted-foreground italic">
                  "{value?.example}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Examples */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
            Values in Practice
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {practicalExamples?.map((example, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-subtle hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={example?.image}
                    alt={example?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {example?.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {example?.description}
                  </p>
                  
                  <div className="space-y-2">
                    {example?.metrics?.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Impact Stats */}
        <div className="bg-brand-gradient rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
            The Impact of Our Values
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
              <div className="text-sm text-white/60 mt-1">Based on transparency</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80">Countries Served</div>
              <div className="text-sm text-white/60 mt-1">Cultural adaptation</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Training Included</div>
              <div className="text-sm text-white/60 mt-1">Accessibility focus</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">0</div>
              <div className="text-white/80">Job Losses</div>
              <div className="text-sm text-white/60 mt-1">Human-centered AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;