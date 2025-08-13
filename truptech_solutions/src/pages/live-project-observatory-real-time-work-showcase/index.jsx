import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import InnovationLab from './components/InnovationLab';
import ProjectRequestWidget from './components/ProjectRequestWidget';
import StatsOverview from './components/StatsOverview';

const LiveProjectObservatory = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    technology: 'all',
    status: 'all',
    scale: 'all'
  });
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Financial Analytics Platform",
      description: "Comprehensive financial analytics solution with real-time market data processing and predictive modeling capabilities for investment decisions.",
      fullDescription: "A sophisticated financial analytics platform that leverages artificial intelligence to process vast amounts of market data in real-time. The system provides predictive modeling capabilities, risk assessment tools, and automated trading recommendations. Built with scalability in mind, it handles millions of transactions per second while maintaining sub-millisecond response times.",
      clientName: "FinanceFlow Inc",
      clientCountry: "United States",
      clientFlag: "https://flagcdn.com/w40/us.png",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      status: "in-progress",
      progress: 75,
      duration: "8 months",
      teamSize: "12 members",
      budget: "$450K",
      industry: "fintech",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "AWS"],
      achievements: [
        "Reduced data processing time by 85%",
        "Improved prediction accuracy to 94.2%",
        "Processed over 10M transactions daily",
        "Achieved 99.9% system uptime"
      ],
      keyFeatures: [
        "Real-time market data processing",
        "Advanced predictive modeling",
        "Risk assessment algorithms",
        "Automated trading recommendations",
        "Multi-currency support",
        "Regulatory compliance tools"
      ],
      timeline: [
        {
          title: "Project Kickoff & Requirements Analysis",
          description: "Initial stakeholder meetings and technical requirements gathering",
          date: "Jan 2024",
          completed: true
        },
        {
          title: "System Architecture Design",
          description: "Designed scalable microservices architecture",
          date: "Feb 2024",
          completed: true
        },
        {
          title: "Core AI Engine Development",
          description: "Built machine learning models for financial predictions",
          date: "Mar 2024",
          completed: true
        },
        {
          title: "Frontend Dashboard Implementation",
          description: "Developed responsive user interface with real-time charts",
          date: "Apr 2024",
          completed: false
        },
        {
          title: "Integration & Testing Phase",
          description: "System integration and comprehensive testing",
          date: "May 2024",
          completed: false
        }
      ],
      teamMembers: [
        {
          name: "Sarah Chen",
          role: "Project Manager",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
          name: "Michael Rodriguez",
          role: "AI Engineer",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          name: "Emily Johnson",
          role: "Frontend Developer",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          name: "David Kim",
          role: "Backend Developer",
          avatar: "https://randomuser.me/api/portraits/men/2.jpg"
        }
      ],
      testimonial: {
        content: "TrupTECH has exceeded our expectations with their AI-powered analytics platform. The real-time processing capabilities and predictive accuracy have transformed our investment strategies.",
        author: "James Wilson",
        position: "CTO, FinanceFlow Inc",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg"
      },
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      title: "Smart Healthcare Management System",
      description: "Integrated healthcare platform with patient management, appointment scheduling, and telemedicine capabilities powered by AI diagnostics.",
      fullDescription: "A comprehensive healthcare management system that streamlines patient care through intelligent automation. The platform integrates electronic health records, appointment scheduling, telemedicine consultations, and AI-powered diagnostic assistance. It ensures HIPAA compliance while providing healthcare providers with actionable insights to improve patient outcomes.",
      clientName: "MedCare Solutions",
      clientCountry: "Canada",
      clientFlag: "https://flagcdn.com/w40/ca.png",
      clientLogo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center",
      status: "completed",
      progress: 100,
      duration: "6 months",
      teamSize: "8 members",
      budget: "$280K",
      industry: "healthcare",
      technologies: ["Node.js", "React", "MongoDB", "WebRTC", "TensorFlow", "Azure"],
      achievements: [
        "Reduced appointment scheduling time by 70%",
        "Improved patient satisfaction by 45%",
        "Enabled 24/7 telemedicine consultations",
        "Achieved HIPAA compliance certification"
      ],
      keyFeatures: [
        "Electronic Health Records (EHR)",
        "AI-powered diagnostic assistance",
        "Telemedicine video consultations",
        "Automated appointment scheduling",
        "Patient portal with mobile app",
        "Insurance claim processing"
      ],
      timeline: [
        {
          title: "Requirements & Compliance Analysis",
          description: "Healthcare regulations and HIPAA compliance requirements",
          date: "Aug 2023",
          completed: true
        },
        {
          title: "System Design & Architecture",
          description: "Secure, scalable healthcare system architecture",
          date: "Sep 2023",
          completed: true
        },
        {
          title: "Core Platform Development",
          description: "EHR system and patient management features",
          date: "Oct 2023",
          completed: true
        },
        {
          title: "Telemedicine Integration",
          description: "Video consultation and AI diagnostic tools",
          date: "Nov 2023",
          completed: true
        },
        {
          title: "Testing & Deployment",
          description: "Security testing and production deployment",
          date: "Dec 2023",
          completed: true
        }
      ],
      teamMembers: [
        {
          name: "Dr. Lisa Park",
          role: "Healthcare Consultant",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
          name: "Robert Taylor",
          role: "Full Stack Developer",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          name: "Maria Garcia",
          role: "UI/UX Designer",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
          name: "Alex Thompson",
          role: "DevOps Engineer",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg"
        }
      ],
      testimonial: {
        content: "The healthcare management system has revolutionized our practice. Patient care has improved significantly, and our staff can focus more on patients rather than administrative tasks.",
        author: "Dr. Jennifer Adams",
        position: "Chief Medical Officer, MedCare Solutions",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg"
      },
      lastUpdated: "1 day ago"
    },
    {
      id: 3,
      title: "E-Commerce Automation Suite",
      description: "Complete e-commerce automation platform with inventory management, order processing, and customer service chatbot integration.",
      fullDescription: "An end-to-end e-commerce automation suite that transforms online retail operations. The platform automates inventory management, order processing, customer communications, and provides intelligent analytics for business optimization. Features include multi-channel integration, automated pricing strategies, and AI-powered customer service.",
      clientName: "RetailMax Global",
      clientCountry: "United Kingdom",
      clientFlag: "https://flagcdn.com/w40/gb.png",
      clientLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
      status: "in-progress",
      progress: 60,
      duration: "10 months",
      teamSize: "15 members",
      budget: "$650K",
      industry: "e-commerce",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Redis", "Kubernetes"],
      achievements: [
        "Automated 90% of order processing",
        "Reduced inventory costs by 35%",
        "Improved customer response time by 80%",
        "Increased sales conversion by 25%"
      ],
      keyFeatures: [
        "Multi-channel inventory synchronization",
        "Automated order fulfillment",
        "AI-powered customer service chatbot",
        "Dynamic pricing optimization",
        "Advanced analytics dashboard",
        "Third-party marketplace integration"
      ],
      timeline: [
        {
          title: "Business Process Analysis",
          description: "Analyzed existing e-commerce workflows and pain points",
          date: "Oct 2023",
          completed: true
        },
        {
          title: "Platform Architecture Design",
          description: "Designed scalable microservices architecture",
          date: "Nov 2023",
          completed: true
        },
        {
          title: "Inventory Management Module",
          description: "Built automated inventory tracking and management",
          date: "Dec 2023",
          completed: true
        },
        {
          title: "Order Processing Automation",
          description: "Implementing automated order fulfillment workflows",
          date: "Jan 2024",
          completed: false
        },
        {
          title: "Customer Service Integration",
          description: "AI chatbot and customer communication tools",
          date: "Feb 2024",
          completed: false
        }
      ],
      teamMembers: [
        {
          name: "Thomas Anderson",
          role: "Technical Lead",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          name: "Sophie Williams",
          role: "Business Analyst",
          avatar: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
          name: "Carlos Martinez",
          role: "Backend Developer",
          avatar: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        {
          name: "Anna Kowalski",
          role: "Frontend Developer",
          avatar: "https://randomuser.me/api/portraits/women/6.jpg"
        }
      ],
      testimonial: {
        content: "The automation suite has streamlined our entire operation. We're processing 3x more orders with the same team size, and customer satisfaction has never been higher.",
        author: "Mark Thompson",
        position: "Operations Director, RetailMax Global",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg"
      },
      lastUpdated: "4 hours ago"
    },
    {
      id: 4,
      title: "Manufacturing IoT Analytics Platform",
      description: "Industrial IoT platform for real-time equipment monitoring, predictive maintenance, and production optimization in manufacturing facilities.",
      fullDescription: "A comprehensive Industrial IoT platform that connects manufacturing equipment to provide real-time monitoring, predictive maintenance alerts, and production optimization insights. The system processes sensor data from hundreds of machines, uses machine learning to predict equipment failures, and optimizes production schedules for maximum efficiency.",
      clientName: "IndustrialTech Corp",
      clientCountry: "Germany",
      clientFlag: "https://flagcdn.com/w40/de.png",
      clientLogo: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=100&h=100&fit=crop&crop=center",
      status: "completed",
      progress: 100,
      duration: "12 months",
      teamSize: "18 members",
      budget: "$850K",
      industry: "manufacturing",
      technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "TensorFlow", "Docker"],
      achievements: [
        "Reduced equipment downtime by 60%",
        "Improved production efficiency by 40%",
        "Prevented 95% of potential equipment failures",
        "Saved $2.3M in maintenance costs annually"
      ],
      keyFeatures: [
        "Real-time equipment monitoring",
        "Predictive maintenance algorithms",
        "Production optimization engine",
        "Energy consumption tracking",
        "Quality control automation",
        "Comprehensive reporting dashboard"
      ],
      timeline: [
        {
          title: "Industrial Assessment & Planning",
          description: "Analyzed manufacturing processes and IoT requirements",
          date: "Jan 2023",
          completed: true
        },
        {
          title: "IoT Infrastructure Setup",
          description: "Installed sensors and communication networks",
          date: "Mar 2023",
          completed: true
        },
        {
          title: "Data Processing Pipeline",
          description: "Built real-time data ingestion and processing system",
          date: "Jun 2023",
          completed: true
        },
        {
          title: "Machine Learning Models",
          description: "Developed predictive maintenance algorithms",
          date: "Sep 2023",
          completed: true
        },
        {
          title: "Dashboard & Deployment",
          description: "Created monitoring dashboards and deployed system",
          date: "Dec 2023",
          completed: true
        }
      ],
      teamMembers: [
        {
          name: "Hans Mueller",
          role: "IoT Architect",
          avatar: "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
          name: "Elena Petrov",
          role: "Data Scientist",
          avatar: "https://randomuser.me/api/portraits/women/7.jpg"
        },
        {
          name: "James Wilson",
          role: "Systems Engineer",
          avatar: "https://randomuser.me/api/portraits/men/8.jpg"
        },
        {
          name: "Isabella Romano",
          role: "Industrial Engineer",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg"
        }
      ],
      testimonial: {
        content: "This IoT platform has transformed our manufacturing operations. We now have complete visibility into our production processes and can prevent issues before they occur.",
        author: "Klaus Weber",
        position: "Plant Manager, IndustrialTech Corp",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg"
      },
      lastUpdated: "3 days ago"
    },
    {
      id: 5,
      title: "Educational Learning Management System",
      description: "Comprehensive LMS with AI-powered personalized learning paths, virtual classrooms, and advanced analytics for educational institutions.",
      fullDescription: "A next-generation Learning Management System that personalizes education through AI-driven learning paths. The platform supports virtual classrooms, interactive content delivery, automated grading, and provides detailed analytics on student performance. It's designed to enhance both in-person and remote learning experiences.",
      clientName: "EduTech University",
      clientCountry: "Australia",
      clientFlag: "https://flagcdn.com/w40/au.png",
      clientLogo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop&crop=center",
      status: "planning",
      progress: 15,
      duration: "14 months",
      teamSize: "10 members",
      budget: "$420K",
      industry: "education",
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "TensorFlow", "AWS"],
      achievements: [
        "Designed adaptive learning algorithms",
        "Planned multi-tenant architecture",
        "Completed user experience research",
        "Established technical requirements"
      ],
      keyFeatures: [
        "AI-powered personalized learning paths",
        "Virtual classroom with video conferencing",
        "Interactive content authoring tools",
        "Automated assignment grading",
        "Student performance analytics",
        "Mobile learning application"
      ],
      timeline: [
        {
          title: "Educational Requirements Analysis",
          description: "Analyzed learning objectives and institutional needs",
          date: "Dec 2023",
          completed: true
        },
        {
          title: "System Architecture Design",
          description: "Designing scalable multi-tenant LMS architecture",
          date: "Jan 2024",
          completed: false
        },
        {
          title: "AI Learning Engine Development",
          description: "Building personalized learning recommendation system",
          date: "Mar 2024",
          completed: false
        },
        {
          title: "Virtual Classroom Implementation",
          description: "Developing video conferencing and collaboration tools",
          date: "Jun 2024",
          completed: false
        },
        {
          title: "Testing & Pilot Deployment",
          description: "User testing and pilot program with select courses",
          date: "Oct 2024",
          completed: false
        }
      ],
      teamMembers: [
        {
          name: "Rachel Green",
          role: "Education Technology Consultant",
          avatar: "https://randomuser.me/api/portraits/women/9.jpg"
        },
        {
          name: "Andrew Davis",
          role: "Full Stack Developer",
          avatar: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
          name: "Priya Sharma",
          role: "AI/ML Engineer",
          avatar: "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
          name: "Oliver Brown",
          role: "UX Designer",
          avatar: "https://randomuser.me/api/portraits/men/11.jpg"
        }
      ],
      testimonial: {
        content: "We\'re excited about the innovative approach TrupTECH is taking with our LMS. The AI-powered personalization will revolutionize how our students learn.",
        author: "Dr. Margaret Foster",
        position: "Dean of Digital Learning, EduTech University",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg"
      },
      lastUpdated: "1 week ago"
    },
    {
      id: 6,
      title: "Real Estate CRM & Analytics Platform",
      description: "Comprehensive real estate management platform with property listings, client relationship management, and market analytics powered by AI.",
      fullDescription: "A sophisticated real estate platform that combines customer relationship management with advanced property analytics. The system manages property listings, automates lead generation, provides market insights, and includes virtual property tours. AI algorithms analyze market trends and provide pricing recommendations.",
      clientName: "PropertyPro Realty",
      clientCountry: "United States",
      clientFlag: "https://flagcdn.com/w40/us.png",
      clientLogo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop&crop=center",
      status: "in-progress",
      progress: 40,
      duration: "9 months",
      teamSize: "11 members",
      budget: "$380K",
      industry: "real-estate",
      technologies: ["Vue.js", "Laravel", "MySQL", "Elasticsearch", "TensorFlow", "Google Cloud"],
      achievements: [
        "Integrated MLS data feeds",
        "Built property search algorithms",
        "Implemented virtual tour system",
        "Created lead scoring model"
      ],
      keyFeatures: [
        "Advanced property search and filtering",
        "Virtual property tours with 360° views",
        "AI-powered property valuation",
        "Lead management and scoring",
        "Market trend analysis",
        "Automated marketing campaigns"
      ],
      timeline: [
        {
          title: "Market Research & Requirements",
          description: "Analyzed real estate market needs and user requirements",
          date: "Sep 2023",
          completed: true
        },
        {
          title: "Platform Foundation Development",
          description: "Built core CRM and property management features",
          date: "Nov 2023",
          completed: true
        },
        {
          title: "AI Analytics Integration",
          description: "Implementing market analysis and pricing algorithms",
          date: "Jan 2024",
          completed: false
        },
        {
          title: "Virtual Tour Implementation",
          description: "Adding 360° property viewing capabilities",
          date: "Mar 2024",
          completed: false
        },
        {
          title: "Mobile App & Final Testing",
          description: "Mobile application development and system testing",
          date: "May 2024",
          completed: false
        }
      ],
      teamMembers: [
        {
          name: "Jennifer Lopez",
          role: "Real Estate Domain Expert",
          avatar: "https://randomuser.me/api/portraits/women/13.jpg"
        },
        {
          name: "Ryan Mitchell",
          role: "Full Stack Developer",
          avatar: "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
          name: "Lisa Wang",
          role: "Data Analyst",
          avatar: "https://randomuser.me/api/portraits/women/14.jpg"
        },
        {
          name: "Marcus Johnson",
          role: "Mobile Developer",
          avatar: "https://randomuser.me/api/portraits/men/15.jpg"
        }
      ],
      testimonial: {
        content: "The platform is already showing great promise. Our agents love the AI-powered insights, and clients are impressed with the virtual tour capabilities.",
        author: "Robert Chen",
        position: "CEO, PropertyPro Realty",
        avatar: "https://randomuser.me/api/portraits/men/16.jpg"
      },
      lastUpdated: "6 hours ago"
    }
  ];

  // Filter projects based on current filters
  useEffect(() => {
    let filtered = projects;

    if (filters?.industry !== 'all') {
      filtered = filtered?.filter(project => project?.industry === filters?.industry);
    }

    if (filters?.technology !== 'all') {
      filtered = filtered?.filter(project => {
        const techMap = {
          'ai-implementation': ['TensorFlow', 'Python', 'Machine Learning'],
          'automation-deployment': ['Docker', 'Kubernetes', 'Jenkins'],
          'custom-development': ['React', 'Node.js', 'Vue.js', 'Laravel'],
          'cloud-migration': ['AWS', 'Azure', 'Google Cloud'],
          'mobile-development': ['React Native', 'Flutter', 'Swift'],
          'web-development': ['React', 'Angular', 'Vue.js']
        };
        
        const relevantTechs = techMap?.[filters?.technology] || [];
        return project?.technologies?.some(tech => 
          relevantTechs?.some(relevantTech => tech?.includes(relevantTech))
        );
      });
    }

    if (filters?.status !== 'all') {
      filtered = filtered?.filter(project => project?.status === filters?.status);
    }

    if (filters?.scale !== 'all') {
      filtered = filtered?.filter(project => {
        const budget = parseInt(project?.budget?.replace(/[^0-9]/g, ''));
        switch (filters?.scale) {
          case 'small':
            return budget < 50;
          case 'medium':
            return budget >= 50 && budget < 200;
          case 'large':
            return budget >= 200 && budget < 500;
          case 'enterprise':
            return budget >= 500;
          default:
            return true;
        }
      });
    }

    setFilteredProjects(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      industry: 'all',
      technology: 'all',
      status: 'all',
      scale: 'all'
    });
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Live Project Observatory - Real-Time Work Showcase | TrupTECH Solutions</title>
        <meta name="description" content="Explore TrupTECH's live project portfolio with real-time progress tracking, client testimonials, and innovative technology solutions across industries." />
        <meta name="keywords" content="live projects, portfolio, AI implementation, automation, custom development, client testimonials, technology solutions" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-brand-gradient-subtle py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-brand">
                  <Icon name="Activity" size={32} color="white" strokeWidth={2} />
                </div>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-subtle"></div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Live Project
                <span className="block text-accent">Observatory</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Witness innovation in action. Explore our real-time project portfolio with transparent progress tracking, 
                client testimonials, and cutting-edge technology implementations across global industries.
              </p>
            </div>

            {/* Quick Stats */}
            <StatsOverview />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter Bar */}
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              projectCount={filteredProjects?.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Projects Grid/List */}
            {filteredProjects?.length > 0 ? (
              <div className={`${
                viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'space-y-6'
              } mb-16`}>
                {filteredProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more projects.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Innovation Lab Section */}
            <InnovationLab />

            {/* Call to Action */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Join our portfolio of successful clients. Let's discuss how we can bring your vision to life 
                  with cutting-edge technology solutions.
                </p>
                <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    Start WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Project Request Widget */}
      <ProjectRequestWidget />
    </div>
  );
};

export default LiveProjectObservatory;