'use client';

import { useState } from "react";
import { submitMessage } from "../utils/supabase";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import PageHero from "../components/SitePages/PageHero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Supabase
      const result = await submitMessage(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        console.error('Submission failed:', result.message);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Contact"
        title="Talk to Paint Hill."
        lead="Tell us what you’re painting and your timeline. We’ll reply with clear next steps — visit or call."
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="ph-glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Send a message</h2>
            <p className="mt-2 text-sm text-slate-700">
              Share a few details. We usually respond during business hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-950 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-950 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-950 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-950 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)]"
                >
                  <option value="">Select a service</option>
                  <option value="rental">Wall Painting</option>
                  <option value="texture">Texture Painting</option>
                  <option value="interior">Interior Design</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-950 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 text-base text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ph-primary)]/30 focus:border-[var(--ph-primary)] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-2xl font-semibold transition-colors mt-2 ${
                  isSubmitting
                    ? 'bg-slate-400 text-white cursor-not-allowed'
                    : 'bg-[var(--ph-accent)] text-white hover:opacity-95'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              <div aria-live="polite" className="pt-2">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                    <p className="text-emerald-900 text-center text-sm font-semibold">
                      Message sent. We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl">
                    <p className="text-rose-900 text-center text-sm font-semibold">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="ph-glass rounded-3xl p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Contact info
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-10 w-10 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                    <MapPinIcon className="h-5 w-5 text-[var(--ph-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Office</p>
                    <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                      Kalina, Santacruz East<br />
                      Mumbai 400029<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-10 w-10 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-[var(--ph-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Phone</p>
                    <a href="tel:+918767520926" className="mt-1 inline-block text-sm text-slate-700 hover:text-slate-950">
                      +91 8767520926
                    </a>
                    <p className="mt-1 text-xs text-slate-600">Mon–Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-10 w-10 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                    <EnvelopeIcon className="h-5 w-5 text-[var(--ph-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Email</p>
                    <a href="mailto:support@painthill.in" className="mt-1 inline-block text-sm text-slate-700 hover:text-slate-950">
                      support@painthill.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-10 w-10 rounded-2xl bg-[var(--ph-primary)]/12 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-[var(--ph-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">WhatsApp</p>
                    <a href="https://wa.me/918767520926" className="mt-1 inline-block text-sm text-slate-700 hover:text-slate-950">
                      +91 8767520926
                    </a>
                    <p className="mt-1 text-xs text-slate-600">Quick replies during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 p-8">
              <h3 className="text-base font-semibold text-slate-950">Business hours</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="flex justify-between gap-6">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Saturday</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Sunday</span>
                  <span className="font-semibold text-slate-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
