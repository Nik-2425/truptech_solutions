import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ClientStoryCard = ({ story, featured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVideoPlay = () => {
    // Mock video play functionality
    console.log('Playing video for:', story?.client);
  };

  return (
    <div className={`bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-elevated ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Header with Client Info */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={story?.clientPhoto}
                alt={story?.client}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-background rounded-full flex items-center justify-center border-2 border-background">
                <span className="text-xs">{story?.countryFlag}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">{story?.client}</h3>
              <p className="text-sm text-muted-foreground">{story?.position}</p>
              <p className="text-sm text-muted-foreground">{story?.company}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-sm font-medium text-card-foreground">{story?.country}</div>
              <div className="text-xs text-muted-foreground">{story?.industry}</div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-surface rounded-lg p-4">
          <h4 className="font-medium text-card-foreground mb-2">{story?.projectTitle}</h4>
          <p className="text-sm text-muted-foreground mb-3">{story?.projectDescription}</p>
          
          {/* Technologies Used */}
          <div className="flex flex-wrap gap-2 mb-3">
            {story?.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial Content */}
      <div className="p-6">
        <div className="mb-4">
          <Icon name="Quote" size={24} className="text-accent mb-2" />
          <p className={`text-card-foreground leading-relaxed ${
            !isExpanded && story?.testimonial?.length > 200 ? 'line-clamp-3' : ''
          }`}>
            {story?.testimonial}
          </p>
          {story?.testimonial?.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-accent text-sm mt-2 hover:underline"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Cultural Intelligence Highlight */}
        <div className="bg-trust-builder/10 border border-trust-builder/20 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3">
            <Icon name="Globe" size={20} className="text-trust-builder mt-0.5" />
            <div>
              <h5 className="font-medium text-card-foreground mb-1">Cultural Adaptation</h5>
              <p className="text-sm text-muted-foreground">{story?.culturalAdaptation}</p>
            </div>
          </div>
        </div>

        {/* Results & Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {story?.results?.map((result, index) => (
            <div key={index} className="text-center p-3 bg-surface rounded-lg">
              <div className="text-lg font-bold text-accent">{result?.value}</div>
              <div className="text-xs text-muted-foreground">{result?.metric}</div>
            </div>
          ))}
        </div>

        {/* Video Testimonial */}
        {story?.hasVideo && (
          <div className="relative mb-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src={story?.videoThumbnail}
                alt="Video testimonial thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleVideoPlay}
                  iconName="Play"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90"
                >
                  Watch Story
                </Button>
              </div>
            </div>
            {story?.videoLanguages && (
              <div className="mt-2 text-xs text-muted-foreground">
                Available with subtitles: {story?.videoLanguages?.join(', ')}
              </div>
            )}
          </div>
        )}

        {/* Project Timeline */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">Project Duration:</span>
              <span className="text-card-foreground font-medium">{story?.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">Timezone:</span>
              <span className="text-card-foreground font-medium">{story?.timezone}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Actions */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
            >
              View Case Study
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Share2"
              iconPosition="left"
            >
              Share
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            Completed {story?.completedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStoryCard;