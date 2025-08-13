import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterBar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  projectCount,
  viewMode,
  onViewModeChange 
}) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'e-commerce', label: 'E-Commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'education', label: 'Education' },
    { value: 'real-estate', label: 'Real Estate' }
  ];

  const technologyOptions = [
    { value: 'all', label: 'All Technologies' },
    { value: 'ai-implementation', label: 'AI Implementation' },
    { value: 'automation-deployment', label: 'Automation Deployment' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'cloud-migration', label: 'Cloud Migration' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'web-development', label: 'Web Development' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'planning', label: 'Planning' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'on-hold', label: 'On Hold' }
  ];

  const scaleOptions = [
    { value: 'all', label: 'All Scales' },
    { value: 'small', label: 'Small (< $50K)' },
    { value: 'medium', label: 'Medium ($50K - $200K)' },
    { value: 'large', label: 'Large ($200K - $500K)' },
    { value: 'enterprise', label: 'Enterprise (> $500K)' }
  ];

  const hasActiveFilters = Object.values(filters)?.some(value => value !== 'all');

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-accent" />
          <h2 className="text-lg font-semibold text-card-foreground">Filter Projects</h2>
          <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
            {projectCount} projects
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-surface rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' ?'bg-accent text-accent-foreground shadow-sm' :'text-muted-foreground hover:text-card-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ?'bg-accent text-accent-foreground shadow-sm' :'text-muted-foreground hover:text-card-foreground'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              className="text-muted-foreground hover:text-card-foreground"
            >
              Clear All
            </Button>
          )}
        </div>
      </div>
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          label="Industry"
          options={industryOptions}
          value={filters?.industry}
          onChange={(value) => onFilterChange('industry', value)}
          className="w-full"
        />

        <Select
          label="Technology Focus"
          options={technologyOptions}
          value={filters?.technology}
          onChange={(value) => onFilterChange('technology', value)}
          className="w-full"
        />

        <Select
          label="Project Status"
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => onFilterChange('status', value)}
          className="w-full"
        />

        <Select
          label="Project Scale"
          options={scaleOptions}
          value={filters?.scale}
          onChange={(value) => onFilterChange('scale', value)}
          className="w-full"
        />
      </div>
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="text-sm font-medium text-card-foreground">Active filters:</span>
            {Object.entries(filters)?.map(([key, value]) => {
              if (value === 'all') return null;
              
              const getFilterLabel = (filterKey, filterValue) => {
                const optionsMap = {
                  industry: industryOptions,
                  technology: technologyOptions,
                  status: statusOptions,
                  scale: scaleOptions
                };
                const option = optionsMap?.[filterKey]?.find(opt => opt?.value === filterValue);
                return option ? option?.label : filterValue;
              };

              return (
                <span 
                  key={key}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                >
                  <span>{getFilterLabel(key, value)}</span>
                  <button
                    onClick={() => onFilterChange(key, 'all')}
                    className="hover:bg-accent/20 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;