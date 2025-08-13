import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProjectRequestWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    industry: '',
    budget: '',
    timeline: '',
    description: '',
    email: '',
    company: ''
  });
  const [similarProjects, setSimilarProjects] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const projectTypeOptions = [
    { value: '', label: 'Select project type' },
    { value: 'ai-implementation', label: 'AI Implementation' },
    { value: 'automation-deployment', label: 'Automation Deployment' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'cloud-migration', label: 'Cloud Migration' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'web-platform', label: 'Web Platform' }
  ];

  const industryOptions = [
    { value: '', label: 'Select industry' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'e-commerce', label: 'E-Commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'education', label: 'Education' },
    { value: 'real-estate', label: 'Real Estate' }
  ];

  const budgetOptions = [
    { value: '', label: 'Select budget range' },
    { value: 'small', label: 'Under $50K' },
    { value: 'medium', label: '$50K - $200K' },
    { value: 'large', label: '$200K - $500K' },
    { value: 'enterprise', label: 'Over $500K' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: '12-months-plus', label: '12+ months' }
  ];

  const mockSimilarProjects = [
    {
      id: 1,
      title: "AI-Powered Inventory Management",
      client: "RetailTech Solutions",
      industry: "E-Commerce",
      duration: "4 months",
      budget: "$75K",
      match: 95
    },
    {
      id: 2,
      title: "Automated Customer Service Platform",
      client: "ServiceFirst Inc",
      industry: "FinTech",
      duration: "6 months",
      budget: "$120K",
      match: 87
    },
    {
      id: 3,
      title: "Smart Analytics Dashboard",
      client: "DataDriven Corp",
      industry: "Healthcare",
      duration: "3 months",
      budget: "$45K",
      match: 82
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFindSimilarProjects = () => {
    if (!formData?.projectType || !formData?.industry) {
      return;
    }

    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setSimilarProjects(mockSimilarProjects);
      setIsSearching(false);
    }, 1500);
  };

  const handleSubmitRequest = () => {
    // Handle form submission
    console.log('Project request submitted:', formData);
    alert('Thank you! We\'ll contact you within 24 hours with similar project examples and a custom proposal.');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Widget Toggle Button */}
      {!isExpanded && (
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-floating animate-pulse-subtle"
          iconName="Plus"
          iconPosition="left"
        >
          Request Similar Project
        </Button>
      )}
      {/* Expanded Widget */}
      {isExpanded && (
        <div className="bg-card border border-border rounded-xl shadow-floating w-96 max-h-[80vh] overflow-hidden">
          {/* Widget Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Search" size={16} className="text-accent" />
              </div>
              <h3 className="font-semibold text-card-foreground">Find Similar Projects</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              iconName="X"
              className="text-muted-foreground hover:text-card-foreground"
            />
          </div>

          {/* Widget Content */}
          <div className="p-4 overflow-y-auto max-h-[60vh]">
            <p className="text-sm text-muted-foreground mb-4">
              Describe your project needs and instantly see similar work we've completed for other clients.
            </p>

            {/* Form Fields */}
            <div className="space-y-4">
              <Select
                label="Project Type"
                options={projectTypeOptions}
                value={formData?.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                required
              />

              <Select
                label="Industry"
                options={industryOptions}
                value={formData?.industry}
                onChange={(value) => handleInputChange('industry', value)}
                required
              />

              <div className="grid grid-cols-2 gap-3">
                <Select
                  label="Budget Range"
                  options={budgetOptions}
                  value={formData?.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                />

                <Select
                  label="Timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                />
              </div>

              <Input
                label="Project Description"
                type="text"
                placeholder="Brief description of your project..."
                value={formData?.description}
                onChange={(e) => handleInputChange('description', e?.target?.value)}
              />

              {/* Search Button */}
              <Button
                onClick={handleFindSimilarProjects}
                loading={isSearching}
                disabled={!formData?.projectType || !formData?.industry}
                iconName="Search"
                iconPosition="left"
                fullWidth
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Find Similar Projects
              </Button>
            </div>

            {/* Similar Projects Results */}
            {similarProjects?.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="font-medium text-card-foreground mb-3">Similar Projects Found</h4>
                <div className="space-y-3">
                  {similarProjects?.map((project) => (
                    <div key={project?.id} className="p-3 bg-surface rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-card-foreground text-sm line-clamp-1">
                          {project?.title}
                        </h5>
                        <span className="text-xs text-success font-medium">
                          {project?.match}% match
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <span>Client: {project?.client}</span>
                        <span>Duration: {project?.duration}</span>
                        <span>Industry: {project?.industry}</span>
                        <span>Budget: {project?.budget}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <div className="mt-4 pt-4 border-t border-border space-y-3">
                  <Input
                    label="Your Email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    required
                  />

                  <Input
                    label="Company Name"
                    type="text"
                    placeholder="Your company name"
                    value={formData?.company}
                    onChange={(e) => handleInputChange('company', e?.target?.value)}
                  />

                  <Button
                    onClick={handleSubmitRequest}
                    disabled={!formData?.email}
                    iconName="Send"
                    iconPosition="left"
                    fullWidth
                    className="bg-success hover:bg-success/90 text-success-foreground"
                  >
                    Get Custom Proposal
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectRequestWidget;