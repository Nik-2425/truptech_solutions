import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionMatcher = ({ isOpen, onClose, onRecommendation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'business_size',
      title: 'What is your business size?',
      type: 'single',
      options: [
        { value: 'startup', label: 'Startup (1-10 employees)', icon: 'Rocket' },
        { value: 'small', label: 'Small Business (11-50 employees)', icon: 'Building' },
        { value: 'medium', label: 'Medium Business (51-200 employees)', icon: 'Building2' },
        { value: 'enterprise', label: 'Enterprise (200+ employees)', icon: 'Buildings' }
      ]
    },
    {
      id: 'primary_challenge',
      title: 'What is your primary business challenge?',
      type: 'single',
      options: [
        { value: 'efficiency', label: 'Improve operational efficiency', icon: 'Zap' },
        { value: 'automation', label: 'Automate repetitive tasks', icon: 'Bot' },
        { value: 'insights', label: 'Better data insights and analytics', icon: 'BarChart3' },
        { value: 'customer', label: 'Enhance customer experience', icon: 'Users' },
        { value: 'growth', label: 'Scale business operations', icon: 'TrendingUp' }
      ]
    },
    {
      id: 'technology_familiarity',
      title: 'How familiar is your team with technology?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner - Need guidance', icon: 'HelpCircle' },
        { value: 'intermediate', label: 'Intermediate - Some experience', icon: 'User' },
        { value: 'advanced', label: 'Advanced - Tech-savvy team', icon: 'UserCheck' },
        { value: 'expert', label: 'Expert - Technical team', icon: 'Crown' }
      ]
    },
    {
      id: 'budget_range',
      title: 'What is your project budget range?',
      type: 'single',
      options: [
        { value: 'small', label: '$5K - $15K', icon: 'DollarSign' },
        { value: 'medium', label: '$15K - $50K', icon: 'DollarSign' },
        { value: 'large', label: '$50K - $100K', icon: 'DollarSign' },
        { value: 'enterprise', label: '$100K+', icon: 'DollarSign' }
      ]
    },
    {
      id: 'timeline',
      title: 'What is your preferred timeline?',
      type: 'single',
      options: [
        { value: 'urgent', label: 'ASAP (1-2 weeks)', icon: 'Clock' },
        { value: 'fast', label: 'Fast (1-3 months)', icon: 'Clock' },
        { value: 'standard', label: 'Standard (3-6 months)', icon: 'Clock' },
        { value: 'flexible', label: 'Flexible (6+ months)', icon: 'Clock' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendation();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendation = () => {
    // Mock recommendation logic based on answers
    const recommendations = [
      {
        title: 'AI-Powered Business Intelligence',
        match: 95,
        reason: 'Perfect match for your data insights needs and business size',
        solutions: ['Machine Learning Analytics', 'Predictive Modeling', 'Data Visualization']
      },
      {
        title: 'Process Automation Suite',
        match: 88,
        reason: 'Great for improving operational efficiency',
        solutions: ['Workflow Automation', 'Document Processing', 'Integration Platform']
      },
      {
        title: 'Custom CRM Development',
        match: 82,
        reason: 'Ideal for enhancing customer experience',
        solutions: ['Customer Portal', 'Sales Automation', 'Analytics Dashboard']
      }
    ];

    onRecommendation(recommendations);
    onClose();
  };

  const currentQuestion = questions?.[currentStep];
  const progress = ((currentStep + 1) / questions?.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Solution Matcher</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              iconName="X"
              className="text-muted-foreground hover:text-foreground"
            />
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-surface rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Step {currentStep + 1} of {questions?.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-foreground mb-6">
            {currentQuestion?.title}
          </h3>

          <div className="space-y-3">
            {currentQuestion?.options?.map((option) => (
              <button
                key={option?.value}
                onClick={() => handleAnswer(currentQuestion?.id, option?.value)}
                className={`w-full flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200 ${
                  answers?.[currentQuestion?.id] === option?.value
                    ? 'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50 hover:bg-surface text-foreground'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  answers?.[currentQuestion?.id] === option?.value
                    ? 'bg-accent text-white' :'bg-surface text-muted-foreground'
                }`}>
                  <Icon name={option?.icon} size={20} />
                </div>
                <span className="font-medium">{option?.label}</span>
                {answers?.[currentQuestion?.id] === option?.value && (
                  <Icon name="Check" size={20} className="ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-border flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous
          </Button>
          
          <Button
            variant="default"
            onClick={handleNext}
            disabled={!answers?.[currentQuestion?.id]}
            iconName={currentStep === questions?.length - 1 ? "Sparkles" : "ChevronRight"}
            iconPosition="right"
            className="bg-accent hover:bg-accent/90"
          >
            {currentStep === questions?.length - 1 ? 'Get Recommendations' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionMatcher;