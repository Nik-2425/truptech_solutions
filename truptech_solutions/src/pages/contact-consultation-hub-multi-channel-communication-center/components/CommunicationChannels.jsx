import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunicationChannels = ({ onChannelSelect }) => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const channels = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      description: 'Instant messaging with quick responses and file sharing capabilities',
      icon: 'MessageCircle',
      color: 'success',
      responseTime: 'Within 15 minutes',
      availability: '24/7 Global',
      features: ['Instant Responses', 'File Sharing', 'Voice Messages', 'Screen Sharing'],
      bestFor: 'Quick questions, urgent support, file sharing'
    },
    {
      id: 'video',
      name: 'Video Consultation',
      description: 'Face-to-face meetings for detailed project discussions',
      icon: 'Video',
      color: 'accent',
      responseTime: 'Scheduled slots',
      availability: 'Business Hours',
      features: ['Screen Sharing', 'Recording Available', 'Multi-participant', 'Presentation Mode'],
      bestFor: 'Project planning, technical discussions, team introductions'
    },
    {
      id: 'phone',
      name: 'Phone Consultation',
      description: 'Direct voice calls with our technology experts',
      icon: 'Phone',
      color: 'primary',
      responseTime: 'Within 2 hours',
      availability: 'Global Time Zones',
      features: ['Direct Line', 'Call Recording', 'Conference Calls', 'Follow-up Notes'],
      bestFor: 'Detailed discussions, urgent matters, personal touch'
    },
    {
      id: 'email',
      name: 'Email Support',
      description: 'Comprehensive written communication for detailed inquiries',
      icon: 'Mail',
      color: 'secondary',
      responseTime: 'Within 4 hours',
      availability: '24/7 Processing',
      features: ['Detailed Responses', 'Document Attachments', 'Thread History', 'Priority Tagging'],
      bestFor: 'Complex requirements, documentation, formal communication'
    }
  ];

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel?.id);
    onChannelSelect(channel);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Preferred Communication Channel
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We adapt to your communication style. Select the channel that works best for your needs and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels?.map((channel) => (
            <div
              key={channel?.id}
              className={`relative bg-card rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-elevated hover:-translate-y-1 ${
                selectedChannel === channel?.id
                  ? `border-${channel?.color} shadow-lg`
                  : 'border-border hover:border-accent/50'
              }`}
              onClick={() => handleChannelClick(channel)}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${channel?.color}/10 flex items-center justify-center`}>
                  <Icon 
                    name={channel?.icon} 
                    size={32} 
                    className={`text-${channel?.color}`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {channel?.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {channel?.description}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Response Time:</span>
                  <span className={`font-medium text-${channel?.color}`}>
                    {channel?.responseTime}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="font-medium text-foreground">
                    {channel?.availability}
                  </span>
                </div>

                {/* Features */}
                <div>
                  <div className="text-sm font-medium text-foreground mb-2">Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {channel?.features?.slice(0, 2)?.map((feature, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full bg-${channel?.color}/10 text-${channel?.color}`}
                      >
                        {feature}
                      </span>
                    ))}
                    {channel?.features?.length > 2 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        +{channel?.features?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <div className="text-sm font-medium text-foreground mb-1">Best For:</div>
                  <p className="text-xs text-muted-foreground">
                    {channel?.bestFor}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <Button
                  variant={selectedChannel === channel?.id ? 'default' : 'outline'}
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className={selectedChannel === channel?.id ? `bg-${channel?.color} hover:bg-${channel?.color}/90` : ''}
                >
                  {selectedChannel === channel?.id ? 'Selected' : 'Choose This'}
                </Button>
              </div>

              {/* Selection Indicator */}
              {selectedChannel === channel?.id && (
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-${channel?.color} rounded-full flex items-center justify-center`}>
                  <Icon name="Check" size={14} color="white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg p-6 border border-border max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Shield" size={20} className="text-accent" />
              <span className="font-semibold text-foreground">Secure & Confidential</span>
            </div>
            <p className="text-muted-foreground">
              All communications are encrypted and confidential. We follow strict data protection protocols 
              and never share your information with third parties. Your privacy is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationChannels;