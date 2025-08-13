import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

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

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-accent';
    if (progress >= 25) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div 
      className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 hover-lift ${
        isHovered ? 'shadow-elevated' : 'shadow-subtle'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-card-foreground line-clamp-1">
              {project?.title}
            </h3>
            <div className="flex items-center space-x-1">
              <Image 
                src={project?.clientFlag} 
                alt={`${project?.clientCountry} flag`}
                className="w-5 h-3 rounded-sm object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {project?.description}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
          {project?.status?.replace('-', ' ')?.toUpperCase()}
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-card-foreground">Progress</span>
          <span className="text-sm text-muted-foreground">{project?.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project?.progress)}`}
            style={{ width: `${project?.progress}%` }}
          />
        </div>
      </div>
      {/* Project Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={16} className="text-muted-foreground" />
          <span className="text-sm text-card-foreground">{project?.duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-muted-foreground" />
          <span className="text-sm text-card-foreground">{project?.teamSize} members</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="DollarSign" size={16} className="text-muted-foreground" />
          <span className="text-sm text-card-foreground">{project?.budget}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Building" size={16} className="text-muted-foreground" />
          <span className="text-sm text-card-foreground">{project?.industry}</span>
        </div>
      </div>
      {/* Technology Stack */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-card-foreground mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-surface text-xs font-medium text-muted-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-surface text-xs font-medium text-muted-foreground rounded-md">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>
      </div>
      {/* Key Achievements */}
      {project?.achievements && project?.achievements?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-card-foreground mb-2">Key Achievements</h4>
          <div className="space-y-1">
            {project?.achievements?.slice(0, 2)?.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                <span className="text-xs text-muted-foreground line-clamp-1">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <Image 
            src={project?.clientLogo} 
            alt={`${project?.clientName} logo`}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-card-foreground">{project?.clientName}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewDetails(project)}
          iconName="ArrowRight"
          iconPosition="right"
          className="text-accent border-accent/20 hover:bg-accent/10"
        >
          View Details
        </Button>
      </div>
      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-accent/5 rounded-xl pointer-events-none transition-opacity duration-300" />
      )}
    </div>
  );
};

export default ProjectCard;