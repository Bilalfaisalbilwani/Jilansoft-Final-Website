/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, MessageSquare, Send, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeContext';

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.706 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function WhatsAppWidget() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phone = '923315424466';

  const quickPrompts = [
    'I need a custom website / e-commerce store',
    'I need an ERP or POS software solution',
    'I would like to request a project price quote',
    'I have a custom software development inquiry',
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text || "Hello JilanSoft, I'm interested in your services.");
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Expanded WhatsApp Chat Box */}
      {isOpen && (
        <div
          className={`mb-4 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${theme === 'light'
              ? 'bg-white border-slate-200 text-slate-800'
              : 'bg-[#0F1322] border-white/10 text-white'
            }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-lg text-white border border-white/30">
                  J
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  JilanSoft Support
                  <Sparkles size={13} className="text-amber-300" />
                </h4>

              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp Chat Widget"
              className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className={`p-4 space-y-4 max-h-[380px] overflow-y-auto ${theme === 'light' ? 'bg-slate-50/70' : 'bg-[#0B0E1A]'
            }`}>
            {/* Greeting Speech Bubble */}
            <div className="flex gap-2 items-start">
              <div className={`p-3.5 rounded-2xl rounded-tl-xs text-xs leading-relaxed shadow-sm border ${theme === 'light'
                  ? 'bg-white border-slate-200/80 text-slate-700'
                  : 'bg-[#181D30] border-white/5 text-slate-200'
                }`}>

                <p>
                  How can we assist you today? Select a quick topic below or type your custom requirement.
                </p>
              </div>
            </div>

            {/* Quick Prompt Selectors */}
            <div className="space-y-2 pt-1">
              <p className={`text-[10px] font-bold uppercase tracking-wider ${theme === 'light' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                Quick Topics
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-medium border transition-all duration-200 flex items-center justify-between group cursor-pointer ${theme === 'light'
                      ? 'bg-white border-slate-200 text-slate-700 hover:border-[#25D366] hover:bg-emerald-50/50 hover:text-emerald-900'
                      : 'bg-[#151A2C] border-white/5 text-slate-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-white'
                    }`}
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <MessageSquare size={14} className="shrink-0 text-slate-400 group-hover:text-[#25D366] transition-colors" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className={`flex items-center rounded-xl border p-1.5 ${theme === 'light'
                  ? 'bg-white border-slate-300 focus-within:border-[#128C7E]'
                  : 'bg-[#151A2C] border-white/10 focus-within:border-[#25D366]'
                }`}>
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSend(customMsg);
                    }
                  }}
                  placeholder="Type your message..."
                  className="w-full bg-transparent px-2.5 py-1 text-xs outline-none"
                />
                <button
                  onClick={() => handleSend(customMsg)}
                  aria-label="Send WhatsApp message"
                  className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white shrink-0 transition-colors cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer badge */}
          <div className={`px-4 py-2 text-[10px] text-center border-t ${theme === 'light' ? 'bg-white border-slate-100 text-slate-400' : 'bg-[#0F1322] border-white/5 text-slate-500'
            }`}>
            Direct WhatsApp Action Channel (+92 331 5424466)
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <div className="relative group">
        {/* Tooltip on closed hover */}
        {!isOpen && (
          <div className={`absolute right-18 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg border transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none ${theme === 'light'
              ? 'bg-slate-900 text-white border-slate-800'
              : 'bg-white text-slate-900 border-white/20'
            }`}>
            WhatsApp Support
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle WhatsApp Action Channel"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-600/35 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer shrink-0"
        >
          {/* Pulse ring animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

          <div className="relative z-10 flex items-center justify-center">
            <WhatsAppIcon size={32} />
          </div>
        </button>
      </div>
    </div>
  );
}
