import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SolutionCard = ({ solution, onDemoClick, onLearnMore }) => {
  const {
    id,
    title,
    category,
    description,
    features,
    technologies,
    timeline,
    roi,
    complexity,
    image,
    demoAvailable,
    caseStudies
  } = solution;

  const getComplexityColor = (level) => {
    switch (level) {
      case 'Simple':
        return 'text-success bg-success/10';
      case 'Moderate':
        return 'text-warning bg-warning/10';
      case 'Complex':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML':
        return 'Brain';
      case 'Automation':
        return 'Zap';
      case 'Custom Development':
        return 'Code';
      case 'Consulting':
        return 'Users';
      default:
        return 'Settings';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name={getCategoryIcon(category)} size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {title}
            </h3>
            <span className="text-sm text-muted-foreground">{category}</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(complexity)}`}>
          {complexity}
        </div>
      </div>
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {demoAvailable && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              variant="default"
              size="sm"
              iconName="Play"
              iconPosition="left"
              onClick={() => onDemoClick(solution)}
              className="bg-accent hover:bg-accent/90"
            >
              View Demo
            </Button>
          </div>
        )}
      </div>
      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {description}
      </p>
      {/* Features */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-foreground mb-2">Key Features</h4>
        <div className="flex flex-wrap gap-2">
          {features?.slice(0, 3)?.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-xs text-muted-foreground rounded-md"
            >
              {feature}
            </span>
          ))}
          {features?.length > 3 && (
            <span className="px-2 py-1 bg-surface text-xs text-muted-foreground rounded-md">
              +{features?.length - 3} more
            </span>
          )}
        </div>
      </div>
      {/* Technologies */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent/10 text-xs text-accent rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-surface rounded-lg">
        <div className="text-center">
          <div className="text-lg font-semibold text-foreground">{timeline}</div>
          <div className="text-xs text-muted-foreground">Timeline</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-success">{roi}</div>
          <div className="text-xs text-muted-foreground">Expected ROI</div>
        </div>
      </div>
      {/* Actions */}
      <div className="flex space-x-3">
        <Button
          variant="outline"
          size="sm"
          iconName="BookOpen"
          iconPosition="left"
          onClick={() => onLearnMore(solution)}
          className="flex-1"
        >
          Learn More
        </Button>
        <Link to="/contact-consultation-hub-multi-channel-communication-center">
          <Button
            variant="default"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-accent hover:bg-accent/90"
          >
            Discuss
          </Button>
        </Link>
      </div>
      {/* Case Studies Badge */}
      {caseStudies > 0 && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
            <Icon name="FileText" size={14} />
            <span>{caseStudies} case studies available</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionCard;