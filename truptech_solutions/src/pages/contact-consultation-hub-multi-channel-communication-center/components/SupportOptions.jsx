import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupportOptions = () => {
  const supportOptions = [
    {
      id: 'emergency',
      title: '24/7 Emergency Support',
      description: 'Critical system failures and urgent technical issues',
      icon: 'AlertTriangle',
      color: 'error',
      responseTime: 'Within 15 minutes',
      availability: '24/7/365',
      channels: ['Phone', 'WhatsApp', 'Emergency Portal'],
      eligibility: 'Premium & Enterprise clients',
      examples: [
        'Server downtime',
        'Security breaches',
        'Data loss incidents',
        'Critical system failures'
      ]
    },
    {
      id: 'priority',
      title: 'Priority Business Support',
      description: 'High-impact issues affecting business operations',
      icon: 'Zap',
      color: 'warning',
      responseTime: 'Within 2 hours',
      availability: 'Business hours (extended)',
      channels: ['Phone', 'Email', 'Client Portal'],
      eligibility: 'All active clients',
      examples: [
        'Performance issues',
        'Integration problems',
        'Feature malfunctions',
        'User access issues'
      ]
    },
    {
      id: 'standard',
      title: 'Standard Technical Support',
      description: 'General questions and non-urgent technical assistance',
      icon: 'HelpCircle',
      color: 'accent',
      responseTime: 'Within 24 hours',
      availability: 'Business hours',
      channels: ['Email', 'Client Portal', 'Knowledge Base'],
      eligibility: 'All clients',
      examples: [
        'How-to questions',
        'Feature requests',
        'Training assistance',
        'Documentation queries'
      ]
    },
    {
      id: 'consultation',
      title: 'Strategic Consultation',
      description: 'Technology planning and strategic guidance sessions',
      icon: 'Target',
      color: 'primary',
      responseTime: 'Scheduled sessions',
      availability: 'By appointment',
      channels: ['Video Call', 'In-person', 'Phone'],
      eligibility: 'All clients',
      examples: [
        'Technology roadmapping',
        'Architecture reviews',
        'Best practices guidance',
        'Growth planning'
      ]
    }
  ];

  const handleContactSupport = (option) => {
    const messages = {
      emergency: 'Emergency support request initiated. You will be connected to our on-call engineer immediately. Please have your client ID and system details ready.',
      priority: 'Priority support ticket created. Our technical team will contact you within 2 hours via your preferred communication method.',
      standard: 'Standard support request submitted. You can expect a detailed response within 24 hours via email or client portal.',
      consultation: 'Consultation request received. Our team will contact you within 1 business day to schedule your strategic session.'
    };

    alert(messages?.[option?.id]);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Support Options
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From emergency response to strategic planning, we provide multiple support tiers to ensure your technology runs smoothly and your business grows successfully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions?.map((option) => (
            <div
              key={option?.id}
              className="bg-card rounded-xl p-6 border border-border shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${option?.color}/10 flex items-center justify-center`}>
                  <Icon 
                    name={option?.icon} 
                    size={32} 
                    className={`text-${option?.color}`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {option?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {option?.description}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Response Time:</span>
                  <span className={`font-medium text-${option?.color}`}>
                    {option?.responseTime}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="font-medium text-foreground">
                    {option?.availability}
                  </span>
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground block mb-1">Channels:</span>
                  <div className="flex flex-wrap gap-1">
                    {option?.channels?.map((channel, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full bg-${option?.color}/10 text-${option?.color}`}
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground block mb-1">Eligibility:</span>
                  <span className="font-medium text-foreground">{option?.eligibility}</span>
                </div>
              </div>

              {/* Examples */}
              <div className="mb-6">
                <span className="text-sm font-medium text-foreground block mb-2">Common Issues:</span>
                <ul className="space-y-1">
                  {option?.examples?.slice(0, 2)?.map((example, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-center">
                      <Icon name="Dot" size={12} className="mr-1" />
                      {example}
                    </li>
                  ))}
                  <li className="text-xs text-muted-foreground">
                    +{option?.examples?.length - 2} more types
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => handleContactSupport(option)}
                iconName="ArrowRight"
                iconPosition="right"
                className={`border-${option?.color} text-${option?.color} hover:bg-${option?.color}/10`}
              >
                Get Support
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Response Commitments */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Clock" size={24} className="text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Response Commitments</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Emergency Issues</span>
                <span className="font-medium text-error">15 minutes</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Priority Issues</span>
                <span className="font-medium text-warning">2 hours</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Standard Issues</span>
                <span className="font-medium text-accent">24 hours</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">Consultations</span>
                <span className="font-medium text-primary">1 business day</span>
              </div>
            </div>
          </div>

          {/* Global Coverage */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Globe" size={24} className="text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Global Coverage</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <div>
                  <div className="font-medium text-foreground">North America</div>
                  <div className="text-sm text-muted-foreground">24/7 Emergency • Business Hours Support</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <div>
                  <div className="font-medium text-foreground">Europe & UK</div>
                  <div className="text-sm text-muted-foreground">24/7 Emergency • Extended Hours Support</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <div>
                  <div className="font-medium text-foreground">Asia Pacific</div>
                  <div className="text-sm text-muted-foreground">24/7 Emergency • Regional Hours Support</div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                <div className="text-sm text-accent font-medium">
                  All time zones covered with native language support available
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-card rounded-xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Need Immediate Assistance?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <Icon name="Phone" size={32} className="mx-auto text-error mb-2" />
                <div className="font-medium text-foreground">Emergency Hotline</div>
                <div className="text-sm text-muted-foreground">+1 (555) 911-TECH</div>
                <div className="text-xs text-error">24/7 Available</div>
              </div>
              
              <div className="text-center">
                <Icon name="MessageCircle" size={32} className="mx-auto text-success mb-2" />
                <div className="font-medium text-foreground">WhatsApp Support</div>
                <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                <div className="text-xs text-success">Instant Response</div>
              </div>
              
              <div className="text-center">
                <Icon name="Mail" size={32} className="mx-auto text-accent mb-2" />
                <div className="font-medium text-foreground">Support Email</div>
                <div className="text-sm text-muted-foreground">support@truptech.com</div>
                <div className="text-xs text-accent">Detailed Assistance</div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Our support team is distributed across multiple time zones to ensure you always have access to expert assistance when you need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;