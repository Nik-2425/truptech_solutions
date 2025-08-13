import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamExpertise = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "AI & Machine Learning Director",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      expertise: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision"],
      experience: "12+ years",
      certifications: ["Google Cloud ML Engineer", "AWS ML Specialty", "Microsoft AI Engineer"],
      languages: ["English", "Mandarin", "Python", "TensorFlow"],
      timezone: "PST (UTC-8)",
      availability: "Mon-Fri 9AM-6PM PST",
      specialties: [
        "Custom AI model development",
        "Natural Language Processing",
        "Predictive analytics implementation",
        "AI strategy consulting"
      ],
      recentProjects: [
        "Healthcare diagnostic AI system",
        "Financial fraud detection model",
        "Customer behavior prediction engine"
      ],
      bio: `Dr. Sarah Chen leads our AI initiatives with over 12 years of experience in machine learning and artificial intelligence. She has published 25+ research papers and holds 3 patents in AI technology. Sarah specializes in translating complex AI concepts into practical business solutions.`
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Cloud Architecture Lead",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Cloud Architecture", "DevOps", "Kubernetes", "Microservices"],
      experience: "10+ years",
      certifications: ["AWS Solutions Architect", "Azure Solutions Architect", "GCP Professional"],
      languages: ["English", "Spanish", "Docker", "Terraform"],
      timezone: "EST (UTC-5)",
      availability: "Mon-Fri 8AM-7PM EST",
      specialties: [
        "Cloud migration strategies",
        "Scalable infrastructure design",
        "Container orchestration",
        "Cost optimization"
      ],
      recentProjects: [
        "Multi-cloud enterprise migration",
        "Kubernetes-based microservices platform",
        "Serverless application architecture"
      ],
      bio: `Marcus brings a decade of cloud expertise to help businesses modernize their infrastructure. He has successfully migrated 100+ applications to the cloud and designed scalable architectures for Fortune 500 companies.`
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Automation & Integration Specialist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      expertise: ["Process Automation", "API Integration", "RPA", "Workflow Optimization"],
      experience: "8+ years",
      certifications: ["UiPath Advanced Developer", "Microsoft Power Platform", "Zapier Expert"],
      languages: ["English", "Hindi", "JavaScript", "Python"],
      timezone: "IST (UTC+5:30)",
      availability: "Mon-Sat 9AM-8PM IST",
      specialties: [
        "Business process automation",
        "Legacy system integration",
        "Workflow optimization",
        "Custom API development"
      ],
      recentProjects: [
        "ERP integration for manufacturing",
        "Customer service automation",
        "Financial reporting automation"
      ],
      bio: `Priya specializes in automating complex business processes and integrating disparate systems. She has helped 200+ businesses eliminate manual work and improve operational efficiency by up to 70%.`
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Cybersecurity Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Cybersecurity", "Compliance", "Risk Assessment", "Security Architecture"],
      experience: "15+ years",
      certifications: ["CISSP", "CISM", "CEH", "ISO 27001 Lead Auditor"],
      languages: ["English", "French", "Security Frameworks"],
      timezone: "GMT (UTC+0)",
      availability: "Mon-Fri 9AM-6PM GMT",
      specialties: [
        "Security risk assessments",
        "Compliance framework implementation",
        "Incident response planning",
        "Security architecture design"
      ],
      recentProjects: [
        "GDPR compliance implementation",
        "Zero-trust security architecture",
        "SOC 2 certification program"
      ],
      bio: `James brings 15 years of cybersecurity expertise to protect businesses from evolving threats. He has secured infrastructure for government agencies and Fortune 100 companies, specializing in compliance and risk management.`
    },
    {
      id: 5,
      name: "Elena Kowalski",
      role: "Full-Stack Development Lead",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      expertise: ["Full-Stack Development", "React", "Node.js", "Database Design"],
      experience: "9+ years",
      certifications: ["AWS Developer Associate", "MongoDB Certified", "React Expert"],
      languages: ["English", "Polish", "JavaScript", "TypeScript"],
      timezone: "CET (UTC+1)",
      availability: "Mon-Fri 8AM-6PM CET",
      specialties: [
        "Custom web application development",
        "API design and development",
        "Database optimization",
        "Performance tuning"
      ],
      recentProjects: [
        "E-commerce platform development",
        "Real-time collaboration tool",
        "Data visualization dashboard"
      ],
      bio: `Elena leads our full-stack development team with expertise in modern web technologies. She has built 50+ web applications and specializes in creating scalable, user-friendly solutions for complex business requirements.`
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Data Analytics Consultant",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Data Analytics", "Business Intelligence", "Data Visualization", "Statistical Analysis"],
      experience: "11+ years",
      certifications: ["Tableau Desktop Specialist", "Power BI Expert", "Google Analytics"],
      languages: ["English", "Arabic", "SQL", "Python"],
      timezone: "GST (UTC+4)",
      availability: "Sun-Thu 9AM-7PM GST",
      specialties: [
        "Business intelligence solutions",
        "Data warehouse design",
        "Advanced analytics",
        "Reporting automation"
      ],
      recentProjects: [
        "Customer analytics platform",
        "Supply chain optimization model",
        "Marketing ROI dashboard"
      ],
      bio: `Ahmed transforms raw data into actionable business insights. With 11 years of experience in data analytics, he has helped 150+ companies make data-driven decisions and improve their bottom line through advanced analytics.`
    }
  ];

  const handleExpertSelect = (expert) => {
    setSelectedExpert(expert);
  };

  const handleRequestConsultation = (expert) => {
    alert(`Consultation request sent to ${expert?.name}!\n\nYou'll receive a response within 2 hours to schedule your consultation. We'll match you with ${expert?.name} based on your project requirements and timezone preferences.`);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Technology Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with the right expert for your project. Our team spans multiple time zones and specializes in various technology domains to serve your global needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Expert Cards */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {experts?.map((expert) => (
                <div
                  key={expert?.id}
                  className={`bg-card rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                    selectedExpert?.id === expert?.id
                      ? 'border-accent shadow-lg'
                      : 'border-border hover:border-accent/50'
                  }`}
                  onClick={() => handleExpertSelect(expert)}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image
                        src={expert?.avatar}
                        alt={expert?.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {expert?.name}
                    </h3>
                    <p className="text-accent font-medium mb-2">{expert?.role}</p>
                    <p className="text-sm text-muted-foreground">{expert?.experience} experience</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {expert?.expertise?.slice(0, 3)?.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                      {expert?.expertise?.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          +{expert?.expertise?.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-4 text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-muted-foreground">Timezone:</span>
                      <span className="font-medium text-foreground">{expert?.timezone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="font-medium text-foreground">{expert?.availability}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant={selectedExpert?.id === expert?.id ? 'default' : 'outline'}
                    size="sm"
                    fullWidth
                    onClick={(e) => {
                      e?.stopPropagation();
                      handleRequestConsultation(expert);
                    }}
                    iconName="Calendar"
                    iconPosition="left"
                    className={selectedExpert?.id === expert?.id ? 'bg-accent hover:bg-accent/90' : ''}
                  >
                    Request Consultation
                  </Button>

                  {/* Selection Indicator */}
                  {selectedExpert?.id === expert?.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Expert Details Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border sticky top-6">
              {selectedExpert ? (
                <div>
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      <Image
                        src={selectedExpert?.avatar}
                        alt={selectedExpert?.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-success rounded-full border-2 border-card flex items-center justify-center">
                        <Icon name="Check" size={16} color="white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {selectedExpert?.name}
                    </h3>
                    <p className="text-accent font-medium">{selectedExpert?.role}</p>
                  </div>

                  <div className="space-y-6">
                    {/* Bio */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">About</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedExpert?.bio}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Specialties</h4>
                      <ul className="space-y-1">
                        {selectedExpert?.specialties?.map((specialty, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <Icon name="CheckCircle" size={12} className="text-success mr-2 flex-shrink-0" />
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExpert?.certifications?.map((cert, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Projects */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recent Projects</h4>
                      <ul className="space-y-1">
                        {selectedExpert?.recentProjects?.map((project, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <Icon name="Briefcase" size={12} className="text-accent mr-2 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Actions */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <Button
                        variant="default"
                        size="sm"
                        fullWidth
                        onClick={() => handleRequestConsultation(selectedExpert)}
                        iconName="Calendar"
                        iconPosition="left"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        Book Consultation
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        iconName="MessageCircle"
                        iconPosition="left"
                      >
                        Quick Chat
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Users" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Select an Expert
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Click on any expert card to see detailed information and book a consultation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExpertise;