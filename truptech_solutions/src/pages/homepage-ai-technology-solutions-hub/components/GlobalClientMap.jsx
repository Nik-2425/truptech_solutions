import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const GlobalClientMap = () => {
  const [activeClient, setActiveClient] = useState(0);

  const clientLocations = [
    {
      id: 1,
      country: "United States",
      flag: "🇺🇸",
      city: "New York",
      clients: 23,
      projects: 45,
      coordinates: { x: 25, y: 35 },
      testimonial: "TrupTECH transformed our e-commerce platform with AI-driven personalization. Sales increased by 340% in just 6 months.",
      company: "TechFlow Solutions",
      industry: "E-commerce"
    },
    {
      id: 2,
      country: "United Kingdom",
      flag: "🇬🇧",
      city: "London",
      clients: 18,
      projects: 32,
      coordinates: { x: 50, y: 28 },
      testimonial: "Their automation systems revolutionized our manufacturing process. We've reduced costs by 45% while improving quality.",
      company: "Industrial Dynamics Ltd",
      industry: "Manufacturing"
    },
    {
      id: 3,
      country: "Germany",
      flag: "🇩🇪",
      city: "Berlin",
      clients: 15,
      projects: 28,
      coordinates: { x: 52, y: 32 },
      testimonial: "Outstanding technical expertise and cultural understanding. They delivered our fintech solution ahead of schedule.",
      company: "FinanceForward GmbH",
      industry: "Financial Services"
    },
    {
      id: 4,
      country: "Australia",
      flag: "🇦🇺",
      city: "Sydney",
      clients: 12,
      projects: 19,
      coordinates: { x: 85, y: 75 },
      testimonial: "TrupTECH's AI solutions helped us optimize our supply chain across the Pacific region. Incredible results!",
      company: "Pacific Logistics",
      industry: "Logistics"
    },
    {
      id: 5,
      country: "Japan",
      flag: "🇯🇵",
      city: "Tokyo",
      clients: 21,
      projects: 38,
      coordinates: { x: 82, y: 42 },
      testimonial: "Their deep understanding of both technology and business culture made our digital transformation seamless.",
      company: "Tokyo Innovation Corp",
      industry: "Technology"
    },
    {
      id: 6,
      country: "Canada",
      flag: "🇨🇦",
      city: "Toronto",
      clients: 16,
      projects: 29,
      coordinates: { x: 22, y: 30 },
      testimonial: "From concept to deployment, TrupTECH delivered excellence. Our healthcare platform now serves millions.",
      company: "HealthTech Canada",
      industry: "Healthcare"
    },
    {
      id: 7,
      country: "Singapore",
      flag: "🇸🇬",
      city: "Singapore",
      clients: 14,
      projects: 25,
      coordinates: { x: 75, y: 60 },
      testimonial: "Their blockchain solutions secured our financial transactions while maintaining lightning-fast processing speeds.",
      company: "Asia Financial Hub",
      industry: "Blockchain"
    },
    {
      id: 8,
      country: "Brazil",
      flag: "🇧🇷",
      city: "São Paulo",
      clients: 11,
      projects: 22,
      coordinates: { x: 35, y: 70 },
      testimonial: "TrupTECH understood our market needs perfectly. Their custom solution boosted our agricultural efficiency by 60%.",
      company: "AgriTech Brasil",
      industry: "Agriculture"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveClient(prev => (prev + 1) % clientLocations?.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [clientLocations?.length]);

  const totalClients = clientLocations?.reduce((sum, location) => sum + location?.clients, 0);
  const totalProjects = clientLocations?.reduce((sum, location) => sum + location?.projects, 0);

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Globe" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Global Presence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Companies Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, businesses across {clientLocations?.length} countries trust TrupTECH 
            to deliver cutting-edge technology solutions that drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Global Stats */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{totalClients}+</div>
                  <div className="text-sm text-muted-foreground">Global Clients</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-trust-builder/10 rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={24} className="text-trust-builder" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{totalProjects}+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{clientLocations?.length}</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive World Map */}
          <div className="relative">
            <div className="bg-card rounded-xl p-8 shadow-subtle">
              <div className="relative w-full h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
                {/* Simplified World Map Background */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    <path d="M10,20 Q20,15 30,20 T50,25 T70,20 T90,25" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M15,35 Q25,30 35,35 T55,40 T75,35 T85,40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M20,50 Q30,45 40,50 T60,55 T80,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>

                {/* Client Location Markers */}
                {clientLocations?.map((location, index) => (
                  <div
                    key={location?.id}
                    className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                      activeClient === index
                        ? 'bg-accent scale-150 shadow-accent/50 shadow-lg'
                        : 'bg-trust-builder hover:bg-accent hover:scale-125'
                    }`}
                    style={{
                      left: `${location?.coordinates?.x}%`,
                      top: `${location?.coordinates?.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActiveClient(index)}
                  >
                    {/* Pulse Animation for Active Client */}
                    {activeClient === index && (
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {clientLocations?.map((location, index) => {
                    if (index === 0) return null;
                    const prevLocation = clientLocations?.[index - 1];
                    return (
                      <line
                        key={`line-${index}`}
                        x1={`${prevLocation?.coordinates?.x}%`}
                        y1={`${prevLocation?.coordinates?.y}%`}
                        x2={`${location?.coordinates?.x}%`}
                        y2={`${location?.coordinates?.y}%`}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        opacity="0.3"
                        strokeDasharray="2,2"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Map Legend */}
              <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-trust-builder rounded-full"></div>
                  <span>Client Location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Active Highlight</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Client Testimonial */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-subtle border-l-4 border-accent">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{clientLocations?.[activeClient]?.flag}</span>
                <div>
                  <div className="font-semibold text-foreground">
                    {clientLocations?.[activeClient]?.country}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {clientLocations?.[activeClient]?.city}
                  </div>
                </div>
              </div>

              <blockquote className="text-foreground mb-4 italic">
                "{clientLocations?.[activeClient]?.testimonial}"
              </blockquote>

              <div className="border-t pt-4">
                <div className="font-medium text-foreground">
                  {clientLocations?.[activeClient]?.company}
                </div>
                <div className="text-sm text-muted-foreground">
                  {clientLocations?.[activeClient]?.industry}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  <Icon name="Users" size={14} className="inline mr-1" />
                  {clientLocations?.[activeClient]?.clients} clients
                </div>
                <div className="text-sm text-muted-foreground">
                  <Icon name="Activity" size={14} className="inline mr-1" />
                  {clientLocations?.[activeClient]?.projects} projects
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {clientLocations?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveClient(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    activeClient === index
                      ? 'bg-accent w-6' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalClientMap;