import React from 'react';
import Icon from '../../../components/AppIcon';


const CulturalIntelligenceShowcase = () => {
  const culturalAdaptations = [
    {
      region: 'Asia Pacific',
      flag: '🇸🇬',
      title: 'Hierarchical Communication',
      description: 'Adapted project management approach to respect traditional business hierarchies while maintaining agile methodologies.',
      example: 'In Singapore, we implemented a dual-reporting system that honored local management structures while ensuring project transparency.',
      impact: '40% faster decision-making process',
      color: 'bg-trust-builder'
    },
    {
      region: 'Middle East',
      flag: '🇦🇪',
      title: 'Cultural Business Practices',
      description: 'Scheduled meetings and deliverables around local holidays and prayer times, ensuring respectful collaboration.',
      example: 'For our UAE client, we adjusted sprint cycles to accommodate Ramadan and local weekend schedules (Friday-Saturday).',
      impact: '95% meeting attendance rate',
      color: 'bg-warning'
    },
    {
      region: 'Europe',
      flag: '🇩🇪',
      title: 'Data Privacy Excellence',
      description: 'Implemented GDPR-compliant solutions with German precision standards for data handling and documentation.',
      example: 'Built a comprehensive audit trail system that exceeded German banking regulations for our Frankfurt client.',
      impact: '100% compliance score',
      color: 'bg-primary'
    },
    {
      region: 'North America',
      flag: '🇺🇸',
      title: 'Innovation-First Approach',
      description: 'Embraced rapid prototyping and fail-fast methodologies aligned with Silicon Valley innovation culture.',
      example: 'Delivered MVP in 6 weeks for a San Francisco startup, enabling quick market validation and investor presentations.',
      impact: '3x faster time-to-market',
      color: 'bg-accent'
    }
  ];

  const communicationStyles = [
    {
      style: 'Direct Communication',
      regions: ['Germany', 'Netherlands', 'Australia'],
      approach: 'Clear, concise project updates with detailed technical specifications',
      icon: 'MessageSquare'
    },
    {
      style: 'Relationship-First',
      regions: ['Japan', 'South Korea', 'Thailand'],
      approach: 'Building trust through consistent communication and cultural sensitivity',
      icon: 'Users'
    },
    {
      style: 'Collaborative Decision Making',
      regions: ['Sweden', 'Denmark', 'Norway'],
      approach: 'Inclusive planning sessions with consensus-building approaches',
      icon: 'GitBranch'
    },
    {
      style: 'Formal Documentation',
      regions: ['Switzerland', 'Austria', 'Luxembourg'],
      approach: 'Comprehensive documentation with detailed process adherence',
      icon: 'FileText'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Cultural Intelligence in Action
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          How TrupTECH adapts technology solutions to respect and embrace diverse business cultures worldwide
        </p>
      </div>
      {/* Cultural Adaptations Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {culturalAdaptations?.map((adaptation, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${adaptation?.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                  {adaptation?.flag}
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{adaptation?.title}</h3>
                  <p className="text-sm text-muted-foreground">{adaptation?.region}</p>
                </div>
              </div>
              <div className={`px-3 py-1 ${adaptation?.color}/10 text-xs rounded-full font-medium`}>
                {adaptation?.impact}
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{adaptation?.description}</p>

            <div className="bg-surface rounded-lg p-4">
              <h4 className="text-sm font-medium text-card-foreground mb-2 flex items-center">
                <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                Real Example
              </h4>
              <p className="text-sm text-muted-foreground italic">{adaptation?.example}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Communication Styles */}
      <div className="bg-card border border-border rounded-xl p-8">
        <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
          Adaptive Communication Styles
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communicationStyles?.map((style, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={style?.icon} size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">{style?.style}</h4>
              <p className="text-sm text-muted-foreground mb-3">{style?.approach}</p>
              <div className="flex flex-wrap justify-center gap-1">
                {style?.regions?.map((region, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Global Success Metrics */}
      <div className="bg-gradient-to-r from-accent/5 to-trust-builder/5 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          Cultural Adaptation Success Metrics
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            <div className="text-xs text-muted-foreground mt-1">Across all cultures</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-trust-builder mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Languages Supported</div>
            <div className="text-xs text-muted-foreground mt-1">Including documentation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Global Coverage</div>
            <div className="text-xs text-muted-foreground mt-1">12 time zones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Repeat Business</div>
            <div className="text-xs text-muted-foreground mt-1">International clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalIntelligenceShowcase;