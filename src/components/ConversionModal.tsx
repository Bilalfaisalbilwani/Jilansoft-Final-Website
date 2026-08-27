/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckSquare, Gift, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function ConversionModal() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Listen to custom event to open the modal
    const handleOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-conversion-modal', handleOpen);

    return () => {
      window.removeEventListener('open-conversion-modal', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      localStorage.setItem('nexus-lead-popup-dismissed', 'true');
    } catch (e) {
      // safe ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate server side lead capturing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Delay dismissal after beautiful success display
      setTimeout(() => {
        setIsOpen(false);
        try {
          localStorage.setItem('nexus-lead-popup-dismissed', 'true');
        } catch (err) {
          // safe ignore
        }
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-scale-in"
      id="conversion-modal-overlay"
    >
      <div 
        className={`relative w-full max-w-[560px] rounded-2xl overflow-hidden p-6 sm:p-10 text-center shadow-2xl border transition-colors duration-300 ${
          theme === 'light'
            ? 'bg-white border-neutral-200 text-neutral-800'
            : 'bg-gradient-to-br from-[#111128] to-[#0A0A14] border-[#7C3AED]/30 text-white'
        }`}
        id="conversion-modal-card"
      >
        {/* Dismiss trigger */}
        <button
          onClick={handleClose}
          aria-label="Dismiss offer"
          className={`absolute top-4 right-4 p-1.5 rounded-full transition cursor-pointer ${
            theme === 'light' ? 'hover:bg-neutral-200 text-neutral-500' : 'hover:bg-white/5 text-[#6B6590]'
          }`}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          /* High conversion success screen state */
          <div className="py-12 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-500 mb-2 animate-bounce">
              ✓
            </div>
            <h3 className="font-display text-2xl font-extrabold">Audit Claimed!</h3>
            <p className={`text-sm leading-relaxed max-w-sm ${theme === 'light' ? 'text-neutral-500' : 'text-[#A09BB8]'}`}>
              Excellent choice. We've reserved your assessment slot. A lead product architect will connect with you via {email} shortly!
            </p>
          </div>
        ) : (
          /* Audit offering details state */
          <div className="flex flex-col items-center">
            
            {/* Promo visual banner */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 mb-6 animate-pulse">
              <Gift size={13} strokeWidth={2.5} /> Limited Free Assessment ($499 Value)
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-4 text-left sm:text-center">
              Claim Your Free 1-on-1 <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'light' ? 'from-blue-600 to-indigo-500' : 'from-[#A855F7] via-[#7C3AED] to-[#C084FC]'
              }`}>Growth & Tech Audit</span>
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed mb-8 text-left sm:text-center ${theme === 'light' ? 'text-neutral-500' : 'text-[#A09BB8]'}`}>
              Double your sales both locally and internationally. Get a rigorous customized analysis of your current website, competitor software gaps, and actionable SEO scaling pathways.
            </p>

            {/* Feature tick parameters */}
            <div className="flex flex-col gap-3 font-semibold text-xs text-left mb-8 w-full max-w-sm">
              <div className="flex items-center gap-2.5">
                <CheckSquare size={14} className={theme === 'light' ? 'text-blue-600' : 'text-[#A855F7]'} />
                <span>Custom codebase & speed bottleneck report</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckSquare size={14} className={theme === 'light' ? 'text-blue-600' : 'text-[#A855F7]'} />
                <span>Competitor software & positioning audit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckSquare size={14} className={theme === 'light' ? 'text-blue-600' : 'text-[#A855F7]'} />
                <span>Timeframe execution quote & scaling pathways</span>
              </div>
            </div>

            {/* Direct Intake fields */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3.5">
              <input
                required
                type="email"
                placeholder="Enter your professional email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition-colors ${
                  theme === 'light'
                    ? 'bg-white border-neutral-300 text-neutral-800 placeholder-neutral-400 focus:border-blue-500'
                    : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50'
                }`}
              />

              <input
                required
                type="url"
                placeholder="Your current website URL (e.g. company.com)"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition-colors ${
                  theme === 'light'
                    ? 'bg-white border-neutral-300 text-neutral-800 placeholder-neutral-400 focus:border-blue-500'
                    : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50'
                }`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-center font-bold text-sm text-white shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-500 shadow-blue-500/25 hover:shadow-blue-500/40'
                    : 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] shadow-purple-500/25 hover:shadow-purple-500/40'
                }`}
              >
                {isSubmitting ? 'Reserving slot...' : 'Claim Free Audit Now'} <ArrowRight size={14} />
              </button>
            </form>

            <span className={`text-[10px] mt-4 uppercase tracking-widest font-bold ${theme === 'light' ? 'text-neutral-400' : 'text-[#6B6590]'}`}>
              🔒 100% confidential · no credit card required
            </span>

          </div>
        )}

      </div>
    </div>
  );
}
