import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WhyTrupTechSection = () => {
  const differentiators = [
    {
      icon: "Zap",
      title: "Rapid Deployment",
      description: "From concept to production in weeks, not months",
      details: [
        "Pre-built AI frameworks and templates",
        "Automated deployment pipelines",
        "Parallel development processes",
        "Agile methodology with daily standups"
      ],
      metric: "3x faster than industry average",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      icon: "Globe",
      title: "Cultural Adaptation",
      description: "Technology that respects and adapts to local cultures",
      details: [
        "Multi-language interface support",
        "Cultural UI/UX patterns",
        "Local business practice integration",
        "Timezone-aware communication"
      ],
      metric: "25+ countries successfully served",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop"
    },
    {
      icon: "Headphones",
      title: "Comprehensive Support",
      description: "End-to-end support from planning to optimization",
      details: [
        "24/7 technical support",
        "Comprehensive training programs",
        "Regular performance optimization",
        "Proactive monitoring and maintenance"
      ],
      metric: "98% client satisfaction rate",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop"
    }
  ];

  const competitiveAdvantages = [
    {
      category: "Technology Approach",
      truptech: "Human-centered AI that augments capabilities",
      others: "Technology-first approach that may replace workers",
      icon: "Users"
    },
    {
      category: "Cultural Intelligence",
      truptech: "Deep cultural adaptation and local expertise",
      others: "One-size-fits-all global solutions",
      icon: "Globe"
    },
    {
      category: "Business Model",
      truptech: "Flexible pricing for businesses of all sizes",
      others: "Enterprise-only focus with high minimums",
      icon: "DollarSign"
    },
    {
      category: "Support Structure",
      truptech: "Comprehensive training and ongoing optimization",
      others: "Basic implementation with limited follow-up",
      icon: "Headphones"
    },
    {
      category: "Communication",
      truptech: "Transparent, jargon-free explanations",
      others: "Technical complexity without translation",
      icon: "MessageCircle"
    }
  ];

  const clientTestimonials = [
    {
      quote: "TrupTECH didn\'t just implement our AI solution—they helped our entire team understand and embrace the technology. The cultural sensitivity they showed was remarkable.",
      author: "Maria Santos",
      company: "Global Manufacturing Corp",
      country: "Brazil",
      flag: "🇧🇷",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "The speed of deployment was incredible. What we thought would take 6 months was completed in 6 weeks, with better results than we imagined.",
      author: "James Mitchell",
      company: "TechStart Solutions",
      country: "United Kingdom",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "As a small business, we never thought advanced AI was within our reach. TrupTECH made it accessible and affordable, with support that feels like having an in-house team.",
      author: "Yuki Tanaka",
      company: "Innovative Designs Ltd",
      country: "Japan",
      flag: "🇯🇵",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Target" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Makes TrupTECH Different
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just deliver technology solutions—we create partnerships that transform businesses while respecting cultures and empowering people.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="space-y-16 mb-20">
          {differentiators?.map((diff, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                    <Icon name={diff?.icon} size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{diff?.title}</h3>
                    <p className="text-muted-foreground">{diff?.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {diff?.details?.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-accent" />
                    <span className="font-semibold text-accent">{diff?.metric}</span>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-floating">
                  <Image
                    src={diff?.image}
                    alt={diff?.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
            TrupTECH vs. Traditional Providers
          </h3>
          
          <div className="bg-card rounded-2xl overflow-hidden shadow-subtle">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-surface p-6 font-semibold text-foreground">
                <Icon name="Layers" size={20} className="mb-2" />
                Category
              </div>
              <div className="bg-accent/5 p-6 font-semibold text-accent">
                <Icon name="Zap" size={20} className="mb-2" />
                TrupTECH Approach
              </div>
              <div className="bg-muted p-6 font-semibold text-muted-foreground">
                <Icon name="Building" size={20} className="mb-2" />
                Traditional Providers
              </div>
            </div>
            
            {competitiveAdvantages?.map((advantage, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-0 border-t border-border">
                <div className="p-6 flex items-center space-x-3">
                  <Icon name={advantage?.icon} size={16} className="text-muted-foreground" />
                  <span className="font-medium text-foreground">{advantage?.category}</span>
                </div>
                <div className="p-6 bg-accent/5">
                  <p className="text-foreground">{advantage?.truptech}</p>
                </div>
                <div className="p-6 bg-muted">
                  <p className="text-muted-foreground">{advantage?.others}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
            What Our Clients Say About the Difference
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {clientTestimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial?.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial?.company}</p>
                  </div>
                  <div className="ml-auto flex items-center space-x-1">
                    <span className="text-lg">{testimonial?.flag}</span>
                    <span className="text-xs text-muted-foreground">{testimonial?.country}</span>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>
                
                <div className="flex items-center justify-end mt-4">
                  {[...Array(5)]?.map((_, starIndex) => (
                    <Icon key={starIndex} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-brand-gradient rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Experience the TrupTECH Difference
            </h3>
            
            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join hundreds of businesses worldwide who have transformed their operations with our human-centered, culturally-intelligent technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>Schedule Consultation</span>
              </button>
              
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrupTechSection;