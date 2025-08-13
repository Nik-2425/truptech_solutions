import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialsSection = () => {
  const [activeTab, setActiveTab] = useState('awards');

  const awards = [
    {
      title: "Tech Innovation Award 2024",
      organization: "Global Technology Council",
      description: "Recognized for breakthrough AI implementation in manufacturing automation",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&h=200&fit=crop",
      year: "2024"
    },
    {
      title: "Best AI Implementation",
      organization: "Industry Choice Awards",
      description: "Awarded for exceptional client results in AI-driven business transformation",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=200&fit=crop",
      year: "2023"
    },
    {
      title: "Excellence in Client Service",
      organization: "Business Technology Awards",
      description: "Recognized for outstanding client satisfaction and project delivery",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
      year: "2023"
    }
  ];

  const certifications = [
    {
      title: "ISO 27001:2013",
      description: "Information Security Management System",
      icon: "Shield",
      status: "Certified",
      validUntil: "2025"
    },
    {
      title: "AWS Advanced Consulting Partner",
      description: "Highest tier of AWS partnership program",
      icon: "Cloud",
      status: "Active",
      validUntil: "2024"
    },
    {
      title: "Google Cloud Premier Partner",
      description: "Top-tier Google Cloud partnership status",
      icon: "Zap",
      status: "Active",
      validUntil: "2024"
    },
    {
      title: "Microsoft Gold Partner",
      description: "Highest level of Microsoft partnership",
      icon: "Award",
      status: "Certified",
      validUntil: "2025"
    },
    {
      title: "GDPR Compliance Certified",
      description: "European data protection compliance",
      icon: "Lock",
      status: "Certified",
      validUntil: "2025"
    },
    {
      title: "SOC 2 Type II",
      description: "Security, availability, and confidentiality",
      icon: "CheckCircle",
      status: "Audited",
      validUntil: "2024"
    }
  ];

  const partnerships = [
    {
      name: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop",
      level: "Advanced Consulting Partner",
      description: "Cloud infrastructure and AI services"
    },
    {
      name: "Google Cloud",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop",
      level: "Premier Partner",
      description: "Machine learning and data analytics"
    },
    {
      name: "Microsoft Azure",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=120&h=60&fit=crop",
      level: "Gold Partner",
      description: "Enterprise solutions and AI services"
    },
    {
      name: "MIT Research Lab",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop",
      level: "Research Partnership",
      description: "AI and machine learning research"
    }
  ];

  const mediaRecognition = [
    {
      publication: "TechCrunch",
      title: "TrupTECH: Democratizing AI for Small Businesses",
      date: "March 2024",
      type: "Feature Article"
    },
    {
      publication: "Forbes Technology",
      title: "The Future of Cross-Cultural Tech Implementation",
      date: "January 2024",
      type: "Expert Interview"
    },
    {
      publication: "Harvard Business Review",
      title: "Building Trust in AI: A Cultural Approach",
      date: "November 2023",
      type: "Case Study"
    },
    {
      publication: "Wired",
      title: "How TrupTECH is Bridging the AI Gap",
      date: "September 2023",
      type: "Technology Profile"
    }
  ];

  const tabs = [
    { id: 'awards', label: 'Awards', icon: 'Trophy' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'partnerships', label: 'Partnerships', icon: 'Handshake' },
    { id: 'media', label: 'Media', icon: 'Newspaper' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Star" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Recognition</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Industry Recognition & Credentials
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is recognized by industry leaders, certification bodies, and media outlets worldwide.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab?.id
                  ? 'bg-accent text-white shadow-accent/20'
                  : 'bg-surface text-muted-foreground hover:text-foreground hover:bg-card'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Awards Tab */}
          {activeTab === 'awards' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards?.map((award, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-subtle hover-lift">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={award?.image}
                      alt={award?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {award?.year}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {award?.title}
                    </h3>
                    
                    <p className="text-accent font-medium mb-3">
                      {award?.organization}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {award?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications?.map((cert, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={cert?.icon} size={20} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{cert?.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cert?.status === 'Active' ? 'bg-success/10 text-success' :
                          cert?.status === 'Certified'? 'bg-accent/10 text-accent' : 'bg-warning/10 text-warning'
                        }`}>
                          {cert?.status}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {cert?.description}
                      </p>
                      
                      <div className="text-xs text-muted-foreground">
                        Valid until: {cert?.validUntil}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Partnerships Tab */}
          {activeTab === 'partnerships' && (
            <div className="grid md:grid-cols-2 gap-8">
              {partnerships?.map((partner, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-surface rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src={partner?.logo}
                        alt={partner?.name}
                        className="w-12 h-6 object-contain"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{partner?.name}</h3>
                      <p className="text-accent font-medium">{partner?.level}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {partner?.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Media Tab */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              {mediaRecognition?.map((media, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{media?.title}</h3>
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                          {media?.type}
                        </span>
                      </div>
                      
                      <p className="text-accent font-medium mb-1">{media?.publication}</p>
                      <p className="text-muted-foreground text-sm">{media?.date}</p>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <button className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
                        <span className="text-sm font-medium">Read Article</span>
                        <Icon name="ExternalLink" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-surface rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            Why Industry Leaders Trust TrupTECH
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={20} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Security Compliance</div>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={20} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-trust-builder/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={20} className="text-trust-builder" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Industry Awards</div>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Star" size={20} className="text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;