import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full animate-pulse-subtle"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent rounded-full animate-pulse-subtle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="Sparkles" size={16} className="text-accent" />
              <span className="text-sm font-medium text-white">Trust + Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Story of
              <span className="block text-accent animate-gradient bg-gradient-to-r from-accent to-trust-builder bg-clip-text text-transparent">
                Technology Translation
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Founded on the belief that advanced technology should be accessible to businesses of all sizes, TrupTECH bridges the gap between complex possibilities and practical outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-gray-300">Global Clients</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Globe" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-gray-300">Years</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-floating">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="TrupTECH team collaborating on technology solutions"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-elevated animate-float">
              <Icon name="Zap" size={32} color="white" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-trust-builder rounded-full flex items-center justify-center shadow-elevated animate-pulse-subtle">
              <Icon name="Shield" size={24} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;