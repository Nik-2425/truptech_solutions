import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const DemoModal = ({ solution, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !solution) return null;

  const demoTabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'features', label: 'Features', icon: 'Settings' },
    { id: 'implementation', label: 'Implementation', icon: 'Code' },
    { id: 'results', label: 'Results', icon: 'BarChart3' }
  ];

  const mockDemoData = {
    overview: {
      title: `${solution?.title} Demo`,
      description: `Experience the power of ${solution?.title} through our interactive demonstration. This demo showcases real-world applications and measurable business impact.`,
      videoUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
      keyPoints: [
        "Real-time data processing capabilities",
        "Intuitive user interface design",
        "Seamless integration with existing systems",
        "Advanced analytics and reporting"
      ]
    },
    features: [
      {
        name: "Smart Analytics",
        description: "AI-powered insights that adapt to your business patterns",
        icon: "Brain",
        status: "active"
      },
      {
        name: "Automated Workflows",
        description: "Streamline processes with intelligent automation",
        icon: "Zap",
        status: "active"
      },
      {
        name: "Real-time Monitoring",
        description: "Track performance and metrics in real-time",
        icon: "Activity",
        status: "active"
      },
      {
        name: "Custom Integrations",
        description: "Connect with your existing tools and platforms",
        icon: "Link",
        status: "coming-soon"
      }
    ],
    implementation: {
      phases: [
        {
          phase: "Discovery & Planning",
          duration: "1-2 weeks",
          tasks: ["Requirements analysis", "System architecture", "Project roadmap"],
          status: "completed"
        },
        {
          phase: "Development & Testing",
          duration: "4-6 weeks",
          tasks: ["Core development", "Quality assurance", "Performance optimization"],
          status: "in-progress"
        },
        {
          phase: "Deployment & Training",
          duration: "1-2 weeks",
          tasks: ["System deployment", "User training", "Documentation"],
          status: "upcoming"
        }
      ]
    },
    results: {
      metrics: [
        { label: "Efficiency Improvement", value: "45%", trend: "up" },
        { label: "Cost Reduction", value: "$25K", trend: "down" },
        { label: "Processing Speed", value: "3x faster", trend: "up" },
        { label: "User Satisfaction", value: "94%", trend: "up" }
      ],
      testimonial: {
        text: `The implementation of ${solution?.title} has transformed our operations. We've seen significant improvements in efficiency and our team loves the intuitive interface.`,
        author: "Sarah Johnson",
        role: "Operations Director",
        company: "TechCorp Solutions"
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={mockDemoData?.overview?.videoUrl}
                alt="Demo Preview"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                >
                  Play Demo
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {mockDemoData?.overview?.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {mockDemoData?.overview?.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Key Highlights:</h4>
                {mockDemoData?.overview?.keyPoints?.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-4">
            {mockDemoData?.features?.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={feature?.icon} size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-foreground">{feature?.name}</h4>
                    {feature?.status === 'coming-soon' && (
                      <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{feature?.description}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'implementation':
        return (
          <div className="space-y-4">
            {mockDemoData?.implementation?.phases?.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    phase?.status === 'completed' ? 'bg-success text-white' :
                    phase?.status === 'in-progress'? 'bg-accent text-white' : 'bg-surface text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{phase?.phase}</h4>
                      <span className="text-sm text-muted-foreground">{phase?.duration}</span>
                    </div>
                    <div className="space-y-1">
                      {phase?.tasks?.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-2">
                          <Icon 
                            name={phase?.status === 'completed' ? 'Check' : 'Circle'} 
                            size={14} 
                            className={phase?.status === 'completed' ? 'text-success' : 'text-muted-foreground'} 
                          />
                          <span className="text-sm text-muted-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < mockDemoData?.implementation?.phases?.length - 1 && (
                  <div className="w-px h-6 bg-border ml-4 mt-2"></div>
                )}
              </div>
            ))}
          </div>
        );

      case 'results':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {mockDemoData?.results?.metrics?.map((metric, index) => (
                <div key={index} className="p-4 bg-surface rounded-lg text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <span className="text-2xl font-bold text-foreground">{metric?.value}</span>
                    <Icon 
                      name={metric?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={16} 
                      className={metric?.trend === 'up' ? 'text-success' : 'text-error'} 
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">{metric?.label}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="Quote" size={20} className="text-accent mt-1" />
                <div>
                  <p className="text-foreground mb-3 italic">
                    "{mockDemoData?.results?.testimonial?.text}"
                  </p>
                  <div>
                    <div className="font-medium text-foreground">
                      {mockDemoData?.results?.testimonial?.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {mockDemoData?.results?.testimonial?.role}, {mockDemoData?.results?.testimonial?.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">{solution?.title} Demo</h2>
              <p className="text-sm text-muted-foreground">{solution?.category}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              iconName="X"
              className="text-muted-foreground hover:text-foreground"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex space-x-1 p-1">
            {demoTabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-accent/10 text-accent' :'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {renderTabContent()}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-between">
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
          >
            Download Specs
          </Button>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Ask Questions
            </Button>
            <Button
              variant="default"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;