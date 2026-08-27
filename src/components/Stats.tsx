/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { globalStats } from '../data';
import { useTheme } from './ThemeContext';

export default function Stats() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 sm:py-24 border-y transition-all duration-[400ms] ease-in-out ${
      theme === 'light' ? 'bg-[#F8FAFC] border-slate-100' : 'bg-[#111827] border-white/5'
    }`} id="stats">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x ${
          theme === 'light' ? 'divide-slate-200' : 'divide-white/5'
        }`}>
          {globalStats.map((stat, idx) => (
            <div
              key={idx}
              className={`py-10 sm:py-8 px-6 sm:px-8 text-center transition duration-300 group select-none ${
                theme === 'light' ? 'hover:bg-slate-100/50' : 'hover:bg-[#7C3AED]/2'
              }`}
            >
              <div className="font-display text-4xl sm:text-5xl font-extrabold bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent mb-3 leading-none group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className={`text-sm sm:text-base font-medium leading-relaxed max-w-[200px] mx-auto ${
                theme === 'light' ? 'text-[#64748B]' : 'text-[#A09BB8]'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
