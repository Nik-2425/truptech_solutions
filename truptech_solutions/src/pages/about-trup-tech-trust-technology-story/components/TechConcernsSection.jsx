import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const TechConcernsSection = () => {
  const [activeConcern, setActiveConcern] = useState('security');

  const concerns = [
    {
      id: 'security',
      title: 'Security & Data Protection',
      icon: 'Shield',
      description: 'How do you ensure our sensitive data remains secure?',
      solution: {
        overview: "We implement military-grade security measures and maintain the highest industry certifications to protect your data.",
        measures: [
          {
            title: "End-to-End Encryption",
            description: "All data is encrypted both in transit and at rest using AES-256 encryption",
            icon: "Lock"
          },
          {
            title: "Zero-Trust Architecture",
            description: "Every access request is verified regardless of location or user credentials",
            icon: "Shield"
          },
          {
            title: "Regular Security Audits",
            description: "Quarterly penetration testing and annual SOC 2 Type II audits",
            icon: "Search"
          },
          {
            title: "Compliance Standards",
            description: "GDPR, HIPAA, SOX, and ISO 27001 compliant across all operations",
            icon: "CheckCircle"
          }
        ],
        example: "For a healthcare client, we implemented HIPAA-compliant AI analytics that processed 1M+ patient records without a single security incident over 3 years.",
        certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Certified", "HIPAA Compliant"]
      }
    },
    {
      id: 'scalability',
      title: 'Scalability & Performance',
      icon: 'TrendingUp',
      description: 'Will the solution grow with our business needs?',
      solution: {
        overview: "Our cloud-native architecture automatically scales to handle growth from startup to enterprise levels.",
        measures: [
          {
            title: "Auto-Scaling Infrastructure",
            description: "Automatically adjusts resources based on demand without manual intervention",
            icon: "Zap"
          },
          {
            title: "Microservices Architecture",
            description: "Modular design allows scaling individual components independently",
            icon: "Layers"
          },
          {
            title: "Global CDN Distribution",
            description: "Content delivered from edge locations worldwide for optimal performance",
            icon: "Globe"
          },
          {
            title: "Performance Monitoring",
            description: "Real-time monitoring with predictive scaling based on usage patterns",
            icon: "Activity"
          }
        ],
        example: "An e-commerce client scaled from 1,000 to 100,000 daily users during Black Friday with zero downtime and consistent 200ms response times.",
        certifications: ["AWS Well-Architected", "Google Cloud Certified", "Azure Certified"]
      }
    },
    {
      id: 'support',
      title: 'Long-term Support & Maintenance',
      icon: 'Headphones',
      description: 'What happens after implementation? Will you support us long-term?',
      solution: {
        overview: "We provide comprehensive, proactive support that evolves with your business and technology landscape.",
        measures: [
          {
            title: "24/7 Technical Support",
            description: "Round-the-clock support with guaranteed response times based on severity",
            icon: "Clock"
          },
          {
            title: "Proactive Monitoring",
            description: "AI-powered monitoring that identifies and resolves issues before they impact users",
            icon: "Eye"
          },
          {
            title: "Regular Updates & Optimization",
            description: "Continuous improvement with monthly performance reviews and optimizations",
            icon: "RefreshCw"
          },
          {
            title: "Knowledge Transfer",
            description: "Comprehensive training and documentation to empower your internal team",
            icon: "BookOpen"
          }
        ],
        example: "A manufacturing client has received 5 years of continuous support, with 99.9% uptime and regular feature enhancements that increased efficiency by 40%.",
        certifications: ["ITIL Certified", "Support Excellence Award", "Client Success Certified"]
      }
    }
  ];

  const securityStats = [
    { metric: "99.99%", label: "Uptime Guarantee", icon: "Shield" },
    { metric: "0", label: "Data Breaches", icon: "Lock" },
    { metric: "<2min", label: "Incident Response", icon: "Clock" },
    { metric: "256-bit", label: "Encryption Standard", icon: "Key" }
  ];

  const supportLevels = [
    {
      level: "Basic Support",
      features: ["Business hours support", "Email & chat", "Knowledge base access", "Monthly check-ins"],
      responseTime: "4 hours",
      availability: "9 AM - 6 PM"
    },
    {
      level: "Premium Support",
      features: ["24/7 support", "Phone, email & chat", "Dedicated account manager", "Weekly optimization reviews"],
      responseTime: "1 hour",
      availability: "24/7/365"
    },
    {
      level: "Enterprise Support",
      features: ["24/7 priority support", "Dedicated technical team", "Custom SLA", "Proactive monitoring & optimization"],
      responseTime: "15 minutes",
      availability: "24/7/365"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="HelpCircle" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Common Concerns</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Addressing Your Technology Concerns
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand that adopting new technology comes with valid concerns. Here's how we address the most common challenges our clients face.
          </p>
        </div>

        {/* Concern Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {concerns?.map((concern) => (
            <button
              key={concern?.id}
              onClick={() => setActiveConcern(concern?.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                activeConcern === concern?.id
                  ? 'bg-accent text-white shadow-accent/20'
                  : 'bg-surface text-muted-foreground hover:text-foreground hover:bg-card'
              }`}
            >
              <Icon name={concern?.icon} size={20} />
              <div className="text-left">
                <div className="font-semibold">{concern?.title}</div>
                <div className="text-sm opacity-80">{concern?.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Concern Content */}
        {concerns?.map((concern) => (
          activeConcern === concern?.id && (
            <div key={concern?.id} className="space-y-12">
              {/* Solution Overview */}
              <div className="bg-surface rounded-2xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={concern?.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{concern?.title}</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {concern?.solution?.overview}
                  </p>
                </div>

                {/* Solution Measures */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {concern?.solution?.measures?.map((measure, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-subtle">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name={measure?.icon} size={16} className="text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{measure?.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {measure?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Real Example */}
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Real Client Example</h4>
                      <p className="text-muted-foreground leading-relaxed">{concern?.solution?.example}</p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-3 justify-center mt-8">
                  {concern?.solution?.certifications?.map((cert, index) => (
                    <span key={index} className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Content Based on Concern Type */}
              {concern?.id === 'security' && (
                <div className="grid md:grid-cols-4 gap-6">
                  {securityStats?.map((stat, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 text-center shadow-subtle">
                      <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name={stat?.icon} size={20} className="text-success" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat?.metric}</div>
                      <div className="text-sm text-muted-foreground">{stat?.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {concern?.id === 'support' && (
                <div className="grid lg:grid-cols-3 gap-8">
                  {supportLevels?.map((level, index) => (
                    <div key={index} className={`bg-card rounded-xl p-6 shadow-subtle ${
                      index === 1 ? 'ring-2 ring-accent ring-opacity-50' : ''
                    }`}>
                      {index === 1 && (
                        <div className="bg-accent text-white text-center py-2 -mx-6 -mt-6 mb-6 rounded-t-xl text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      
                      <h4 className="text-lg font-semibold text-foreground mb-4">{level?.level}</h4>
                      
                      <div className="space-y-3 mb-6">
                        {level?.features?.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-success" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Response Time:</span>
                          <span className="font-semibold text-foreground">{level?.responseTime}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Availability:</span>
                          <span className="font-semibold text-foreground">{level?.availability}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        ))}

        {/* Trust Building Section */}
        <div className="mt-20 bg-brand-gradient rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Still Have Concerns? Let's Talk
          </h3>
          
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            We understand that every business has unique requirements and concerns. Our team is ready to address your specific questions and provide customized solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>Schedule Security Briefing</span>
            </button>
            
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
              <Icon name="FileText" size={16} />
              <span>Download Security Whitepaper</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechConcernsSection;