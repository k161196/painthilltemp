'use client';

import React, { useState } from 'react';
import { submitQuote } from '../../utils/supabase';

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ServiceType = 'rental' | 'texture';
type HomeType = '1rk' | '1bhk' | '2bhk' | '3bhk' | 'villa' | 'other';

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    service: '' as ServiceType | '',
    name: '',
    address: '',
    pincode: '',
    homeType: '' as HomeType | '',
    numberOfWalls: '',
    area: '',
    paintType: '',
    consultationType: '',
    date: '',
    time: '',
  });

  const services = [
    { id: 'rental', name: 'Rental Painting', icon: '🏠', description: 'Complete home painting' },
    { id: 'texture', name: 'Texture Painting', icon: '🎨', description: 'Designer wall textures' },
  ];

  const timeSlots = [
    '9:00 - 10:30 AM',
    '10:30 - 12:00 PM',
    '12:00 - 1:30 PM',
    '3:00 - 4:30 PM',
    '4:30 - 6:00 PM',
    '6:00 - 7:30 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (serviceId: ServiceType) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
    setStep(2);
  };

  const handleDateSelect = (date: string) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time }));
  };

  const openCustomDatePicker = () => {
    const dateInput = document.getElementById('customDateInput') as HTMLInputElement;
    if (dateInput) {
      if (dateInput.showPicker) {
        dateInput.showPicker();
      } else {
        dateInput.click();
      }
    }
  };

  const handleNext = () => {
    if (step === 2 && formData.homeType) {
      setStep(3);
    } else if (step === 3 && formData.consultationType && formData.pincode) {
      if (formData.consultationType === 'visit' && formData.date && formData.time) {
        setStep(4);
      } else if (formData.consultationType === 'call') {
        setStep(4);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (formData.name && formData.phone.length === 10) {
      setIsSubmitting(true);
      
      try {
        const result = await submitQuote(formData as any);
        
        if (result.success) {
          // Success - show success message
          alert(`🎉 Thank you ${formData.name}! Your quote request has been submitted successfully.\n\nQuote ID: ${result.quoteId}\n\nWe'll contact you soon on ${formData.phone}.`);
          
          // Reset form
          setStep(1);
          setFormData({
            phone: '',
            service: '',
            name: '',
            address: '',
            pincode: '',
            homeType: '',
            numberOfWalls: '',
            area: '',
            paintType: '',
            consultationType: '',
            date: '',
            time: '',
          });
          onClose();
        } else {
          // Error - show error message
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getNextDates = () => {
    const dates = [];
    const today = new Date();
    // Start from day after tomorrow (i = 2)
    for (let i = 2; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        fullDate: date.toISOString().split('T')[0]
      });
    }
    return dates;
  };

  const getMinDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 2); // Day after tomorrow
    return date.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex items-end sm:items-center justify-center min-h-screen">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" 
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="relative bg-white w-full sm:max-w-md sm:mx-auto rounded-t-2xl sm:rounded-2xl shadow-xl transform transition-all flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="sticky top-0 bg-white rounded-t-2xl sm:rounded-t-2xl border-b border-linegrey px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {step > 1 && (
                  <button onClick={handleBack} className="text-grey hover:text-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                <h3 className="text-lg font-semibold text-black">
                  {step === 1 && 'Select Service'}
                  {step === 2 && 'Property Type'}
                  {step === 3 && 'Consultation Type'}
                  {step === 4 && 'Contact Details'}
                </h3>
              </div>
              <button onClick={onClose} className="text-grey hover:text-darkgrey">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content - scrollable */}
          <div className="px-4 py-6 flex-1 overflow-y-auto">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">What service do you need?</p>
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id as ServiceType)}
                    className="w-full flex items-center p-4 border border-linegrey rounded-lg hover:border-blue hover:bg-blue/5 transition-all"
                  >
                    <div className="text-3xl mr-4">{service.icon}</div>
                    <div className="text-left flex-1">
                      <h4 className="font-medium text-black">{service.name}</h4>
                      <p className="text-sm text-grey">{service.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Property Type */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-grey mb-4">Tell us about your property</p>
                
                <div>
                  <label className="block text-sm font-medium text-darkgrey mb-2">
                    Property Type *
                  </label>
                  <select
                    name="homeType"
                    value={formData.homeType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-linegrey rounded-lg focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
                    autoFocus
                  >
                    <option value="">Select property type</option>
                    <option value="1rk">1 RK</option>
                    <option value="1bhk">1 BHK</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="villa">Villa</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-darkgrey mb-2">
                      Number of Walls
                      <span className="text-xs text-grey ml-1">(Optional)</span>
                    </label>
                    <input
                      type="number"
                      name="numberOfWalls"
                      value={formData.numberOfWalls}
                      onChange={handleInputChange}
                      placeholder="e.g. 4"
                      min="1"
                      max="50"
                      className="w-full px-3 py-2 border border-linegrey rounded-lg focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-darkgrey mb-2">
                      Area (sq.ft.)
                      <span className="text-xs text-grey ml-1">(Optional)</span>
                    </label>
                    <input
                      type="number"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      placeholder="e.g. 1200"
                      min="1"
                      className="w-full px-3 py-2 border border-linegrey rounded-lg focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkgrey mb-2">
                    Paint Type
                    <span className="text-xs text-grey ml-1">(Optional)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, paintType: 'new' }))}
                      className={`py-3 px-4 border rounded-lg font-medium transition-all ${
                        formData.paintType === 'new'
                          ? 'border-blue bg-blue text-white'
                          : 'border-linegrey text-darkgrey hover:border-blue'
                      }`}
                    >
                      New Paint
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, paintType: 'repaint' }))}
                      className={`py-3 px-4 border rounded-lg font-medium transition-all ${
                        formData.paintType === 'repaint'
                          ? 'border-blue bg-blue text-white'
                          : 'border-linegrey text-darkgrey hover:border-blue'
                      }`}
                    >
                      Repaint
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* Step 3: Consultation Type */}
            {step === 3 && (
              <div className="space-y-4">
                <p className="text-sm text-grey mb-4">How would you like to proceed?</p>
                
                {/* Consultation Type Selection */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, consultationType: 'visit' }))}
                    className={`w-full p-4 border rounded-lg text-left transition-all ${
                      formData.consultationType === 'visit'
                        ? 'border-blue bg-blue/5'
                        : 'border-linegrey hover:border-blue'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.consultationType === 'visit' ? 'border-blue' : 'border-grey'
                        }`}>
                          {formData.consultationType === 'visit' && (
                            <div className="w-3 h-3 rounded-full bg-blue"></div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-black">Schedule Site Visit</h4>
                        <p className="text-sm text-grey">Our expert will visit your property for accurate assessment</p>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, consultationType: 'call' }))}
                    className={`w-full p-4 border rounded-lg text-left transition-all ${
                      formData.consultationType === 'call'
                        ? 'border-blue bg-blue/5'
                        : 'border-linegrey hover:border-blue'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.consultationType === 'call' ? 'border-blue' : 'border-grey'
                        }`}>
                          {formData.consultationType === 'call' && (
                            <div className="w-3 h-3 rounded-full bg-blue"></div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-black">Phone Consultation</h4>
                        <p className="text-sm text-grey">Get expert advice over a phone call</p>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Show address fields for both consultation types */}
                {formData.consultationType && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-darkgrey mb-2">
                          Property Address
                          <span className="text-xs text-grey ml-1">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="House/Flat No, Society, Area"
                          className="w-full px-3 py-2 border border-linegrey rounded-lg focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-darkgrey mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="6 digits"
                          maxLength={6}
                          pattern="[0-9]{6}"
                          className="w-full px-3 py-2 border border-linegrey rounded-lg focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
                        />
                      </div>
                    </div>

                    {/* Show date/time selection only for site visit */}
                    {formData.consultationType === 'visit' && (
                      <>
                        <div>
                          <h4 className="font-medium text-black mb-3">Select Date</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {getNextDates().map((dateObj) => (
                              <button
                                key={dateObj.fullDate}
                                onClick={() => handleDateSelect(dateObj.fullDate)}
                                className={`p-3 border rounded-lg text-center transition-all ${
                                  formData.date === dateObj.fullDate
                                    ? 'border-blue bg-blue text-white'
                                    : 'border-linegrey hover:border-blue'
                                }`}
                              >
                                <div className="font-medium">{dateObj.day}</div>
                                <div className="text-sm">{dateObj.date}</div>
                              </button>
                            ))}
                            <div className="relative">
                              <input
                                id="customDateInput"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                min={getMinDate()}
                                className={`w-full h-full p-3 border rounded-lg text-center cursor-pointer focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all ${
                                  formData.date && !getNextDates().some(d => d.fullDate === formData.date)
                                    ? 'border-blue bg-blue text-white opacity-0'
                                    : 'border-linegrey hover:border-blue opacity-0'
                                }`}
                              />
                              <div 
                                onClick={openCustomDatePicker}
                                className={`absolute inset-0 p-3 border rounded-lg text-center cursor-pointer transition-all ${
                                  formData.date && !getNextDates().some(d => d.fullDate === formData.date)
                                    ? 'border-blue bg-blue text-white'
                                    : 'border-linegrey hover:border-blue'
                                }`}
                              >
                                {formData.date && !getNextDates().some(d => d.fullDate === formData.date) ? (
                                  <>
                                    <div className="font-medium">
                                      {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short' })}
                                    </div>
                                    <div className="text-sm">
                                      {new Date(formData.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="font-medium">Custom</div>
                                    <div className="text-sm">
                                      <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-black mb-3">Select Time</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot}
                                onClick={() => handleTimeSelect(slot)}
                                className={`p-3 border rounded-lg text-sm transition-all ${
                                  formData.time === slot
                                    ? 'border-blue bg-blue text-white'
                                    : 'border-linegrey hover:border-blue'
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

              </div>
            )}

            {/* Step 4: Name & Phone Number */}
            {step === 4 && (
              <div>
                <p className="text-sm text-grey mb-6">Enter your details to confirm booking</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-darkgrey mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-linegrey rounded-lg focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-darkgrey mb-2">
                      Mobile Number
                    </label>
                    <div className="flex items-center border border-linegrey rounded-lg px-3 py-2 focus-within:border-blue focus-within:ring-1 focus-within:ring-blue">
                      <span className="text-grey mr-2">🇮🇳 +91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Mobile Number"
                        maxLength={10}
                        className="flex-1 outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-lightgrey p-4 rounded-lg">
                    <p className="text-sm text-grey">
                      <span className="font-medium">Service:</span> {services.find(s => s.id === formData.service)?.name}<br />
                      <span className="font-medium">Property:</span> {formData.homeType?.toUpperCase()}
                      {formData.numberOfWalls && ` • ${formData.numberOfWalls} walls`}
                      {formData.area && ` • ${formData.area} sq.ft.`}<br />
                      {formData.paintType && (
                        <>
                          <span className="font-medium">Paint Type:</span> {formData.paintType === 'new' ? 'New Paint' : 'Repaint'}<br />
                        </>
                      )}
                      <span className="font-medium">Consultation:</span> {formData.consultationType === 'visit' ? 'Site Visit' : 'Phone Call'}<br />
                      <span className="font-medium">Location:</span> {formData.address ? `${formData.address}, ${formData.pincode}` : `Pincode: ${formData.pincode}`}<br />
                      {formData.consultationType === 'visit' && (
                        <>
                          <span className="font-medium">Visit:</span> {formData.date && new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {formData.time}<br />
                        </>
                      )}
                    </p>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Sticky Footer with Action Button */}
          <div className="sticky bottom-0 bg-white border-t border-linegrey px-4 py-4 rounded-b-2xl sm:rounded-b-2xl">
            {step === 2 && (
              <button
                onClick={handleNext}
                disabled={!formData.homeType}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  formData.homeType
                    ? 'bg-blue text-white hover:bg-btnblue'
                    : 'bg-bggrey text-grey cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            )}
            {step === 3 && (
              <button
                onClick={handleNext}
                disabled={
                  !formData.consultationType || 
                  !formData.pincode || 
                  formData.pincode.length !== 6 ||
                  (formData.consultationType === 'visit' && (!formData.date || !formData.time))
                }
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  formData.consultationType && 
                  formData.pincode && 
                  formData.pincode.length === 6 &&
                  (formData.consultationType === 'call' || 
                   (formData.consultationType === 'visit' && formData.date && formData.time))
                    ? 'bg-blue text-white hover:bg-btnblue'
                    : 'bg-bggrey text-grey cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            )}
            {step === 4 && (
              <button
                onClick={handleSubmit}
                disabled={!formData.name || formData.phone.length !== 10 || isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  formData.name && formData.phone.length === 10 && !isSubmitting
                    ? 'bg-blue text-white hover:bg-btnblue'
                    : 'bg-bggrey text-grey cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteModal;