import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const [animatedStats, setAnimatedStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
    clientSatisfaction: 0
  });

  const finalStats = {
    totalProjects: 247,
    activeProjects: 23,
    completedProjects: 224,
    clientSatisfaction: 98.5
  };

  const statsConfig = [
    {
      key: 'totalProjects',
      label: 'Total Projects',
      icon: 'FolderOpen',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      suffix: '+'
    },
    {
      key: 'activeProjects',
      label: 'Active Projects',
      icon: 'Activity',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      suffix: ''
    },
    {
      key: 'completedProjects',
      label: 'Completed Projects',
      icon: 'CheckCircle',
      color: 'text-success',
      bgColor: 'bg-success/10',
      suffix: ''
    },
    {
      key: 'clientSatisfaction',
      label: 'Client Satisfaction',
      icon: 'Heart',
      color: 'text-error',
      bgColor: 'bg-error/10',
      suffix: '%'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        totalProjects: Math.floor(finalStats?.totalProjects * easeOutQuart),
        activeProjects: Math.floor(finalStats?.activeProjects * easeOutQuart),
        completedProjects: Math.floor(finalStats?.completedProjects * easeOutQuart),
        clientSatisfaction: Math.floor(finalStats?.clientSatisfaction * easeOutQuart * 10) / 10
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsConfig?.map((stat) => (
        <div 
          key={stat?.key}
          className="bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat?.bgColor} rounded-xl flex items-center justify-center`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-card-foreground">
                {animatedStats?.[stat?.key]}{stat?.suffix}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          </div>
          
          {/* Progress indicator for active stats */}
          {stat?.key === 'activeProjects' && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">This Month</span>
                <span className="text-xs text-success">+3 new</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-warning h-1 rounded-full w-3/4 transition-all duration-1000" />
              </div>
            </div>
          )}

          {/* Satisfaction rating */}
          {stat?.key === 'clientSatisfaction' && (
            <div className="mt-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <Icon 
                    key={star}
                    name="Star" 
                    size={14} 
                    className={`${
                      star <= 5 ? 'text-warning fill-current' : 'text-muted'
                    }`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-2">
                  Based on 224 reviews
                </span>
              </div>
            </div>
          )}

          {/* Completion trend */}
          {stat?.key === 'completedProjects' && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Completion Rate</span>
                <span className="text-xs text-success">91%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-success h-1 rounded-full w-11/12 transition-all duration-1000" />
              </div>
            </div>
          )}

          {/* Total projects growth */}
          {stat?.key === 'totalProjects' && (
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={14} className="text-success" />
                <span className="text-xs text-success">+15% this quarter</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;