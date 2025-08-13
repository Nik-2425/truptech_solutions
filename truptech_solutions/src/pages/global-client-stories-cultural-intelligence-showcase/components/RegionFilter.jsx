import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RegionFilter = ({ selectedRegion, onRegionChange, regions, industries, selectedIndustry, onIndustryChange }) => {
  const allRegions = [
    { id: 'all', name: 'All Regions', count: 68 },
    ...regions
  ];

  const allIndustries = [
    { id: 'all', name: 'All Industries', count: 68 },
    { id: 'fintech', name: 'FinTech', count: 18 },
    { id: 'healthcare', name: 'Healthcare', count: 12 },
    { id: 'ecommerce', name: 'E-commerce', count: 15 },
    { id: 'manufacturing', name: 'Manufacturing', count: 8 },
    { id: 'education', name: 'Education', count: 9 },
    { id: 'logistics', name: 'Logistics', count: 6 }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-6">Filter Stories</h3>
      {/* Region Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-card-foreground mb-3 flex items-center">
          <Icon name="Globe" size={16} className="mr-2" />
          By Region
        </h4>
        <div className="space-y-2">
          {allRegions?.map((region) => (
            <button
              key={region?.id}
              onClick={() => onRegionChange(region?.id === 'all' ? null : region)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                (selectedRegion?.id === region?.id) || (!selectedRegion && region?.id === 'all')
                  ? 'bg-accent/10 text-accent border border-accent/20' :'hover:bg-surface text-muted-foreground hover:text-card-foreground'
              }`}
            >
              <span className="text-sm">{region?.name}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded-full">
                {region?.count || region?.clientCount}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Industry Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-card-foreground mb-3 flex items-center">
          <Icon name="Building" size={16} className="mr-2" />
          By Industry
        </h4>
        <div className="space-y-2">
          {allIndustries?.map((industry) => (
            <button
              key={industry?.id}
              onClick={() => onIndustryChange(industry?.id === 'all' ? null : industry?.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                selectedIndustry === industry?.id || (!selectedIndustry && industry?.id === 'all')
                  ? 'bg-primary/10 text-primary border border-primary/20' :'hover:bg-surface text-muted-foreground hover:text-card-foreground'
              }`}
            >
              <span className="text-sm">{industry?.name}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded-full">
                {industry?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Quick Stats */}
      <div className="border-t border-border pt-6">
        <h4 className="text-sm font-medium text-card-foreground mb-3">Global Reach</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-surface rounded-lg">
            <div className="text-lg font-bold text-accent">25+</div>
            <div className="text-xs text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-3 bg-surface rounded-lg">
            <div className="text-lg font-bold text-trust-builder">12</div>
            <div className="text-xs text-muted-foreground">Time Zones</div>
          </div>
          <div className="text-center p-3 bg-surface rounded-lg">
            <div className="text-lg font-bold text-success">15+</div>
            <div className="text-xs text-muted-foreground">Languages</div>
          </div>
          <div className="text-center p-3 bg-surface rounded-lg">
            <div className="text-lg font-bold text-warning">98%</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
      {/* Clear Filters */}
      {(selectedRegion || selectedIndustry) && (
        <div className="border-t border-border pt-4 mt-6">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={() => {
              onRegionChange(null);
              onIndustryChange(null);
            }}
            iconName="X"
            iconPosition="left"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default RegionFilter;