'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  HomeModernIcon,
  PaintBrushIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { submitQuote } from '../../utils/supabase';

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ServiceType = 'rental' | 'texture';
type HomeType = '1rk' | '1bhk' | '2bhk' | '3bhk' | 'villa' | 'other';
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const totalSteps = 4;

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedQuoteId, setSubmittedQuoteId] = useState<string | null>(null);
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

  useEffect(() => {
    if (!isOpen) return;
    setStep(1);
    setSubmitError(null);
    setSubmittedQuoteId(null);
    setIsSubmitting(false);
    setFormData({
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
  }, [isOpen]);

  const services: { id: ServiceType; name: string; icon: IconComponent; description: string }[] = [
    { id: 'rental', name: 'Wall Painting', icon: HomeModernIcon, description: 'Clean, durable finish for your home' },
    { id: 'texture', name: 'Texture Painting', icon: PaintBrushIcon, description: 'Premium textures for statement walls' },
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
    setFormData((prev) => {
      if (name === "phone") {
        return { ...prev, phone: value.replace(/\D/g, "").slice(0, 10) };
      }
      if (name === "pincode") {
        return { ...prev, pincode: value.replace(/\D/g, "").slice(0, 6) };
      }
      if (name === "numberOfWalls") {
        return { ...prev, numberOfWalls: value.replace(/\D/g, "").slice(0, 2) };
      }
      if (name === "area") {
        return { ...prev, area: value.replace(/\D/g, "").slice(0, 5) };
      }
      return { ...prev, [name]: value };
    });
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
      setSubmitError(null);
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitError(null);
    if (formData.name && formData.phone.length === 10) {
      setIsSubmitting(true);
      
      try {
        const result = await submitQuote(formData as any);
        
        if (result.success) {
          setSubmittedQuoteId(result.quoteId || "—");
        } else {
          setSubmitError(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('Network error. Please check your connection and try again.');
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

  const stepTitle =
    step === 1
      ? "Select service"
      : step === 2
        ? "Property details"
        : step === 3
          ? "Consultation type"
          : "Contact details";

  const selectedService = services.find((s) => s.id === formData.service);

  const canContinueStep2 = Boolean(formData.homeType);
  const canContinueStep3 =
    Boolean(formData.consultationType) &&
    formData.pincode.length === 6 &&
    (formData.consultationType === "call" || (Boolean(formData.date) && Boolean(formData.time)));
  const canSubmit = Boolean(formData.name.trim()) && formData.phone.length === 10 && !isSubmitting;

  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-3 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-3 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl border border-black/10 overflow-hidden">
                {/* Header */}
                <div className="px-5 pt-5 pb-4 border-b border-black/5 bg-white/80 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {step > 1 && !submittedQuoteId ? (
                          <button
                            type="button"
                            onClick={handleBack}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white hover:bg-slate-50"
                            aria-label="Back"
                          >
                            <ChevronLeftIcon className="h-5 w-5 text-slate-900" />
                          </button>
                        ) : null}
                        <div className="min-w-0">
                          <Dialog.Title className="text-lg font-semibold text-slate-950">
                            {submittedQuoteId ? "Quote request sent" : stepTitle}
                          </Dialog.Title>
                          <p className="mt-0.5 text-xs text-slate-600">
                            {submittedQuoteId ? "We’ll contact you shortly." : `Step ${step} of ${totalSteps}`}
                          </p>
                        </div>
                      </div>

                      {!submittedQuoteId ? (
                        <div className="mt-4 flex gap-2">
                          {Array.from({ length: totalSteps }).map((_, idx) => {
                            const active = idx + 1 <= step;
                            return (
                              <div
                                key={idx}
                                className={`h-1.5 flex-1 rounded-full ${
                                  active ? "bg-[var(--ph-primary)]" : "bg-slate-200"
                                }`}
                              />
                            );
                          })}
                        </div>
                      ) : null}
                    </div>

                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white hover:bg-slate-50"
                      aria-label="Close"
                    >
                      <XMarkIcon className="h-5 w-5 text-slate-900" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 py-6 max-h-[70vh] overflow-y-auto">
                  {submittedQuoteId ? (
                    <div className="text-center">
                      <div className="mx-auto h-14 w-14 rounded-3xl bg-emerald-500/12 flex items-center justify-center">
                        <CheckCircleIcon className="h-8 w-8 text-emerald-700" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                        Request received
                      </h3>
                      <p className="mt-2 text-sm text-slate-700">
                        Quote ID: <span className="font-semibold text-slate-950">{submittedQuoteId}</span>
                      </p>
                      <p className="mt-2 text-sm text-slate-700">
                        We’ll contact you on <span className="font-semibold text-slate-950">+91 {formData.phone}</span>.
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-3">
                        <a
                          href="tel:+918767520926"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/15 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                        >
                          <PhoneIcon className="h-4 w-4" />
                          Call support
                        </a>
                        <button
                          type="button"
                          onClick={onClose}
                          className="inline-flex items-center justify-center rounded-2xl bg-[var(--ph-accent)] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {submitError ? (
                        <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3">
                          <p className="text-sm font-semibold text-rose-900">{submitError}</p>
                        </div>
                      ) : null}

                      {/* Step 1 */}
                      {step === 1 && (
                        <div className="space-y-3">
                          <p className="text-sm text-slate-700">
                            Pick what you need. We’ll recommend the right finish + timeline.
                          </p>
                          {services.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => handleServiceSelect(service.id)}
                              className="w-full text-left ph-glass rounded-2xl p-4 transition-transform hover:-translate-y-0.5 cursor-pointer"
                            >
                              <div className="flex items-center gap-4">
                                <div className="h-11 w-11 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                                  <service.icon className="h-6 w-6 text-[var(--ph-primary)]" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-base font-semibold text-slate-950">{service.name}</p>
                                  <p className="mt-0.5 text-sm text-slate-700">{service.description}</p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Step 2 */}
                      {step === 2 && (
                        <div className="space-y-5">
                          <p className="text-sm text-slate-700">
                            Tell us the basics — enough for a quick estimate.
                          </p>

                          <div>
                            <label className="block text-sm font-semibold text-slate-950 mb-2">
                              Property type <span className="text-rose-600">*</span>
                            </label>
                            <select
                              name="homeType"
                              value={formData.homeType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
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
                              <label className="block text-sm font-semibold text-slate-950 mb-2">
                                Walls <span className="text-xs font-normal text-slate-600">(optional)</span>
                              </label>
                              <input
                                type="text"
                                inputMode="numeric"
                                name="numberOfWalls"
                                value={formData.numberOfWalls}
                                onChange={handleInputChange}
                                placeholder="e.g. 4"
                                className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-slate-950 mb-2">
                                Area (sq.ft.) <span className="text-xs font-normal text-slate-600">(optional)</span>
                              </label>
                              <input
                                type="text"
                                inputMode="numeric"
                                name="area"
                                value={formData.area}
                                onChange={handleInputChange}
                                placeholder="e.g. 1200"
                                className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-950 mb-2">
                              Paint type <span className="text-xs font-normal text-slate-600">(optional)</span>
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, paintType: 'new' }))}
                                className={`py-3 px-4 rounded-2xl border font-semibold transition-colors ${
                                  formData.paintType === 'new'
                                    ? 'border-[var(--ph-primary)] bg-[var(--ph-primary)] text-white'
                                    : 'border-black/10 bg-white/70 text-slate-900 hover:bg-white'
                                }`}
                              >
                                New paint
                              </button>
                              <button
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, paintType: 'repaint' }))}
                                className={`py-3 px-4 rounded-2xl border font-semibold transition-colors ${
                                  formData.paintType === 'repaint'
                                    ? 'border-[var(--ph-primary)] bg-[var(--ph-primary)] text-white'
                                    : 'border-black/10 bg-white/70 text-slate-900 hover:bg-white'
                                }`}
                              >
                                Repaint
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3 */}
                      {step === 3 && (
                        <div className="space-y-5">
                          <p className="text-sm text-slate-700">
                            Choose how you want to proceed. Visit gives the most accurate quote.
                          </p>

                          <div className="space-y-3">
                            {[
                              {
                                id: "visit",
                                title: "Schedule site visit",
                                desc: "We visit your property for accurate assessment.",
                              },
                              {
                                id: "call",
                                title: "Phone consultation",
                                desc: "Quick guidance and estimated range over a call.",
                              },
                            ].map((c) => {
                              const active = formData.consultationType === c.id;
                              return (
                                <button
                                  key={c.id}
                                  type="button"
                                  onClick={() => setFormData((prev) => ({ ...prev, consultationType: c.id }))}
                                  className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                                    active
                                      ? "border-[var(--ph-primary)] bg-[var(--ph-primary)]/10"
                                      : "border-black/10 bg-white/70 hover:bg-white"
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <div
                                      className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                                        active ? "border-[var(--ph-primary)]" : "border-slate-300"
                                      }`}
                                      aria-hidden="true"
                                    >
                                      {active ? (
                                        <div className="h-2.5 w-2.5 rounded-full bg-[var(--ph-primary)]" />
                                      ) : null}
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-base font-semibold text-slate-950">{c.title}</p>
                                      <p className="mt-0.5 text-sm text-slate-700">{c.desc}</p>
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {formData.consultationType ? (
                            <>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="md:col-span-2">
                                  <label className="block text-sm font-semibold text-slate-950 mb-2">
                                    Address <span className="text-xs font-normal text-slate-600">(optional)</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="House/Flat, Society, Area"
                                    className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-slate-950 mb-2">
                                    Pincode <span className="text-rose-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    placeholder="6 digits"
                                    inputMode="numeric"
                                    autoComplete="postal-code"
                                    className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                                  />
                                </div>
                              </div>

                              {formData.consultationType === "visit" ? (
                                <>
                                  <div>
                                    <p className="text-sm font-semibold text-slate-950 mb-3">Select date</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                      {getNextDates().map((dateObj) => (
                                        <button
                                          key={dateObj.fullDate}
                                          type="button"
                                          onClick={() => handleDateSelect(dateObj.fullDate)}
                                          className={`p-3 rounded-2xl border text-center transition-colors ${
                                            formData.date === dateObj.fullDate
                                              ? 'border-[var(--ph-primary)] bg-[var(--ph-primary)] text-white'
                                              : 'border-black/10 bg-white/70 text-slate-900 hover:bg-white'
                                          }`}
                                        >
                                          <div className="font-semibold">{dateObj.day}</div>
                                          <div className="text-xs opacity-90">{dateObj.date}</div>
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
                                          className="absolute inset-0 opacity-0"
                                        />
                                        <button
                                          type="button"
                                          onClick={openCustomDatePicker}
                                          className={`w-full h-full p-3 rounded-2xl border text-center transition-colors ${
                                            formData.date && !getNextDates().some((d) => d.fullDate === formData.date)
                                              ? 'border-[var(--ph-primary)] bg-[var(--ph-primary)] text-white'
                                              : 'border-black/10 bg-white/70 text-slate-900 hover:bg-white'
                                          }`}
                                        >
                                          <div className="font-semibold">
                                            {formData.date && !getNextDates().some((d) => d.fullDate === formData.date)
                                              ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short' })
                                              : "Custom"}
                                          </div>
                                          <div className="text-xs opacity-90">
                                            {formData.date && !getNextDates().some((d) => d.fullDate === formData.date)
                                              ? new Date(formData.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
                                              : "Pick a date"}
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <p className="text-sm font-semibold text-slate-950 mb-3">Select time</p>
                                    <div className="grid grid-cols-2 gap-2">
                                      {timeSlots.map((slot) => (
                                        <button
                                          key={slot}
                                          type="button"
                                          onClick={() => handleTimeSelect(slot)}
                                          className={`p-3 rounded-2xl border text-sm font-semibold transition-colors ${
                                            formData.time === slot
                                              ? 'border-[var(--ph-primary)] bg-[var(--ph-primary)] text-white'
                                              : 'border-black/10 bg-white/70 text-slate-900 hover:bg-white'
                                          }`}
                                        >
                                          {slot}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : null}
                            </>
                          ) : null}
                        </div>
                      )}

                      {/* Step 4 */}
                      {step === 4 && (
                        <div className="space-y-5">
                          <p className="text-sm text-slate-700">
                            Confirm your details. We’ll contact you to share the estimate and next steps.
                          </p>

                          <div>
                            <label className="block text-sm font-semibold text-slate-950 mb-2">
                              Full name <span className="text-rose-600">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your name"
                              autoComplete="name"
                              className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                              autoFocus
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-950 mb-2">
                              Mobile number <span className="text-rose-600">*</span>
                            </label>
                            <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 focus-within:ring-2 focus-within:ring-[var(--ph-primary)]/30 focus-within:border-[var(--ph-primary)]">
                              <span className="text-sm font-semibold text-slate-700">+91</span>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="10-digit number"
                                autoComplete="tel"
                                inputMode="tel"
                                className="min-w-0 flex-1 bg-transparent outline-none text-base text-slate-950 placeholder:text-slate-400"
                              />
                            </div>
                            <p className="mt-2 text-xs text-slate-600">
                              No spam. Just one call to confirm details.
                            </p>
                          </div>

                          <div className="ph-glass rounded-3xl p-6">
                            <p className="text-xs tracking-[0.18em] uppercase text-slate-600">Summary</p>
                            <div className="mt-3 space-y-1.5 text-sm text-slate-700">
                              <p>
                                <span className="font-semibold text-slate-950">Service:</span>{" "}
                                {selectedService?.name || "—"}
                              </p>
                              <p>
                                <span className="font-semibold text-slate-950">Property:</span>{" "}
                                {formData.homeType ? formData.homeType.toUpperCase() : "—"}
                                {formData.numberOfWalls ? ` • ${formData.numberOfWalls} walls` : ""}
                                {formData.area ? ` • ${formData.area} sq.ft.` : ""}
                              </p>
                              {formData.paintType ? (
                                <p>
                                  <span className="font-semibold text-slate-950">Paint type:</span>{" "}
                                  {formData.paintType === 'new' ? 'New paint' : 'Repaint'}
                                </p>
                              ) : null}
                              <p>
                                <span className="font-semibold text-slate-950">Consultation:</span>{" "}
                                {formData.consultationType === 'visit' ? 'Site visit' : 'Phone call'}
                              </p>
                              <p>
                                <span className="font-semibold text-slate-950">Location:</span>{" "}
                                {formData.address ? `${formData.address}, ${formData.pincode}` : `Pincode: ${formData.pincode}`}
                              </p>
                              {formData.consultationType === 'visit' ? (
                                <p>
                                  <span className="font-semibold text-slate-950">Visit:</span>{" "}
                                  {formData.date
                                    ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
                                    : "—"}{" "}
                                  {formData.time ? `at ${formData.time}` : ""}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Footer */}
                {!submittedQuoteId ? (
                  <div className="px-5 py-4 border-t border-black/5 bg-white/90">
                    {step === 2 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canContinueStep2}
                        className={`w-full py-3 rounded-2xl font-semibold transition-colors ${
                          canContinueStep2
                            ? 'bg-[var(--ph-accent)] text-white hover:opacity-95'
                            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        Continue
                      </button>
                    ) : null}

                    {step === 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canContinueStep3}
                        className={`w-full py-3 rounded-2xl font-semibold transition-colors ${
                          canContinueStep3
                            ? 'bg-[var(--ph-accent)] text-white hover:opacity-95'
                            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        Continue
                      </button>
                    ) : null}

                    {step === 4 ? (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className={`w-full py-3 rounded-2xl font-semibold transition-colors ${
                          canSubmit
                            ? 'bg-[var(--ph-accent)] text-white hover:opacity-95'
                            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? 'Submitting…' : 'Book free consultation'}
                      </button>
                    ) : null}
                  </div>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GetQuoteModal;
