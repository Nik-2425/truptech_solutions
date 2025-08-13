import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import InteractiveWorldMap from './components/InteractiveWorldMap';
import ClientStoryCard from './components/ClientStoryCard';
import RegionFilter from './components/RegionFilter';
import CulturalIntelligenceShowcase from './components/CulturalIntelligenceShowcase';
import TestimonialCarousel from './components/TestimonialCarousel';

const GlobalClientStoriesPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [filteredStories, setFilteredStories] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Mock data for regions
  const regions = [
    {
      id: 'north-america',
      name: 'North America',
      countries: ['United States', 'Canada'],
      clientCount: 12,
      position: { top: '25%', left: '15%' },
      color: 'bg-accent'
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: ['United Kingdom', 'Germany', 'Netherlands', 'France'],
      clientCount: 18,
      position: { top: '20%', left: '50%' },
      color: 'bg-primary'
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific',
      countries: ['Singapore', 'Australia', 'Japan', 'India'],
      clientCount: 24,
      position: { top: '35%', left: '75%' },
      color: 'bg-trust-builder'
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar'],
      clientCount: 8,
      position: { top: '40%', left: '55%' },
      color: 'bg-warning'
    },
    {
      id: 'africa',
      name: 'Africa',
      countries: ['South Africa', 'Nigeria', 'Kenya'],
      clientCount: 6,
      position: { top: '55%', left: '52%' },
      color: 'bg-success'
    }
  ];

  // Mock industries for filtering
  const industries = [
    { id: 'fintech', name: 'FinTech', count: 8 },
    { id: 'healthcare', name: 'Healthcare', count: 12 },
    { id: 'manufacturing', name: 'Manufacturing', count: 6 },
    { id: 'ecommerce', name: 'E-commerce', count: 9 },
    { id: 'education', name: 'Education', count: 7 },
    { id: 'logistics', name: 'Logistics', count: 5 }
  ];

  // Mock client stories data
  const clientStories = [
    {
      id: 1,
      client: "Sarah Chen",
      position: "CTO",
      company: "FinanceFlow Singapore",
      country: "Singapore",
      countryFlag: "🇸🇬",
      industry: "fintech",
      region: "asia-pacific",
      clientPhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      projectTitle: "AI-Powered Trading Platform",
      projectDescription: "Complete overhaul of legacy trading systems with modern AI-driven analytics and real-time processing capabilities.",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
      testimonial: `TrupTECH's cultural sensitivity was remarkable. They understood our Asian business hierarchy and adapted their communication style perfectly. The team scheduled meetings around our local holidays and even learned basic Mandarin phrases to better connect with our stakeholders. Their technical expertise combined with cultural intelligence made this project a tremendous success.`,
      culturalAdaptation: "Adapted communication protocols to respect hierarchical decision-making processes and scheduled deliverables around Chinese New Year and local festivals.",
      results: [
        { value: "45%", metric: "Faster Trades" },
        { value: "99.9%", metric: "Uptime" },
        { value: "$2.3M", metric: "Cost Savings" },
        { value: "300%", metric: "User Growth" }
      ],
      hasVideo: true,
      videoThumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
      videoLanguages: ["English", "Mandarin"],
      duration: "8 months",
      timezone: "GMT+8",
      completedDate: "March 2024"
    },
    {
      id: 2,
      client: "Ahmed Al-Rashid",
      position: "Digital Innovation Director",
      company: "Emirates Healthcare Group",
      country: "UAE",
      countryFlag: "🇦🇪",
      industry: "healthcare",
      region: "middle-east",
      clientPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      projectTitle: "Telemedicine Platform with AI Diagnostics",
      projectDescription: "Revolutionary healthcare platform integrating AI diagnostics with traditional medical practices, respecting cultural healthcare preferences.",
      technologies: ["Vue.js", "Python", "OpenAI", "Azure", "MongoDB"],
      testimonial: `Working with TrupTECH was exceptional. They respected our cultural values and Islamic principles in healthcare delivery. The team adjusted their working hours to accommodate our prayer times and Ramadan schedule. They even incorporated Arabic language support and right-to-left text direction seamlessly. The platform now serves over 100,000 patients across the Gulf region.`,
      culturalAdaptation: "Incorporated Islamic healthcare principles, Arabic language support, and adjusted project timelines to respect religious observances and local weekend schedules.",
      results: [
        { value: "100K+", metric: "Patients Served" },
        { value: "85%", metric: "Diagnostic Accuracy" },
        { value: "60%", metric: "Cost Reduction" },
        { value: "4.9/5", metric: "Patient Rating" }
      ],
      hasVideo: true,
      videoThumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=225&fit=crop",
      videoLanguages: ["English", "Arabic"],
      duration: "10 months",
      timezone: "GMT+4",
      completedDate: "January 2024"
    },
    {
      id: 3,
      client: "Klaus Mueller",
      position: "Head of Digital Transformation",
      company: "Precision Manufacturing GmbH",
      country: "Germany",
      countryFlag: "🇩🇪",
      industry: "manufacturing",
      region: "europe",
      clientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      projectTitle: "Industry 4.0 Smart Factory Solution",
      projectDescription: "Complete digital transformation of manufacturing processes with IoT sensors, predictive maintenance, and automated quality control systems.",
      technologies: ["Angular", "C#", ".NET Core", "IoT", "SQL Server"],
      testimonial: `TrupTECH demonstrated exceptional German engineering standards. Their documentation was meticulous, meeting our strict compliance requirements. They understood our preference for detailed planning and systematic execution. The team provided comprehensive technical specifications and maintained transparent communication throughout the project. Sehr gut!`,
      culturalAdaptation: "Provided extensive documentation meeting German engineering standards, implemented rigorous testing protocols, and maintained formal communication channels as preferred in German business culture.",
      results: [
        { value: "35%", metric: "Efficiency Gain" },
        { value: "90%", metric: "Defect Reduction" },
        { value: "€1.8M", metric: "Annual Savings" },
        { value: "100%", metric: "Compliance Score" }
      ],
      hasVideo: false,
      duration: "12 months",
      timezone: "GMT+1",
      completedDate: "February 2024"
    },
    {
      id: 4,
      client: "Jennifer Martinez",
      position: "VP of Technology",
      company: "EcoCommerce Solutions",
      country: "United States",
      countryFlag: "🇺🇸",
      industry: "ecommerce",
      region: "north-america",
      clientPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      projectTitle: "Sustainable E-commerce Platform",
      projectDescription: "Next-generation e-commerce platform with carbon footprint tracking, sustainable product recommendations, and green logistics optimization.",
      technologies: ["React", "GraphQL", "Node.js", "AWS", "Elasticsearch"],
      testimonial: `TrupTECH perfectly matched our Silicon Valley startup culture. They embraced our fail-fast, iterate-quickly approach while maintaining high-quality standards. The team was incredibly responsive to our rapid pivots and feature changes. Their agile methodology and innovative thinking helped us launch ahead of schedule and secure Series A funding.`,
      culturalAdaptation: "Embraced agile startup culture with rapid prototyping, frequent iterations, and flexible scope management to match Silicon Valley innovation pace.",
      results: [
        { value: "250%", metric: "Revenue Growth" },
        { value: "40%", metric: "Carbon Reduction" },
        { value: "1M+", metric: "Active Users" },
        { value: "$15M", metric: "Series A Raised" }
      ],
      hasVideo: true,
      videoThumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      videoLanguages: ["English"],
      duration: "6 months",
      timezone: "GMT-8",
      completedDate: "April 2024"
    },
    {
      id: 5,
      client: "Priya Sharma",
      position: "Chief Technology Officer",
      company: "EduTech India",
      country: "India",
      countryFlag: "🇮🇳",
      industry: "education",
      region: "asia-pacific",
      clientPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      projectTitle: "Multilingual Learning Management System",
      projectDescription: "Comprehensive LMS supporting 12 Indian languages with AI-powered personalized learning paths and offline capability for rural areas.",
      technologies: ["React Native", "Django", "TensorFlow", "Firebase", "PostgreSQL"],
      testimonial: `TrupTECH's understanding of India's diverse educational landscape was impressive. They incorporated support for multiple regional languages and designed the system to work on low-bandwidth connections. The team showed great respect for our cultural diversity and educational traditions while introducing modern technology solutions.`,
      culturalAdaptation: "Incorporated multi-language support for regional Indian languages, designed for low-bandwidth environments, and respected traditional teaching methodologies while introducing modern features.",
      results: [
        { value: "500K+", metric: "Students Enrolled" },
        { value: "12", metric: "Languages Supported" },
        { value: "95%", metric: "Rural Accessibility" },
        { value: "4.8/5", metric: "Teacher Rating" }
      ],
      hasVideo: true,
      videoThumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=225&fit=crop",
      videoLanguages: ["English", "Hindi", "Tamil"],
      duration: "9 months",
      timezone: "GMT+5:30",
      completedDate: "December 2023"
    },
    {
      id: 6,
      client: "David Thompson",
      position: "Operations Director",
      company: "Outback Logistics",
      country: "Australia",
      countryFlag: "🇦🇺",
      industry: "logistics",
      region: "asia-pacific",
      clientPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      projectTitle: "Remote Area Delivery Optimization",
      projectDescription: "AI-powered logistics platform optimizing delivery routes across Australia\'s vast remote areas with real-time tracking and drone integration.",
      technologies: ["Vue.js", "Python", "Machine Learning", "Google Cloud", "Redis"],
      testimonial: `TrupTECH understood the unique challenges of Australian logistics - vast distances, remote communities, and harsh weather conditions. They built a robust system that works reliably even in the most isolated areas. The team's straightforward communication style matched our Australian business culture perfectly.`,
      culturalAdaptation: "Designed for extreme geographical challenges unique to Australia, incorporated weather-resistant features, and maintained direct, informal communication style preferred in Australian business culture.",
      results: [
        { value: "30%", metric: "Route Efficiency" },
        { value: "99.5%", metric: "Delivery Success" },
        { value: "50%", metric: "Fuel Savings" },
        { value: "25%", metric: "Time Reduction" }
      ],
      hasVideo: false,
      duration: "7 months",
      timezone: "GMT+10",
      completedDate: "May 2024"
    }
  ];

  // Mock testimonials for carousel
  const featuredTestimonials = [
    {
      quote: "TrupTECH's cultural intelligence sets them apart. They don't just deliver technology; they deliver solutions that respect and enhance our local business practices.",
      name: "Sarah Chen",
      position: "CTO",
      company: "FinanceFlow Singapore",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      flag: "🇸🇬",
      tags: ["FinTech", "AI", "Cultural Adaptation"]
    },
    {
      quote: "Working across 12 time zones has never been easier. TrupTECH\'s global team coordination and cultural sensitivity made our international expansion seamless.",
      name: "Ahmed Al-Rashid",
      position: "Digital Innovation Director",
      company: "Emirates Healthcare Group",
      location: "Dubai, UAE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      flag: "🇦🇪",
      tags: ["Healthcare", "Telemedicine", "Global Reach"]
    },
    {
      quote: "Their German engineering precision combined with innovative thinking delivered exactly what we needed. Exceptional documentation and systematic execution.",
      name: "Klaus Mueller",
      position: "Head of Digital Transformation",
      company: "Precision Manufacturing GmbH",
      location: "Munich, Germany",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      flag: "🇩🇪",
      tags: ["Manufacturing", "Industry 4.0", "Precision"]
    }
  ];

  // Filter stories based on selected region and industry
  useEffect(() => {
    let filtered = clientStories;

    if (selectedRegion) {
      filtered = filtered?.filter(story => story?.region === selectedRegion?.id);
    }

    if (selectedIndustry) {
      filtered = filtered?.filter(story => story?.industry === selectedIndustry);
    }

    setFilteredStories(filtered);
  }, [selectedRegion, selectedIndustry]);

  // Initialize with all stories
  useEffect(() => {
    setFilteredStories(clientStories);
  }, []);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Client Stories - Cultural Intelligence Showcase | TrupTECH Solutions</title>
        <meta name="description" content="Discover how TrupTECH adapts technology solutions across cultures. Authentic client testimonials from 25+ countries showcasing our cultural intelligence and global expertise." />
        <meta name="keywords" content="global clients, cultural intelligence, international technology, client testimonials, cross-cultural solutions" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Global Client Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Celebrating our international partnerships through authentic testimonials that showcase 
                how TrupTECH adapts technology solutions to respect and embrace diverse business cultures worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                  <Icon name="Globe" size={20} className="text-accent" />
                  <span className="text-sm font-medium">25+ Countries</span>
                </div>
                <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                  <Icon name="Users" size={20} className="text-trust-builder" />
                  <span className="text-sm font-medium">68 Global Clients</span>
                </div>
                <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                  <Icon name="Clock" size={20} className="text-success" />
                  <span className="text-sm font-medium">12 Time Zones</span>
                </div>
                <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                  <Icon name="Award" size={20} className="text-warning" />
                  <span className="text-sm font-medium">98% Success Rate</span>
                </div>
              </div>
            </div>

            {/* Interactive World Map */}
            <InteractiveWorldMap 
              onRegionSelect={handleRegionSelect}
              selectedRegion={selectedRegion}
            />
          </div>
        </section>

        {/* Featured Testimonials Carousel */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Voices from Around the World
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear directly from our global clients about their experience working with TrupTECH
              </p>
            </div>
            <TestimonialCarousel testimonials={featuredTestimonials} />
          </div>
        </section>

        {/* Cultural Intelligence Showcase */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CulturalIntelligenceShowcase />
          </div>
        </section>

        {/* Client Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <RegionFilter
                    selectedRegion={selectedRegion}
                    onRegionChange={handleRegionChange}
                    regions={regions}
                    selectedIndustry={selectedIndustry}
                    onIndustryChange={handleIndustryChange}
                    industries={industries}
                  />
                </div>
              </div>

              {/* Stories Content */}
              <div className="flex-1">
                {/* Header with View Controls */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Client Success Stories
                    </h2>
                    <p className="text-muted-foreground">
                      {filteredStories?.length} stories found
                      {selectedRegion && ` in ${selectedRegion?.name}`}
                      {selectedIndustry && ` for ${selectedIndustry}`}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      iconName="Grid3X3"
                    />
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      iconName="List"
                    />
                  </div>
                </div>

                {/* Stories Grid/List */}
                {filteredStories?.length > 0 ? (
                  <div className={`grid gap-6 ${
                    viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
                  }`}>
                    {filteredStories?.map((story, index) => (
                      <ClientStoryCard
                        key={story?.id}
                        story={story}
                        featured={index === 0 && viewMode === 'grid'}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No stories found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your filters to see more client stories.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedRegion(null);
                        setSelectedIndustry(null);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-trust-builder">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Add Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our global community of satisfied clients. Let's create technology solutions 
              that respect your culture and exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Start WhatsApp Chat
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} color="white" />
                </div>
                <div>
                  <div className="text-xl font-bold">TrupTECH</div>
                  <div className="text-sm text-secondary-foreground/70">Solutions</div>
                </div>
              </div>
              <p className="text-secondary-foreground/80 mb-4">
                Bridging cultures through technology. Delivering solutions that respect diversity 
                and drive global success.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Linkedin" />
                <Button variant="ghost" size="sm" iconName="Twitter" />
                <Button variant="ghost" size="sm" iconName="Github" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Global Reach</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>25+ Countries Served</li>
                <li>12 Time Zones Covered</li>
                <li>15+ Languages Supported</li>
                <li>24/7 Global Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>hello@truptech.com</li>
                <li>+1 (555) 123-4567</li>
                <li>WhatsApp Support</li>
                <li>Schedule Consultation</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} TrupTECH Solutions. All rights reserved. | Celebrating global partnerships with cultural intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GlobalClientStoriesPage;