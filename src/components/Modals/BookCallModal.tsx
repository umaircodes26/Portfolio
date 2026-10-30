import React, { useState } from 'react';
import { X, Check, Calendar, Clock, Sparkles } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('UI/UX Design');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: '',
    budget: '$5k - $15k',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200/80 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900">
              Consultation Request Received!
            </h3>
            <p className="text-sm text-neutral-600 max-w-xs mx-auto">
              Thank you, {formData.name || 'there'}! I'll review your project details and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-[11px] font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Winter Deal • Free 30-min Consultation</span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Let's discuss your project goals, timelines, and how we can bring your vision to life.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection Pills */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Branding', 'Web Development', 'Design System'].map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setSelectedService(svc)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedService === svc
                          ? 'bg-neutral-900 text-white shadow-xs'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                  Brief Project Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me a bit about your product, timeline, or current challenges..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Confirm Free Consultation
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-400 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 30 Minutes
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> No obligation
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

