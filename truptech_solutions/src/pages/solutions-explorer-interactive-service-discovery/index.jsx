import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SolutionCard from './components/SolutionCard';
import FilterPanel from './components/FilterPanel';
import SolutionMatcher from './components/SolutionMatcher';
import DemoModal from './components/DemoModal';
import RecommendationModal from './components/RecommendationModal';
import SolutionDetailModal from './components/SolutionDetailModal';

const SolutionsExplorer = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    industry: 'All Industries',
    complexity: 'All Levels',
    timeline: 'Any Timeline'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMatcherOpen, setIsMatcherOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [sortBy, setSortBy] = useState('relevance');

  // Mock solutions data
  const allSolutions = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      category: "AI/ML",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Leverage machine learning algorithms to predict trends, identify opportunities, and make data-driven decisions that drive business growth.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Natural Language Queries", "Automated Reporting", "Data Visualization"],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      timeline: "8-12 weeks",
      roi: "300%+",
      complexity: "Moderate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      demoAvailable: true,
      caseStudies: 12,
      industry: "Finance"
    },
    {
      id: 2,
      title: "Workflow Automation Suite",
      category: "Automation",
      description: "Streamline your business processes with intelligent automation. Eliminate manual tasks, reduce errors, and increase productivity through customized workflow solutions that adapt to your unique business needs.",
      features: ["Process Mapping", "Task Automation", "Integration Hub", "Performance Monitoring", "Custom Workflows"],
      technologies: ["Node.js", "MongoDB", "React", "Docker", "Azure"],
      timeline: "6-10 weeks",
      roi: "250%+",
      complexity: "Simple",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      demoAvailable: true,
      caseStudies: 8,
      industry: "Manufacturing"
    },
    {
      id: 3,
      title: "Custom E-commerce Platform",
      category: "Custom Development",
      description: "Build a powerful, scalable e-commerce solution tailored to your brand. From inventory management to payment processing, create a seamless shopping experience that converts visitors into loyal customers.",
      features: ["Multi-vendor Support", "Payment Gateway", "Inventory Management", "Mobile Responsive", "SEO Optimized"],
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
      timeline: "12-16 weeks",
      roi: "400%+",
      complexity: "Complex",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      demoAvailable: false,
      caseStudies: 15,
      industry: "E-commerce"
    },
    {
      id: 4,
      title: "Digital Transformation Consulting",
      category: "Consulting",
      description: "Navigate your digital transformation journey with expert guidance. Our consultants help you identify opportunities, develop strategies, and implement technologies that position your business for future success.",
      features: ["Strategy Development", "Technology Assessment", "Change Management", "Training Programs", "Implementation Support"],
      technologies: ["Various", "Cloud Platforms", "Analytics Tools", "Integration APIs"],
      timeline: "4-8 weeks",
      roi: "200%+",
      complexity: "Moderate",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      demoAvailable: false,
      caseStudies: 25,
      industry: "Healthcare"
    },
    {
      id: 5,
      title: "Machine Learning Model Development",
      category: "AI/ML",
      description: "Develop custom machine learning models that solve your specific business challenges. From computer vision to natural language processing, harness the power of AI to automate decisions and gain competitive advantages.",
      features: ["Custom Model Training", "Data Preprocessing", "Model Deployment", "Performance Monitoring", "Continuous Learning"],
      technologies: ["Python", "PyTorch", "Scikit-learn", "Docker", "Kubernetes"],
      timeline: "10-14 weeks",
      roi: "350%+",
      complexity: "Complex",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      demoAvailable: true,
      caseStudies: 6,
      industry: "Education"
    },
    {
      id: 6,
      title: "Enterprise Resource Planning",
      category: "Custom Development",
      description: "Integrate all your business processes into a unified system. Our custom ERP solutions provide real-time visibility, improve collaboration, and streamline operations across your entire organization.",
      features: ["Module Integration", "Real-time Reporting", "User Management", "Mobile Access", "Cloud Deployment"],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular", "AWS"],
      timeline: "16-24 weeks",
      roi: "280%+",
      complexity: "Complex",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      demoAvailable: false,
      caseStudies: 10,
      industry: "Manufacturing"
    },
    {
      id: 7,
      title: "Robotic Process Automation",
      category: "Automation",
      description: "Deploy software robots to handle repetitive tasks with precision and speed. Our RPA solutions free up your team to focus on strategic work while ensuring consistent, error-free execution of routine processes.",
      features: ["Bot Development", "Process Recording", "Exception Handling", "Scheduling", "Analytics Dashboard"],
      technologies: ["UiPath", "Python", "OCR", "API Integration", "Cloud"],
      timeline: "4-8 weeks",
      roi: "320%+",
      complexity: "Simple",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      demoAvailable: true,
      caseStudies: 18,
      industry: "Finance"
    },
    {
      id: 8,
      title: "Cloud Migration Strategy",
      category: "Consulting",
      description: "Seamlessly transition your infrastructure to the cloud with minimal disruption. Our experts design and execute migration strategies that optimize performance, reduce costs, and enhance scalability.",
      features: ["Migration Planning", "Risk Assessment", "Cost Optimization", "Security Implementation", "Performance Monitoring"],
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker"],
      timeline: "6-12 weeks",
      roi: "180%+",
      complexity: "Moderate",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      demoAvailable: false,
      caseStudies: 22,
      industry: "Healthcare"
    }
  ];

  const [filteredSolutions, setFilteredSolutions] = useState(allSolutions);

  useEffect(() => {
    let filtered = allSolutions;

    // Apply category filter
    if (filters?.category !== 'all') {
      const categoryMap = {
        'ai-ml': 'AI/ML',
        'automation': 'Automation',
        'development': 'Custom Development',
        'consulting': 'Consulting'
      };
      filtered = filtered?.filter(solution => solution?.category === categoryMap?.[filters?.category]);
    }

    // Apply industry filter
    if (filters?.industry !== 'All Industries') {
      filtered = filtered?.filter(solution => solution?.industry === filters?.industry);
    }

    // Apply complexity filter
    if (filters?.complexity !== 'All Levels') {
      filtered = filtered?.filter(solution => solution?.complexity === filters?.complexity);
    }

    // Apply timeline filter
    if (filters?.timeline !== 'Any Timeline') {
      // Simple timeline matching logic
      filtered = filtered?.filter(solution => {
        const timeline = solution?.timeline?.toLowerCase();
        switch (filters?.timeline) {
          case '1-2 weeks':
            return timeline?.includes('week') && !timeline?.includes('month');
          case '1-3 months':
            return timeline?.includes('4-') || timeline?.includes('6-') || timeline?.includes('8-');
          case '3-6 months':
            return timeline?.includes('10-') || timeline?.includes('12-') || timeline?.includes('16-');
          case '6+ months':
            return timeline?.includes('16-') || timeline?.includes('24');
          default:
            return true;
        }
      });
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(solution =>
        solution?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        solution?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        solution?.features?.some(feature => feature?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'title':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      case 'complexity':
        const complexityOrder = { 'Simple': 1, 'Moderate': 2, 'Complex': 3 };
        filtered?.sort((a, b) => complexityOrder?.[a?.complexity] - complexityOrder?.[b?.complexity]);
        break;
      case 'timeline':
        filtered?.sort((a, b) => {
          const getWeeks = (timeline) => {
            const match = timeline?.match(/(\d+)-(\d+)\s*weeks?/);
            return match ? parseInt(match?.[1]) : 100;
          };
          return getWeeks(a?.timeline) - getWeeks(b?.timeline);
        });
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredSolutions(filtered);
  }, [filters, searchQuery, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      industry: 'All Industries',
      complexity: 'All Levels',
      timeline: 'Any Timeline'
    });
    setSearchQuery('');
  };

  const handleDemoClick = (solution) => {
    setSelectedDemo(solution);
  };

  const handleLearnMore = (solution) => {
    setSelectedSolution(solution);
  };

  const handleRecommendation = (recs) => {
    setRecommendations(recs);
  };

  const stats = [
    { label: "Solutions Available", value: allSolutions?.length, icon: "Grid3X3" },
    { label: "Industries Served", value: "15+", icon: "Building" },
    { label: "Success Rate", value: "98%", icon: "TrendingUp" },
    { label: "Client Satisfaction", value: "4.9/5", icon: "Star" }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions Explorer - Interactive Service Discovery | TrupTECH Solutions</title>
        <meta name="description" content="Explore our comprehensive technology solutions through interactive filtering and demos. Find the perfect AI, automation, or custom development solution for your business needs." />
        <meta name="keywords" content="technology solutions, AI services, automation, custom development, business consulting, interactive demos" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-brand-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Explore Our
                <span className="text-accent"> Technology Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover the perfect technology solution for your business through our interactive explorer. 
                Filter by category, industry, and complexity to find solutions that match your exact needs.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats?.map((stat, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name={stat?.icon} size={24} className="text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Actions */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search solutions, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <Button
                variant="default"
                size="lg"
                iconName="Sparkles"
                iconPosition="left"
                onClick={() => setIsMatcherOpen(true)}
                className="bg-accent hover:bg-accent/90 whitespace-nowrap"
              >
                Solution Matcher
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-80">
                <FilterPanel
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  isOpen={isFilterOpen}
                  onToggle={() => setIsFilterOpen(!isFilterOpen)}
                />
              </div>

              {/* Solutions Grid */}
              <div className="flex-1">
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {filteredSolutions?.length} Solutions Found
                    </h2>
                    <p className="text-muted-foreground">
                      {filters?.category !== 'all' || filters?.industry !== 'All Industries' || 
                       filters?.complexity !== 'All Levels'|| filters?.timeline !== 'Any Timeline' || searchQuery ?'Filtered results' : 'All available solutions'}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e?.target?.value)}
                      className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="title">Name</option>
                      <option value="complexity">Complexity</option>
                      <option value="timeline">Timeline</option>
                    </select>
                  </div>
                </div>

                {/* Solutions Grid */}
                {filteredSolutions?.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredSolutions?.map((solution) => (
                      <SolutionCard
                        key={solution?.id}
                        solution={solution}
                        onDemoClick={handleDemoClick}
                        onLearnMore={handleLearnMore}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Solutions Found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search terms to find what you're looking for.
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-gradient text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our experts are here to help you find the perfect solution for your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Talk to an Expert
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Modals */}
        <SolutionMatcher
          isOpen={isMatcherOpen}
          onClose={() => setIsMatcherOpen(false)}
          onRecommendation={handleRecommendation}
        />

        <DemoModal
          solution={selectedDemo}
          isOpen={!!selectedDemo}
          onClose={() => setSelectedDemo(null)}
        />

        <SolutionDetailModal
          solution={selectedSolution}
          isOpen={!!selectedSolution}
          onClose={() => setSelectedSolution(null)}
          onDemoClick={handleDemoClick}
        />

        <RecommendationModal
          recommendations={recommendations}
          isOpen={!!recommendations}
          onClose={() => setRecommendations(null)}
        />
      </div>
    </>
  );
};

export default SolutionsExplorer;