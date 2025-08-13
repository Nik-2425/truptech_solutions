import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO",
      company: "TechFlow Solutions",
      country: "United States",
      flag: "🇺🇸",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop",
      testimonial: `TrupTECH transformed our e-commerce platform with AI-driven personalization that increased our sales by 340% in just 6 months. Their team's technical expertise combined with their understanding of our business needs was exceptional. The project was delivered on time and exceeded all our expectations.`,
      rating: 5,
      project: "AI-Powered E-commerce Platform",
      industry: "E-commerce Technology",
      results: [
        { metric: "Sales Increase", value: "340%" },
        { metric: "User Engagement", value: "85%" },
        { metric: "Conversion Rate", value: "12.4%" }
      ]
    },
    {
      id: 2,
      name: "James Mitchell",
      position: "Operations Director",
      company: "Industrial Dynamics Ltd",
      country: "United Kingdom",
      flag: "🇬🇧",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=40&fit=crop",
      testimonial: `Their automation systems revolutionized our manufacturing process. We've reduced operational costs by 45% while improving product quality significantly. The TrupTECH team understood our complex requirements and delivered a solution that seamlessly integrated with our existing infrastructure.`,
      rating: 5,
      project: "Manufacturing Automation System",
      industry: "Industrial Manufacturing",
      results: [
        { metric: "Cost Reduction", value: "45%" },
        { metric: "Quality Improvement", value: "92%" },
        { metric: "Efficiency Gain", value: "67%" }
      ]
    },
    {
      id: 3,
      name: "Dr. Klaus Weber",
      position: "Head of Innovation",
      company: "FinanceForward GmbH",
      country: "Germany",
      flag: "🇩🇪",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1560472354-a33c61b1d2f8?w=120&h=40&fit=crop",
      testimonial: `Outstanding technical expertise and cultural understanding. TrupTECH delivered our fintech solution ahead of schedule with robust security features that exceeded European compliance standards. Their communication throughout the project was exemplary, and they truly became an extension of our team.`,
      rating: 5,
      project: "Fintech Security Platform",
      industry: "Financial Services",
      results: [
        { metric: "Security Score", value: "99.8%" },
        { metric: "Compliance Rate", value: "100%" },
        { metric: "Processing Speed", value: "3.2s" }
      ]
    },
    {
      id: 4,
      name: "Emma Thompson",
      position: "Chief Digital Officer",
      company: "HealthTech Canada",
      country: "Canada",
      flag: "🇨🇦",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=40&fit=crop",
      testimonial: `From concept to deployment, TrupTECH delivered excellence at every stage. Our healthcare platform now serves over 2 million patients with AI-powered diagnostics that have improved accuracy by 89%. Their dedication to healthcare compliance and patient privacy was remarkable.`,
      rating: 5,
      project: "Healthcare Analytics Platform",
      industry: "Healthcare Technology",
      results: [
        { metric: "Diagnostic Accuracy", value: "89%" },
        { metric: "Patient Reach", value: "2M+" },
        { metric: "Response Time", value: "1.8s" }
      ]
    },
    {
      id: 5,
      name: "Hiroshi Tanaka",
      position: "Technology Lead",
      company: "Tokyo Innovation Corp",
      country: "Japan",
      flag: "🇯🇵",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop",
      testimonial: `TrupTECH's deep understanding of both technology and business culture made our digital transformation seamless. They delivered a smart city dashboard that processes real-time data from 50,000+ IoT sensors. The solution's scalability and performance have been exceptional.`,
      rating: 5,
      project: "Smart City IoT Platform",
      industry: "Smart City Technology",
      results: [
        { metric: "IoT Sensors", value: "50K+" },
        { metric: "Data Processing", value: "Real-time" },
        { metric: "System Uptime", value: "99.9%" }
      ]
    },
    {
      id: 6,
      name: "Maria Santos",
      position: "Innovation Manager",
      company: "AgriTech Brasil",
      country: "Brazil",
      flag: "🇧🇷",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=40&fit=crop",
      testimonial: `TrupTECH understood our agricultural market needs perfectly. Their custom IoT solution boosted our farming efficiency by 60% and reduced water consumption by 35%. The predictive analytics have transformed how we approach crop management and resource allocation.`,
      rating: 5,
      project: "Agricultural IoT & Analytics",
      industry: "Agricultural Technology",
      results: [
        { metric: "Efficiency Boost", value: "60%" },
        { metric: "Water Savings", value: "35%" },
        { metric: "Yield Increase", value: "28%" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials?.length]);

  const currentClient = testimonials?.[currentTestimonial];

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => prev === 0 ? testimonials?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => (prev + 1) % testimonials?.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-surface to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust-builder/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={16} className="text-trust-builder" />
            <span className="text-sm font-medium text-trust-builder">Client Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from real clients who have transformed their businesses with TrupTECH's technology solutions. Discover how we've helped companies across the globe achieve remarkable results.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <Icon name="Quote" size={256} className="text-accent" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <Image
                    src={currentClient?.avatar}
                    alt={currentClient?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                  />
                  <div className="absolute -bottom-2 -right-2 text-2xl">
                    {currentClient?.flag}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {currentClient?.name}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {currentClient?.position}
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <Image
                    src={currentClient?.companyLogo}
                    alt={currentClient?.company}
                    className="h-8 object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {currentClient?.company} • {currentClient?.country}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
                  {[...Array(currentClient?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>

                {/* Project Info */}
                <div className="bg-surface rounded-lg p-4">
                  <div className="text-sm font-medium text-foreground mb-1">
                    {currentClient?.project}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {currentClient?.industry}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <Icon name="Quote" size={32} className="text-accent mb-4" />
                  <blockquote className="text-lg text-foreground leading-relaxed italic">
                    {currentClient?.testimonial}
                  </blockquote>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {currentClient?.results?.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-surface rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">
                        {result?.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result?.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-card rounded-full shadow-subtle flex items-center justify-center hover:bg-surface transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Dots Navigation */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentTestimonial === index
                      ? 'bg-accent w-8' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-card rounded-full shadow-subtle flex items-center justify-center hover:bg-surface transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
              <span>{isAutoPlaying ? "Pause" : "Play"} Auto-rotation</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <Icon name="Users" size={32} className="text-accent mx-auto mb-4" />
            <div className="text-2xl font-bold text-foreground mb-1">130+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <Icon name="Globe" size={32} className="text-trust-builder mx-auto mb-4" />
            <div className="text-2xl font-bold text-foreground mb-1">8</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <Icon name="Award" size={32} className="text-warning mx-auto mb-4" />
            <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Client Rating</div>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
            <Icon name="Repeat" size={32} className="text-success mx-auto mb-4" />
            <div className="text-2xl font-bold text-foreground mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Repeat Business</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;