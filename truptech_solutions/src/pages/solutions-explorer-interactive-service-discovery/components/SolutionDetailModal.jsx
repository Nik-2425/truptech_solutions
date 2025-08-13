import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SolutionDetailModal = ({ solution, isOpen, onClose, onDemoClick }) => {
  const [activeSection, setActiveSection] = useState('overview');

  if (!isOpen || !solution) return null;

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'features', label: 'Features', icon: 'Settings' },
    { id: 'technology', label: 'Technology', icon: 'Code' },
    { id: 'process', label: 'Process', icon: 'GitBranch' },
    { id: 'pricing', label: 'Investment', icon: 'DollarSign' }
  ];

  const mockDetailData = {
    overview: {
      description: `${solution?.description}\n\nOur ${solution?.title} solution is designed to transform your business operations through cutting-edge technology and proven methodologies. We combine industry expertise with innovative approaches to deliver measurable results that drive growth and efficiency.`,
      benefits: [
        "Increased operational efficiency by up to 45%",
        "Reduced manual processing time by 60%",
        "Improved data accuracy and insights",
        "Scalable architecture for future growth",
        "24/7 monitoring and support included"
      ],
      industries: ["Healthcare", "Finance", "E-commerce", "Manufacturing", "Education"]
    },
    features: [
      {
        name: "Advanced Analytics Dashboard",
        description: "Real-time insights with customizable reporting and data visualization",
        icon: "BarChart3",
        included: true
      },
      {
        name: "Automated Workflow Engine",
        description: "Intelligent process automation with rule-based decision making",
        icon: "Zap",
        included: true
      },
      {
        name: "API Integration Hub",
        description: "Seamless connectivity with existing systems and third-party services",
        icon: "Link",
        included: true
      },
      {
        name: "Mobile Application",
        description: "Native mobile apps for iOS and Android platforms",
        icon: "Smartphone",
        included: false,
        addon: true
      },
      {
        name: "Advanced Security Suite",
        description: "Enterprise-grade security with encryption and compliance features",
        icon: "Shield",
        included: true
      },
      {
        name: "Custom Reporting Tools",
        description: "Tailored reports and analytics specific to your business needs",
        icon: "FileText",
        included: false,
        addon: true
      }
    ],
    technology: {
      stack: [
        { category: "Frontend", technologies: ["React", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", technologies: ["Node.js", "Python", "PostgreSQL"] },
        { category: "Cloud", technologies: ["AWS", "Docker", "Kubernetes"] },
        { category: "AI/ML", technologies: ["TensorFlow", "PyTorch", "OpenAI"] }
      ],
      architecture: "Microservices architecture with cloud-native deployment",
      security: "SOC 2 Type II compliant with end-to-end encryption"
    },
    process: {
      phases: [
        {
          name: "Discovery & Analysis",
          duration: "1-2 weeks",
          description: "Comprehensive analysis of your current systems and requirements",
          deliverables: ["Requirements document", "Technical specification", "Project roadmap"]
        },
        {
          name: "Design & Planning",
          duration: "1-2 weeks",
          description: "System architecture design and detailed project planning",
          deliverables: ["System architecture", "UI/UX designs", "Implementation plan"]
        },
        {
          name: "Development & Testing",
          duration: "4-8 weeks",
          description: "Agile development with continuous testing and quality assurance",
          deliverables: ["Core system", "Testing reports", "Documentation"]
        },
        {
          name: "Deployment & Training",
          duration: "1-2 weeks",
          description: "System deployment and comprehensive user training",
          deliverables: ["Live system", "User training", "Support documentation"]
        }
      ]
    },
    pricing: {
      basePrice: "$25,000 - $75,000",
      factors: [
        "System complexity and customization requirements",
        "Number of users and data volume",
        "Integration requirements with existing systems",
        "Additional features and modules",
        "Ongoing support and maintenance needs"
      ],
      included: [
        "Complete system development",
        "Quality assurance and testing",
        "Deployment and configuration",
        "User training and documentation",
        "3 months of support and maintenance"
      ]
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">About This Solution</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {mockDetailData?.overview?.description}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Key Benefits</h4>
              <div className="space-y-2">
                {mockDetailData?.overview?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Ideal for Industries</h4>
              <div className="flex flex-wrap gap-2">
                {mockDetailData?.overview?.industries?.map((industry, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface text-muted-foreground text-sm rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-4">
            {mockDetailData?.features?.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={feature?.icon} size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-foreground">{feature?.name}</h4>
                    {feature?.included ? (
                      <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                        Included
                      </span>
                    ) : feature?.addon ? (
                      <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">
                        Add-on
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        Optional
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{feature?.description}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'technology':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockDetailData?.technology?.stack?.map((category, index) => (
                  <div key={index} className="p-4 bg-surface rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">{category?.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category?.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Architecture</h4>
                <p className="text-sm text-muted-foreground">{mockDetailData?.technology?.architecture}</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Security</h4>
                <p className="text-sm text-muted-foreground">{mockDetailData?.technology?.security}</p>
              </div>
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="space-y-4">
            {mockDetailData?.process?.phases?.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{phase?.name}</h4>
                      <span className="text-sm text-muted-foreground">{phase?.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{phase?.description}</p>
                    <div>
                      <h5 className="text-xs font-medium text-foreground mb-1">Deliverables:</h5>
                      <div className="flex flex-wrap gap-2">
                        {phase?.deliverables?.map((deliverable, delIndex) => (
                          <span
                            key={delIndex}
                            className="px-2 py-1 bg-surface text-xs text-muted-foreground rounded-md"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < mockDetailData?.process?.phases?.length - 1 && (
                  <div className="w-px h-6 bg-border ml-4 mt-2"></div>
                )}
              </div>
            ))}
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-6">
            <div className="text-center p-6 bg-accent/5 border border-accent/20 rounded-lg">
              <div className="text-3xl font-bold text-foreground mb-2">
                {mockDetailData?.pricing?.basePrice}
              </div>
              <p className="text-sm text-muted-foreground">
                Investment range based on project scope
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Pricing Factors</h4>
              <div className="space-y-2">
                {mockDetailData?.pricing?.factors?.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">What's Included</h4>
              <div className="space-y-2">
                {mockDetailData?.pricing?.included?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
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
      <div className="bg-card border border-border rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src={solution?.image}
                  alt={solution?.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">{solution?.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{solution?.category}</span>
                  <span>•</span>
                  <span>{solution?.timeline}</span>
                  <span>•</span>
                  <span className="text-success">{solution?.roi} ROI</span>
                </div>
              </div>
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

        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-64 border-r border-border p-4">
            <nav className="space-y-1">
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section?.id
                      ? 'bg-accent/10 text-accent' :'text-muted-foreground hover:text-foreground hover:bg-surface'
                  }`}
                >
                  <Icon name={section?.icon} size={18} />
                  <span className="text-sm font-medium">{section?.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 max-h-96 overflow-y-auto">
            {renderSectionContent()}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-between">
          <div className="flex space-x-3">
            {solution?.demoAvailable && (
              <Button
                variant="outline"
                iconName="Play"
                iconPosition="left"
                onClick={() => onDemoClick(solution)}
              >
                View Demo
              </Button>
            )}
            <Button
              variant="outline"
              iconName="Download"
              iconPosition="left"
            >
              Download Specs
            </Button>
          </div>
          <div className="flex space-x-3">
            <Link to="/contact-consultation-hub-multi-channel-communication-center">
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Ask Questions
              </Button>
            </Link>
            <Button
              variant="default"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90"
            >
              Get Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetailModal;