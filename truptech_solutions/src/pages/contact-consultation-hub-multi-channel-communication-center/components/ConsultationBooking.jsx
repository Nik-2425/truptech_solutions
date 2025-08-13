import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState('');

  const consultationTypes = [
    {
      value: 'discovery',
      label: 'Discovery Call (30 min)',
      description: 'Initial discussion about your project needs and goals',
      icon: 'Search',
      duration: '30 minutes',
      price: 'Free'
    },
    {
      value: 'technical',
      label: 'Technical Consultation (60 min)',
      description: 'Deep dive into technical requirements and solutions',
      icon: 'Code',
      duration: '60 minutes',
      price: 'Free'
    },
    {
      value: 'strategy',
      label: 'Strategy Session (90 min)',
      description: 'Comprehensive technology strategy and roadmap planning',
      icon: 'Target',
      duration: '90 minutes',
      price: '$150 (Refundable)'
    },
    {
      value: 'workshop',
      label: 'Team Workshop (2-4 hours)',
      description: 'Collaborative session with your team for project planning',
      icon: 'Users',
      duration: '2-4 hours',
      price: '$300 (Refundable)'
    }
  ];

  const availableDates = [
    { value: '2025-01-13', label: 'Monday, January 13, 2025' },
    { value: '2025-01-14', label: 'Tuesday, January 14, 2025' },
    { value: '2025-01-15', label: 'Wednesday, January 15, 2025' },
    { value: '2025-01-16', label: 'Thursday, January 16, 2025' },
    { value: '2025-01-17', label: 'Friday, January 17, 2025' },
    { value: '2025-01-20', label: 'Monday, January 20, 2025' },
    { value: '2025-01-21', label: 'Tuesday, January 21, 2025' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM', available: true },
    { value: '10:00', label: '10:00 AM', available: true },
    { value: '11:00', label: '11:00 AM', available: false },
    { value: '14:00', label: '2:00 PM', available: true },
    { value: '15:00', label: '3:00 PM', available: true },
    { value: '16:00', label: '4:00 PM', available: true },
    { value: '17:00', label: '5:00 PM', available: false }
  ];

  const timezones = [
    { value: 'est', label: 'Eastern Time (EST/EDT)' },
    { value: 'cst', label: 'Central Time (CST/CDT)' },
    { value: 'pst', label: 'Pacific Time (PST/PDT)' },
    { value: 'utc', label: 'UTC/GMT' },
    { value: 'ist', label: 'India Standard Time (IST)' },
    { value: 'cet', label: 'Central European Time (CET)' }
  ];

  const handleBooking = () => {
    if (!selectedType || !selectedDate || !selectedTime || !selectedTimezone) {
      alert('Please select all required fields to book your consultation.');
      return;
    }

    const selectedConsultation = consultationTypes?.find(type => type?.value === selectedType);
    const selectedDateLabel = availableDates?.find(date => date?.value === selectedDate)?.label;
    const selectedTimeLabel = timeSlots?.find(time => time?.value === selectedTime)?.label;
    const selectedTimezoneLabel = timezones?.find(tz => tz?.value === selectedTimezone)?.label;

    alert(`Consultation Booked Successfully!\n\nType: ${selectedConsultation?.label}\nDate: ${selectedDateLabel}\nTime: ${selectedTimeLabel}\nTimezone: ${selectedTimezoneLabel}\n\nYou'll receive a confirmation email with meeting details shortly.`);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Book Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Schedule a personalized consultation with our technology experts. Choose the format that best fits your needs and timeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Consultation Types */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Choose Consultation Type
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {consultationTypes?.map((type) => (
                <div
                  key={type?.value}
                  className={`relative bg-card rounded-lg p-6 border-2 cursor-pointer transition-all duration-200 hover:shadow-elevated ${
                    selectedType === type?.value
                      ? 'border-accent shadow-lg'
                      : 'border-border hover:border-accent/50'
                  }`}
                  onClick={() => setSelectedType(type?.value)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedType === type?.value ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                    }`}>
                      <Icon name={type?.icon} size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{type?.label}</h4>
                        <span className={`text-sm font-medium ${
                          type?.price === 'Free' ? 'text-success' : 'text-accent'
                        }`}>
                          {type?.price}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {type?.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>{type?.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {selectedType === type?.value && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Date and Time Selection */}
            {selectedType && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Select Date"
                    placeholder="Choose a date"
                    options={availableDates}
                    value={selectedDate}
                    onChange={setSelectedDate}
                    required
                  />
                  
                  <Select
                    label="Select Timezone"
                    placeholder="Choose your timezone"
                    options={timezones}
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                    searchable
                    required
                  />
                </div>

                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots?.map((slot) => (
                        <button
                          key={slot?.value}
                          onClick={() => slot?.available && setSelectedTime(slot?.value)}
                          disabled={!slot?.available}
                          className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            !slot?.available
                              ? 'bg-muted text-muted-foreground cursor-not-allowed'
                              : selectedTime === slot?.value
                              ? 'bg-accent text-white shadow-lg'
                              : 'bg-card border border-border hover:border-accent text-foreground hover:shadow-md'
                          }`}
                        >
                          {slot?.label}
                          {!slot?.available && (
                            <div className="text-xs mt-1">Booked</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 border border-border sticky top-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Booking Summary
              </h3>

              {selectedType ? (
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <div className="font-medium text-foreground">
                      {consultationTypes?.find(type => type?.value === selectedType)?.label}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {consultationTypes?.find(type => type?.value === selectedType)?.description}
                    </div>
                    <div className="text-accent font-medium mt-2">
                      {consultationTypes?.find(type => type?.value === selectedType)?.price}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="pb-4 border-b border-border">
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="font-medium text-foreground">
                        {availableDates?.find(date => date?.value === selectedDate)?.label}
                      </div>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="pb-4 border-b border-border">
                      <div className="text-sm text-muted-foreground">Time</div>
                      <div className="font-medium text-foreground">
                        {timeSlots?.find(time => time?.value === selectedTime)?.label}
                        {selectedTimezone && (
                          <span className="text-muted-foreground ml-2">
                            ({timezones?.find(tz => tz?.value === selectedTimezone)?.label})
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <Button
                    variant="default"
                    size="lg"
                    fullWidth
                    onClick={handleBooking}
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={!selectedDate || !selectedTime || !selectedTimezone}
                  >
                    Book Consultation
                  </Button>

                  <div className="text-xs text-muted-foreground text-center">
                    You'll receive a confirmation email with meeting details and calendar invite.
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon name="Calendar" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Select a consultation type to see available slots
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;