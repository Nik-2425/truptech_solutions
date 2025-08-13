import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  if (!testimonials || testimonials?.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <div className="relative bg-card border border-border rounded-xl overflow-hidden">
      {/* Main Testimonial Display */}
      <div className="relative h-96 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        
        <div className="relative z-10 w-full px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote Icon */}
            <Icon name="Quote" size={48} className="text-accent mx-auto mb-6 opacity-60" />
            
            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-card-foreground leading-relaxed mb-8 font-medium">
              "{currentTestimonial?.quote}"
            </blockquote>
            
            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <Image
                  src={currentTestimonial?.avatar}
                  alt={currentTestimonial?.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-background">
                  <span className="text-sm">{currentTestimonial?.flag}</span>
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-card-foreground text-lg">
                  {currentTestimonial?.name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial?.position}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTestimonial?.company} • {currentTestimonial?.location}
                </div>
              </div>
            </div>

            {/* Project Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {currentTestimonial?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-all duration-200 z-20"
          aria-label="Previous testimonial"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-all duration-200 z-20"
          aria-label="Next testimonial"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {testimonials?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      {/* Auto-play Control */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          iconName={isAutoPlaying ? "Pause" : "Play"}
          className="bg-background/80 backdrop-blur-sm border border-border"
        />
      </div>
      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-muted">
          <div
            className="h-full bg-accent transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / testimonials?.length) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;