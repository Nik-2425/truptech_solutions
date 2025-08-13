import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      expertise: "AI Strategy, Digital Transformation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in enterprise technology solutions. Led digital transformation initiatives for Fortune 500 companies across 3 continents.",
      certifications: ["AWS Solutions Architect", "Google Cloud Professional", "PMP"],
      projects: ["Global Banking AI Platform", "Manufacturing IoT System", "Healthcare Analytics Dashboard"],
      languages: ["English", "Hindi", "Spanish"]
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      expertise: "Full-Stack Development, Cloud Architecture",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google engineer with expertise in scalable systems. Passionate about making complex technology accessible to everyone.",
      certifications: ["Kubernetes Certified", "React Expert", "Azure Architect"],
      projects: ["E-commerce Platform (8 Countries)", "Real-time Analytics Engine", "Mobile Banking App"],
      languages: ["English", "Mandarin", "Japanese"]
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Head of AI Solutions",
      expertise: "Machine Learning, Data Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Computer Science, specializing in practical AI applications. Believes in AI that augments human capabilities rather than replacing them.",
      certifications: ["TensorFlow Developer", "AWS ML Specialty", "Data Science Professional"],
      projects: ["Predictive Maintenance System", "Customer Behavior Analytics", "Automated Quality Control"],
      languages: ["English", "Spanish", "Portuguese"]
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Head of Client Success",
      expertise: "Project Management, Cultural Intelligence",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in cross-cultural communication and project delivery. Ensures every client feels understood and supported throughout their journey.",
      certifications: ["Scrum Master", "Cultural Intelligence", "Six Sigma Black Belt"],
      projects: ["Multi-country Deployment", "Cultural Adaptation Framework", "Client Onboarding System"],
      languages: ["English", "Hindi", "French", "German"]
    },
    {
      id: 5,
      name: "David Kim",
      role: "Security & Compliance Lead",
      expertise: "Cybersecurity, Data Privacy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Former cybersecurity consultant with deep expertise in international compliance standards. Ensures all solutions meet the highest security standards.",
      certifications: ["CISSP", "GDPR Specialist", "ISO 27001 Lead Auditor"],
      projects: ["GDPR Compliance Framework", "Zero-Trust Architecture", "Security Audit Platform"],
      languages: ["English", "Korean", "Japanese"]
    },
    {
      id: 6,
      name: "Emma Thompson",
      role: "UX/UI Design Lead",
      expertise: "User Experience, Design Systems",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer focused on creating intuitive interfaces that make complex technology feel simple and approachable.",
      certifications: ["Google UX Design", "Adobe Certified Expert", "Design Thinking Facilitator"],
      projects: ["Enterprise Dashboard Redesign", "Mobile App UX Overhaul", "Accessibility Compliance"],
      languages: ["English", "French", "Italian"]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Team</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            The Humans Behind the Technology
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the diverse team of experts who bring together technical excellence, cultural intelligence, and genuine care for client success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers?.map((member) => (
            <div 
              key={member?.id} 
              className="bg-card rounded-xl p-6 shadow-subtle hover-lift cursor-pointer transition-all duration-300"
              onClick={() => setSelectedMember(member)}
            >
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Star" size={16} color="white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member?.name}
                </h3>
                
                <p className="text-accent font-medium mb-2">
                  {member?.role}
                </p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {member?.expertise}
                </p>
                
                <div className="flex flex-wrap gap-1 justify-center">
                  {member?.languages?.slice(0, 2)?.map((lang, index) => (
                    <span key={index} className="text-xs bg-surface px-2 py-1 rounded-full text-muted-foreground">
                      {lang}
                    </span>
                  ))}
                  {member?.languages?.length > 2 && (
                    <span className="text-xs bg-surface px-2 py-1 rounded-full text-muted-foreground">
                      +{member?.languages?.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-card rounded-xl p-6 shadow-subtle">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={20} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-subtle">
            <div className="w-12 h-12 bg-trust-builder/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Globe" size={20} className="text-trust-builder" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-subtle">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Briefcase" size={20} className="text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Years Combined Experience</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-subtle">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={20} className="text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
        </div>
      </div>
      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={selectedMember?.image}
                    alt={selectedMember?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{selectedMember?.name}</h3>
                    <p className="text-accent font-medium">{selectedMember?.role}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-2 hover:bg-surface rounded-lg transition-colors"
                >
                  <Icon name="X" size={20} className="text-muted-foreground" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMember?.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.certifications?.map((cert, index) => (
                      <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Projects</h4>
                  <div className="space-y-2">
                    {selectedMember?.projects?.map((project, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-muted-foreground text-sm">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.languages?.map((lang, index) => (
                      <span key={index} className="bg-surface text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;