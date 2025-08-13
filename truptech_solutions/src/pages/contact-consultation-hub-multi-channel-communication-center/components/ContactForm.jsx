import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = ({ selectedChannel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredTime: '',
    timezone: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: 'ai-solutions', label: 'AI Solutions & Machine Learning' },
    { value: 'automation', label: 'Business Process Automation' },
    { value: 'web-development', label: 'Web Application Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'cloud-migration', label: 'Cloud Migration & Infrastructure' },
    { value: 'data-analytics', label: 'Data Analytics & Visualization' },
    { value: 'cybersecurity', label: 'Cybersecurity Solutions' },
    { value: 'consulting', label: 'Technology Consulting' },
    { value: 'other', label: 'Other / Not Sure' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: 'over-250k', label: 'Over $250,000' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (Within 1 month)' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'flexible', label: 'Flexible timeline' },
    { value: 'planning', label: 'Still in planning phase' }
  ];

  const timezones = [
    { value: 'est', label: 'Eastern Time (EST/EDT)' },
    { value: 'cst', label: 'Central Time (CST/CDT)' },
    { value: 'mst', label: 'Mountain Time (MST/MDT)' },
    { value: 'pst', label: 'Pacific Time (PST/PDT)' },
    { value: 'utc', label: 'UTC/GMT' },
    { value: 'ist', label: 'India Standard Time (IST)' },
    { value: 'cet', label: 'Central European Time (CET)' },
    { value: 'jst', label: 'Japan Standard Time (JST)' },
    { value: 'other', label: 'Other timezone' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.company?.trim()) newErrors.company = 'Company name is required';
    if (!formData?.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData?.message?.trim()) newErrors.message = 'Please describe your project requirements';
    if (!formData?.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success handling
      alert(`Thank you ${formData?.firstName}! Your inquiry has been submitted successfully. We'll contact you via ${selectedChannel?.name || 'your preferred method'} within ${selectedChannel?.responseTime || '24 hours'}.`);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        preferredTime: '',
        timezone: '',
        agreeToTerms: false,
        subscribeNewsletter: false
      });
    } catch (error) {
      alert('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tell Us About Your Project
          </h2>
          <p className="text-lg text-muted-foreground">
            The more details you provide, the better we can tailor our response to your specific needs.
          </p>
          {selectedChannel && (
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent rounded-full px-4 py-2 mt-4">
              <Icon name={selectedChannel?.icon} size={16} />
              <span className="text-sm font-medium">
                We'll respond via {selectedChannel?.name} {selectedChannel?.responseTime}
              </span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border shadow-subtle">
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Icon name="User" size={20} className="mr-2 text-accent" />
              Personal Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                error={errors?.firstName}
                required
              />
              
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                error={errors?.lastName}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                description="We'll use this for project updates and communication"
                required
              />
              
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                description="Include country code for international numbers"
                required
              />
            </div>

            <div className="mt-6">
              <Input
                label="Company Name"
                type="text"
                placeholder="Your company or organization"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
                error={errors?.company}
                required
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Icon name="Briefcase" size={20} className="mr-2 text-accent" />
              Project Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Project Type"
                placeholder="Select your project type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                error={errors?.projectType}
                searchable
                required
              />
              
              <Select
                label="Budget Range"
                placeholder="Select your budget range"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                description="This helps us recommend the best approach"
              />
            </div>

            <div className="mt-6">
              <Select
                label="Project Timeline"
                placeholder="When do you need this completed?"
                options={timelines}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                description="We can work with flexible timelines"
              />
            </div>

            <div className="mt-6">
              <Input
                label="Project Description"
                type="text"
                placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
                error={errors?.message}
                description="The more details you provide, the better we can help you"
                required
                className="min-h-32"
              />
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Icon name="Clock" size={20} className="mr-2 text-accent" />
              Communication Preferences
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Preferred Contact Time"
                type="text"
                placeholder="e.g., Weekdays 9 AM - 5 PM"
                value={formData?.preferredTime}
                onChange={(e) => handleInputChange('preferredTime', e?.target?.value)}
                description="When is the best time to reach you?"
              />
              
              <Select
                label="Your Timezone"
                placeholder="Select your timezone"
                options={timezones}
                value={formData?.timezone}
                onChange={(value) => handleInputChange('timezone', value)}
                description="Helps us schedule calls at convenient times"
                searchable
              />
            </div>
          </div>

          {/* Agreements */}
          <div className="mb-8 space-y-4">
            <Checkbox
              label="I agree to the Terms of Service and Privacy Policy"
              checked={formData?.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
              error={errors?.agreeToTerms}
              required
            />
            
            <Checkbox
              label="Subscribe to our newsletter for technology insights and updates"
              description="Get monthly insights on AI, automation, and technology trends (optional)"
              checked={formData?.subscribeNewsletter}
              onChange={(e) => handleInputChange('subscribeNewsletter', e?.target?.checked)}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="default"
              size="lg"
              loading={isSubmitting}
              iconName="Send"
              iconPosition="right"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12"
            >
              {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              We typically respond within {selectedChannel?.responseTime || '24 hours'}. 
              For urgent matters, please use WhatsApp or call us directly.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;