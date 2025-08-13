import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      year: "2019",
      title: "Foundation & Vision",
      description: "TrupTECH founded with the mission to democratize advanced technology solutions for businesses of all sizes.",
      icon: "Rocket",
      achievements: [
        "Established core team of 5 experts",
        "Developed first AI automation framework",
        "Secured initial seed funding"
      ]
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations internationally, serving clients across 15 countries during the digital transformation surge.",
      icon: "Globe",
      achievements: [
        "Opened offices in 3 countries",
        "Delivered 50+ successful projects",
        "Achieved ISO 27001 certification"
      ]
    },
    {
      year: "2021",
      title: "Innovation Breakthrough",
      description: "Launched proprietary AI platform and established partnerships with major cloud providers.",
      icon: "Lightbulb",
      achievements: [
        "Released TrupAI Platform v1.0",
        "AWS Advanced Partner status",
        "Google Cloud Premier Partner"
      ]
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple industry awards and recognition for innovation in AI and automation solutions.",
      icon: "Award",
      achievements: [
        "Tech Innovation Award 2022",
        "Best AI Implementation - Industry Choice",
        "Client Satisfaction Score: 98%"
      ]
    },
    {
      year: "2023",
      title: "Scale & Excellence",
      description: "Scaled to serve Fortune 500 companies while maintaining our commitment to smaller businesses.",
      icon: "TrendingUp",
      achievements: [
        "100+ enterprise clients",
        "25+ countries served",
        "Team expanded to 50+ experts"
      ]
    },
    {
      year: "2024",
      title: "Future-Ready Solutions",
      description: "Launched next-generation AI solutions and established research partnerships with leading universities.",
      icon: "Zap",
      achievements: [
        "TrupAI Platform v2.0 with GPT integration",
        "Research partnerships with MIT & Stanford",
        "Carbon-neutral operations achieved"
      ]
    }
  ];

  const currentYear = new Date()?.getFullYear();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Journey</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Milestones of Innovation
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From a small team with big dreams to a global technology partner trusted by businesses worldwide.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:transform lg:-translate-x-0.5"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-brand lg:transform lg:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`ml-20 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                        <Icon name={milestone?.icon} size={20} color="white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{milestone?.year}</div>
                        <div className="text-lg font-semibold text-foreground">{milestone?.title}</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {milestone?.description}
                    </p>
                    
                    <div className="space-y-2">
                      {milestone?.achievements?.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year Badge for Mobile */}
                <div className="lg:hidden absolute left-0 top-0 bg-accent text-white px-2 py-1 rounded text-xs font-bold">
                  {milestone?.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <div className="bg-brand-gradient-subtle rounded-2xl p-8 lg:p-12">
            <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Telescope" size={24} color="white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Looking Ahead to {currentYear + 1}
            </h3>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Our vision for the future includes expanding our AI capabilities, establishing more global partnerships, and continuing to make advanced technology accessible to businesses worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Brain" size={20} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Advanced AI</h4>
                <p className="text-sm text-muted-foreground">Next-gen AI solutions with enhanced reasoning capabilities</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-trust-builder/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Network" size={20} className="text-trust-builder" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Global Network</h4>
                <p className="text-sm text-muted-foreground">Expanding to 50+ countries with local expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Leaf" size={20} className="text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Sustainability</h4>
                <p className="text-sm text-muted-foreground">Leading the way in green technology solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;