import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveWorldMap = ({ onRegionSelect, selectedRegion }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

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

  return (
    <div className="relative w-full h-96 bg-surface rounded-xl border border-border overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full opacity-20"
          fill="currentColor"
        >
          {/* Simplified world map paths */}
          <path d="M150,100 L300,80 L350,120 L300,180 L150,160 Z" className="text-muted-foreground" />
          <path d="M400,80 L600,70 L650,140 L580,200 L400,180 Z" className="text-muted-foreground" />
          <path d="M700,120 L900,100 L950,180 L850,250 L700,220 Z" className="text-muted-foreground" />
          <path d="M450,220 L550,210 L580,280 L480,300 Z" className="text-muted-foreground" />
          <path d="M480,320 L580,310 L600,380 L500,400 Z" className="text-muted-foreground" />
        </svg>
      </div>
      {/* Interactive Region Markers */}
      {regions?.map((region) => (
        <div
          key={region?.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={region?.position}
          onMouseEnter={() => setHoveredRegion(region?.id)}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => onRegionSelect(region)}
        >
          {/* Pulse Animation */}
          <div className={`absolute inset-0 ${region?.color} rounded-full animate-ping opacity-30`}></div>
          
          {/* Main Marker */}
          <div
            className={`relative w-8 h-8 ${region?.color} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
              selectedRegion?.id === region?.id
                ? 'scale-125 shadow-xl'
                : hoveredRegion === region?.id
                ? 'scale-110' :'hover:scale-105'
            }`}
          >
            <span className="text-xs font-bold">{region?.clientCount}</span>
          </div>

          {/* Tooltip */}
          {(hoveredRegion === region?.id || selectedRegion?.id === region?.id) && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-popover border border-border rounded-lg shadow-elevated p-3 min-w-48 z-10">
              <h4 className="font-semibold text-popover-foreground mb-1">{region?.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {region?.clientCount} active clients
              </p>
              <div className="text-xs text-muted-foreground">
                {region?.countries?.join(', ')}
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-popover border-l border-t border-border rotate-45"></div>
            </div>
          )}
        </div>
      ))}
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="MapPin" size={16} className="text-accent" />
          <span className="text-muted-foreground">Click regions to explore client stories</span>
        </div>
      </div>
      {/* Global Stats */}
      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">68</div>
          <div className="text-xs text-muted-foreground">Global Clients</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWorldMap;