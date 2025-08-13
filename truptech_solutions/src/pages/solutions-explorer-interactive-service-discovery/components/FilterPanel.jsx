import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const categories = [
    { id: 'all', name: 'All Solutions', icon: 'Grid3X3' },
    { id: 'ai-ml', name: 'AI/ML', icon: 'Brain' },
    { id: 'automation', name: 'Automation', icon: 'Zap' },
    { id: 'development', name: 'Custom Development', icon: 'Code' },
    { id: 'consulting', name: 'Consulting', icon: 'Users' }
  ];

  const industries = [
    'All Industries',
    'Healthcare',
    'Finance',
    'E-commerce',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Logistics',
    'Entertainment'
  ];

  const complexities = [
    'All Levels',
    'Simple',
    'Moderate',
    'Complex'
  ];

  const timelines = [
    'Any Timeline',
    '1-2 weeks',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ];

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          className="w-full"
        >
          Filters {Object.values(filters)?.some(f => f !== 'all' && f !== 'All Industries' && f !== 'All Levels' && f !== 'Any Timeline') && '(Active)'}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 ${
        isOpen ? 'block' : 'hidden lg:block'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Category</h4>
          <div className="space-y-2">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => onFilterChange('category', category?.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                  filters?.category === category?.id
                    ? 'bg-accent/10 text-accent border border-accent/20' :'hover:bg-surface text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={category?.icon} size={18} />
                <span className="text-sm font-medium">{category?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Industry</h4>
          <div className="space-y-1">
            {industries?.map((industry) => (
              <button
                key={industry}
                onClick={() => onFilterChange('industry', industry)}
                className={`w-full text-left p-2 rounded-md text-sm transition-colors duration-200 ${
                  filters?.industry === industry
                    ? 'bg-accent/10 text-accent font-medium' :'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Complexity Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Complexity</h4>
          <div className="space-y-1">
            {complexities?.map((complexity) => (
              <button
                key={complexity}
                onClick={() => onFilterChange('complexity', complexity)}
                className={`w-full text-left p-2 rounded-md text-sm transition-colors duration-200 ${
                  filters?.complexity === complexity
                    ? 'bg-accent/10 text-accent font-medium' :'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                {complexity}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Timeline</h4>
          <div className="space-y-1">
            {timelines?.map((timeline) => (
              <button
                key={timeline}
                onClick={() => onFilterChange('timeline', timeline)}
                className={`w-full text-left p-2 rounded-md text-sm transition-colors duration-200 ${
                  filters?.timeline === timeline
                    ? 'bg-accent/10 text-accent font-medium' :'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-border">
          <Button
            variant="default"
            size="sm"
            iconName="Sparkles"
            iconPosition="left"
            className="w-full bg-accent hover:bg-accent/90 mb-3"
          >
            Solution Matcher
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            className="w-full"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;