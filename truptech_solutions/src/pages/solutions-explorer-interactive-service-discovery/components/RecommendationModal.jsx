import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendationModal = ({ recommendations, isOpen, onClose }) => {
  if (!isOpen || !recommendations) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Your Personalized Recommendations</h2>
                <p className="text-sm text-muted-foreground">Based on your business needs and requirements</p>
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

        {/* Recommendations */}
        <div className="p-6 space-y-6">
          {recommendations?.map((recommendation, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{recommendation?.title}</h3>
                    <div className="flex items-center space-x-1 px-2 py-1 bg-success/10 text-success rounded-full">
                      <Icon name="Target" size={14} />
                      <span className="text-xs font-medium">{recommendation?.match}% Match</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{recommendation?.reason}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">{recommendation?.match}%</div>
                  <div className="text-xs text-muted-foreground">Compatibility</div>
                </div>
              </div>

              {/* Match Indicator */}
              <div className="mb-4">
                <div className="w-full bg-surface rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full transition-all duration-500"
                    style={{ width: `${recommendation?.match}%` }}
                  />
                </div>
              </div>

              {/* Solutions */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Included Solutions:</h4>
                <div className="flex flex-wrap gap-2">
                  {recommendation?.solutions?.map((solution, solutionIndex) => (
                    <span
                      key={solutionIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                    >
                      {solution}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Benefits:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Improved operational efficiency",
                    "Reduced manual workload",
                    "Better data insights",
                    "Scalable architecture"
                  ]?.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="default"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90"
                >
                  View Details
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                >
                  Get Proposal
                </Button>
                <Link to="/contact-consultation-hub-multi-channel-communication-center">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Discuss
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Info" size={16} />
              <span>Recommendations are based on your responses and industry best practices</span>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                iconName="RotateCcw"
                iconPosition="left"
                onClick={onClose}
              >
                Retake Quiz
              </Button>
              <Link to="/contact-consultation-hub-multi-channel-communication-center">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationModal;