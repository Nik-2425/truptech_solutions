import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onWhatsAppClick, onBookConsultation }) => {
  return (
    <section className="relative bg-brand-gradient text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="MessageCircle" size={16} />
              <span className="text-sm font-medium">24/7 Global Support</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your
              <span className="block text-accent">Digital Future</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Connect with our technology experts through your preferred communication channel. From instant WhatsApp chats to comprehensive consultation calls, we're here to transform your vision into reality.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">&lt;2h</div>
                <div className="text-sm text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/80">Countries Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-success hover:bg-success/90 text-white shadow-lg"
              >
                WhatsApp Chat
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onBookConsultation}
                iconName="Calendar"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {/* Communication Channels */}
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Icon name="MessageCircle" size={32} className="mx-auto mb-2 text-accent" />
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-xs text-white/70">Instant Chat</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Icon name="Video" size={32} className="mx-auto mb-2 text-accent" />
                  <div className="text-sm font-medium">Video Call</div>
                  <div className="text-xs text-white/70">Face to Face</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-2 text-accent" />
                  <div className="text-sm font-medium">Phone</div>
                  <div className="text-xs text-white/70">Voice Call</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-2 text-accent" />
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-white/70">Detailed Inquiry</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse-subtle">
                <Icon name="Zap" size={16} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;