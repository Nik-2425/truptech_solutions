import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10 border-success/20';
      case 'in-progress':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'planning':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'timeline', label: 'Timeline', icon: 'Calendar' },
    { id: 'team', label: 'Team', icon: 'Users' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-floating">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <Image 
              src={project?.clientLogo} 
              alt={`${project?.clientName} logo`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-card-foreground">{project?.title}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-muted-foreground">{project?.clientName}</span>
                <Image 
                  src={project?.clientFlag} 
                  alt={`${project?.clientCountry} flag`}
                  className="w-5 h-3 rounded-sm object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project?.status)}`}>
              {project?.status?.replace('-', ' ')?.toUpperCase()}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              iconName="X"
              className="text-muted-foreground hover:text-card-foreground"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 border-b-2 ${
                activeTab === tab?.id
                  ? 'text-accent border-accent bg-accent/5' :'text-muted-foreground border-transparent hover:text-card-foreground hover:bg-surface'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Project Description</h3>
                <p className="text-muted-foreground leading-relaxed">{project?.fullDescription}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-card-foreground">Duration</span>
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">{project?.duration}</span>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Users" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-card-foreground">Team Size</span>
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">{project?.teamSize}</span>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="DollarSign" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-card-foreground">Budget</span>
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">{project?.budget}</span>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Target" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-card-foreground">Progress</span>
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">{project?.progress}%</span>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-accent/10 text-accent text-sm font-medium rounded-lg border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project?.keyFeatures && (
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project?.keyFeatures?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Project Timeline</h3>
              {project?.timeline?.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                    milestone?.completed ? 'bg-success' : 'bg-muted'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-card-foreground">{milestone?.title}</h4>
                      <span className="text-sm text-muted-foreground">{milestone?.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Project Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project?.teamMembers?.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                    <Image 
                      src={member?.avatar} 
                      alt={member?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-card-foreground">{member?.name}</h4>
                      <p className="text-sm text-muted-foreground">{member?.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Project Results</h3>
              
              {/* Achievements */}
              {project?.achievements && (
                <div>
                  <h4 className="font-medium text-card-foreground mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {project?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Trophy" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Testimonial */}
              {project?.testimonial && (
                <div className="bg-surface rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="Quote" size={20} className="text-accent" />
                    <span className="font-medium text-card-foreground">Client Testimonial</span>
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{project?.testimonial?.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Image 
                      src={project?.testimonial?.avatar} 
                      alt={project?.testimonial?.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-card-foreground">{project?.testimonial?.author}</p>
                      <p className="text-sm text-muted-foreground">{project?.testimonial?.position}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Last updated: {project?.lastUpdated}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="default"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Discuss Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;