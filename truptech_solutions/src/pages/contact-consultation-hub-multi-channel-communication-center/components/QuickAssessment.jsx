import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'business-size',
      question: 'What size is your business?',
      type: 'single',
      options: [
        { value: 'startup', label: 'Startup (1-10 employees)', icon: 'Zap' },
        { value: 'small', label: 'Small Business (11-50 employees)', icon: 'Users' },
        { value: 'medium', label: 'Medium Business (51-200 employees)', icon: 'Building' },
        { value: 'enterprise', label: 'Enterprise (200+ employees)', icon: 'Building2' }
      ]
    },
    {
      id: 'current-challenges',
      question: 'What are your main technology challenges?',
      type: 'multiple',
      options: [
        { value: 'manual-processes', label: 'Too many manual processes', icon: 'RefreshCw' },
        { value: 'data-management', label: 'Poor data management', icon: 'Database' },
        { value: 'customer-experience', label: 'Customer experience issues', icon: 'Heart' },
        { value: 'security-concerns', label: 'Security concerns', icon: 'Shield' },
        { value: 'scalability', label: 'Scalability problems', icon: 'TrendingUp' },
        { value: 'integration', label: 'System integration issues', icon: 'Link' }
      ]
    },
    {
      id: 'priority-goals',
      question: 'What are your top priority goals?',
      type: 'multiple',
      options: [
        { value: 'efficiency', label: 'Increase operational efficiency', icon: 'Zap' },
        { value: 'revenue', label: 'Boost revenue growth', icon: 'DollarSign' },
        { value: 'customer-satisfaction', label: 'Improve customer satisfaction', icon: 'Smile' },
        { value: 'cost-reduction', label: 'Reduce operational costs', icon: 'TrendingDown' },
        { value: 'innovation', label: 'Drive innovation', icon: 'Lightbulb' },
        { value: 'compliance', label: 'Ensure compliance', icon: 'CheckCircle' }
      ]
    },
    {
      id: 'technology-experience',
      question: 'How would you rate your team\'s technology experience?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner - Need lots of guidance', icon: 'HelpCircle' },
        { value: 'intermediate', label: 'Intermediate - Some experience', icon: 'User' },
        { value: 'advanced', label: 'Advanced - Very tech-savvy', icon: 'UserCheck' },
        { value: 'expert', label: 'Expert - Highly technical team', icon: 'Crown' }
      ]
    },
    {
      id: 'timeline',
      question: 'When do you need a solution implemented?',
      type: 'single',
      options: [
        { value: 'asap', label: 'ASAP - Urgent need', icon: 'Zap' },
        { value: '1-3-months', label: '1-3 months', icon: 'Calendar' },
        { value: '3-6-months', label: '3-6 months', icon: 'Clock' },
        { value: 'flexible', label: 'Flexible timeline', icon: 'Timer' }
      ]
    }
  ];

  const handleAnswer = (questionId, value, isMultiple = false) => {
    setAnswers(prev => {
      if (isMultiple) {
        const currentAnswers = prev?.[questionId] || [];
        const newAnswers = currentAnswers?.includes(value)
          ? currentAnswers?.filter(v => v !== value)
          : [...currentAnswers, value];
        return { ...prev, [questionId]: newAnswers };
      } else {
        return { ...prev, [questionId]: value };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < questions?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const generateRecommendations = () => {
    const businessSize = answers?.['business-size'];
    const challenges = answers?.['current-challenges'] || [];
    const goals = answers?.['priority-goals'] || [];
    const experience = answers?.['technology-experience'];
    const timeline = answers?.['timeline'];

    let recommendations = [];

    // AI Solutions
    if (challenges?.includes('manual-processes') || goals?.includes('efficiency')) {
      recommendations?.push({
        title: 'AI-Powered Process Automation',
        description: 'Automate repetitive tasks and streamline workflows with intelligent automation solutions.',
        icon: 'Bot',
        priority: 'High',
        timeline: timeline === 'asap' ? '2-4 weeks' : '4-8 weeks'
      });
    }

    // Data Analytics
    if (challenges?.includes('data-management') || goals?.includes('revenue')) {
      recommendations?.push({
        title: 'Data Analytics & Business Intelligence',
        description: 'Transform your data into actionable insights for better decision-making.',
        icon: 'BarChart3',
        priority: 'High',
        timeline: '6-12 weeks'
      });
    }

    // Custom Development
    if (businessSize === 'enterprise' || challenges?.includes('scalability')) {
      recommendations?.push({
        title: 'Custom Enterprise Solutions',
        description: 'Scalable, tailored software solutions designed for your specific business needs.',
        icon: 'Code',
        priority: 'Medium',
        timeline: '12-24 weeks'
      });
    }

    // Cybersecurity
    if (challenges?.includes('security-concerns') || goals?.includes('compliance')) {
      recommendations?.push({
        title: 'Cybersecurity & Compliance',
        description: 'Comprehensive security solutions to protect your business and ensure compliance.',
        icon: 'Shield',
        priority: 'High',
        timeline: '4-8 weeks'
      });
    }

    // Cloud Solutions
    if (challenges?.includes('integration') || businessSize === 'medium' || businessSize === 'enterprise') {
      recommendations?.push({
        title: 'Cloud Migration & Integration',
        description: 'Modernize your infrastructure with cloud solutions and seamless integrations.',
        icon: 'Cloud',
        priority: 'Medium',
        timeline: '8-16 weeks'
      });
    }

    return recommendations?.slice(0, 3); // Return top 3 recommendations
  };

  const currentQuestion = questions?.[currentStep];
  const isAnswered = currentQuestion && (
    currentQuestion?.type === 'single' 
      ? answers?.[currentQuestion?.id]
      : answers?.[currentQuestion?.id] && answers?.[currentQuestion?.id]?.length > 0
  );

  if (showResults) {
    const recommendations = generateRecommendations();
    
    return (
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Technology Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              Based on your responses, here are our personalized recommendations for your business.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {recommendations?.map((rec, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-subtle">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={rec?.icon} size={24} className="text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{rec?.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        rec?.priority === 'High' ?'bg-error/10 text-error' :'bg-warning/10 text-warning'
                      }`}>
                        {rec?.priority} Priority
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{rec?.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>Timeline: {rec?.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-accent-foreground mr-4"
            >
              Book Free Consultation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={resetAssessment}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Retake Assessment
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Want to discuss these recommendations? Our experts are ready to help you create a detailed implementation plan.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quick Technology Assessment
          </h2>
          <p className="text-lg text-muted-foreground">
            Answer a few questions to get personalized technology recommendations for your business.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Question {currentStep + 1} of {questions?.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentStep + 1) / questions?.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions?.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-card rounded-xl p-8 border border-border shadow-subtle">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            {currentQuestion?.question}
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {currentQuestion?.options?.map((option) => {
              const isSelected = currentQuestion?.type === 'single' 
                ? answers?.[currentQuestion?.id] === option?.value
                : (answers?.[currentQuestion?.id] || [])?.includes(option?.value);

              return (
                <div
                  key={option?.value}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    isSelected
                      ? 'border-accent bg-accent/5 shadow-lg'
                      : 'border-border hover:border-accent/50'
                  }`}
                  onClick={() => handleAnswer(currentQuestion?.id, option?.value, currentQuestion?.type === 'multiple')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={option?.icon} size={20} />
                    </div>
                    <span className="font-medium text-foreground">{option?.label}</span>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {currentQuestion?.type === 'multiple' && (
            <p className="text-sm text-muted-foreground text-center mb-6">
              Select all that apply to your business
            </p>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Previous
            </Button>

            <Button
              variant="default"
              onClick={nextStep}
              disabled={!isAnswered}
              iconName={currentStep === questions?.length - 1 ? "CheckCircle" : "ArrowRight"}
              iconPosition="right"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {currentStep === questions?.length - 1 ? 'Get Results' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAssessment;