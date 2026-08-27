import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { softwareProducts } from '../data';
import { useTheme } from './ThemeContext';
import {
  Check,
  X,
  ChevronRight,
  ChevronLeft,
  Zap,
  Shield,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  Cpu,
  Layers,
  CheckCircle,
  Smile,
  FileText,
  Maximize2,
  Send,
  Globe,
  Laptop,
  Smartphone,
  MessageCircle,
  HelpCircle,
  Star,
  Info,
  ZoomIn,
  ZoomOut,
  Database,
  GraduationCap,
  Wrench,
  Settings,
  RefreshCw,
  Building2,
  DollarSign
} from 'lucide-react';
import { SoftwareProduct } from '../types';

// Structured premium starting prices for each enterprise system in PKR


export default function SoftwareShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<SoftwareProduct | null>(null);
  const [activePreviewImage, setActivePreviewImage] = useState<string>('');
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(0);
  const [yearly, setYearly] = useState(false);
  // Fullscreen Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [zoomScale, setZoomScale] = useState<number>(1.0);
  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({});
  const { theme } = useTheme();

  // Ref for scrolling to the Inquiry contact form smoothly
  // Lock background scrolling when details modal is active
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      // Reset active preview image when product changes
      setActivePreviewImage(selectedProduct.heroImage || selectedProduct.image);
      setActivePreviewIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  const filteredProducts = softwareProducts;

  const getPlatformIcon = (badge: string) => {
    switch (badge) {
      case 'Cloud':
        return <Globe size={13} className="mr-1" />;
      case 'Desktop':
        return <Laptop size={13} className="mr-1" />;
      case 'Offline':
        return <Layers size={13} className="mr-1" />;
      case 'Android':
        return <Smartphone size={13} className="mr-1" />;
      case 'Windows':
        return <Laptop size={13} className="mr-1" />;
      case 'Multi-User':
        return <Users size={13} className="mr-1" />;
      default:
        return <Cpu size={13} className="mr-1" />;
    }
  };

  const getBenefitIcon = (iconName: string, className = "text-blue-600 dark:text-blue-400", size = 20) => {
    switch (iconName) {
      case 'Zap': return <Zap className={className} size={size} />;
      case 'CheckCircle': return <CheckCircle className={className} size={size} />;
      case 'AlertTriangle': return <Shield className={className} size={size} />;
      case 'CreditCard': return <TrendingUp className={className} size={size} />;
      case 'Smile': return <Smile className={className} size={size} />;
      case 'Clock': return <Clock className={className} size={size} />;
      case 'Calendar': return <Calendar className={className} size={size} />;
      case 'Shield': return <Shield className={className} size={size} />;
      case 'TrendingUp': return <TrendingUp className={className} size={size} />;
      default: return <Star className={className} size={size} />;
    }
  };

  // Helper to generate dynamic, contextual preview images for any product
  const getProductImages = (product: SoftwareProduct) => {
    if (product.screenshots && product.screenshots.length > 0) {
      return product.screenshots.map((shot) => ({
        label: shot.caption,
        image: shot.url,
      }));
    }

    return [
      {
        label: 'Preview',
        image: product.heroImage || product.image,
      },
    ];
  };

  const getWhatsAppLink = (productName: string) => {
    const message = `Hi JilanSoft! I'm interested in getting a custom licensing quotation and implementation plan for ${productName}. Could you connect me with an enterprise system architect?`;
    return `https://wa.me/923000000000?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      className={`py-24 transition-colors duration-300 relative ${theme === 'light' ? 'bg-[#FAFBFD] border-y border-slate-100' : 'bg-[#08080E] border-y border-white/5'
        }`}
      id="work"
    >
      {/* Background Ambience */}
      {theme === 'dark' ? (
        <>
          <div className="absolute top-10 left-1/4 w-[380px] h-[380px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-20 right-1/4 w-[380px] h-[380px] bg-purple-600/5 blur-[130px] rounded-full pointer-events-none" />
        </>
      ) : (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[380px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      )}

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-500/5 border border-blue-500/15 mb-6">
            Software Showcase          </div>
          <h2 className={`font-display text-4xl sm:text-5xl font-black leading-tight mb-5 tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}>
            Find the Right <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme === 'light' ? 'from-blue-600 to-indigo-600' : 'from-[#9F62FD] via-[#3B82F6] to-[#06B6D4]'
              }`}>Software for Your Business</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed max-w-[650px] mx-auto ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'
            }`}>
            From accounting and ERP to POS and industry-specific solutions, find the right software to simplify your operations.
          </p>
        </div>

        {/* Grid of Enterprise Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                key={product.id}
                className={`rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-300 group ${theme === 'light'
                  ? 'bg-white border-slate-100 hover:border-slate-200 hover:-translate-y-1'
                  : 'bg-[#0E0E18]/90 border-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/5'
                  }`}
              >
                {/* Visual Header Mockup Preview */}
                <div className="relative h-[260px] overflow-hidden bg-slate-900/5 dark:bg-white/5 border-b border-slate-100 dark:border-white/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${product.platformBadges.some(
                      badge => badge.toLowerCase().includes("android")
                    )
                      ? "object-contain p-4"
                      : "object-contain"
                      }`}
                  />

                  {/* Metadata labels */}
                  <span className={`absolute top-4 left-4 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md z-10 shadow-sm ${theme === 'light'
                    ? 'bg-white/95 text-slate-900 border border-slate-100'
                    : 'bg-slate-950/95 text-white border border-white/10'
                    }`}>
                    {product.categoryLabel || product.category}
                  </span>
                </div>

                {/* Card Content details */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-2 leading-snug ${theme === 'light' ? 'text-slate-900' : 'text-white'
                    }`}>
                    {product.name}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-5 flex-grow ${theme === 'light' ? 'text-slate-500' : 'text-[#9A95B6]'
                    }`}>
                    {product.description}
                  </p>

                  {/* Architecture Platform Badges */}
                  <div className="mb-5">
                    <div className="text-[9px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-2">
                      Compatible With
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.platformBadges.map((badge) => (
                        <span
                          key={badge}
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${theme === 'light'
                            ? 'bg-slate-50 border-slate-100 text-slate-600'
                            : 'bg-white/5 border-white/5 text-slate-300'
                            }`}
                        >
                          {getPlatformIcon(badge)}
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience / Best For */}
                  <div className={`mb-6 p-3 rounded-xl border text-[11px] leading-relaxed font-medium ${theme === 'light' ? 'bg-slate-50/60 border-slate-100 text-slate-700' : 'bg-white/[0.01] border-white/5 text-slate-300'
                    }`}>
                    <span className="block text-[9px] font-bold uppercase text-slate-400 dark:text-slate-500 mb-1">SUITABLE FOR</span>
                    {product.suitablefor}
                  </div>

                  {/* View Details CTA */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 border mt-auto ${theme === 'light'
                      ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-blue-500/10'
                      : 'bg-white border-white text-slate-950 hover:bg-slate-100'
                      }`}
                  >
                    View Product Details
                    <ChevronRight size={14} />
                  </button>

                </div>


              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* DEDICATED PRODUCT DETAILS OVERLAY (PREMIUM DISTRACTION-FREE LEAD FUNNEL) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className={`fixed inset-0 z-[100] overflow-y-auto w-full h-full flex flex-col ${theme === 'light' ? 'bg-[#FAFAF9]' : 'bg-[#07070C]'
              }`}
          >
            {/* STICKY HEADER ALWAYS VISIBLE & POSITIONED ON TOP OF EVERYTHING */}
            <div className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b ${theme === 'light'
              ? 'bg-white/95 border-slate-200/80 text-slate-900'
              : 'bg-[#0D0D15]/95 border-white/5 text-white'
              } backdrop-blur-md shadow-sm`}>

              {/* Back to main showcase */}
              <button
                onClick={() => setSelectedProduct(null)}
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${theme === 'light' ? 'text-slate-500 hover:text-blue-600' : 'text-slate-400 hover:text-blue-400'
                  }`}
              >
                <ChevronLeft size={16} />
                <span>Back to Showcase</span>
              </button>

              {/* Centered System Identity */}
              <div className="hidden md:flex items-center gap-2">
                <span className="font-extrabold text-sm tracking-tight">{selectedProduct.name}</span>
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border ${theme === 'light'
                  ? 'bg-blue-50 border-blue-100 text-blue-600'
                  : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                  }`}>
                  {selectedProduct.categoryLabel || selectedProduct.category}
                </span>
              </div>

              {/* Fixed Close Button (Clearly visible below any external frame/nav) */}
              <button
                onClick={() => setSelectedProduct(null)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border rounded-full cursor-pointer shadow-sm ${theme === 'light'
                  ? 'bg-slate-50 border-slate-200 text-slate-500 hover:text-rose-600 hover:border-rose-100 hover:bg-rose-50/20'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-rose-400 hover:border-rose-500/20 hover:bg-rose-500/5'
                  }`}
              >
                <span>Close</span>
                <X size={15} />
              </button>
            </div>

            {/* DEDICATED BLUEPRINT CONTENT BODY */}
            <div className="flex-grow max-w-[1280px] mx-auto w-full px-6 py-12 space-y-20 text-left">

              {/* SECTION 1: HERO VIEW (SPLIT GRID FOCUSING ON POWERFUL DETAILS & CTAs) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Hero Info Content */}
                <div className="lg:col-span-5 space-y-6">
                  {/* <div className="flex flex-wrap gap-2">
                          <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded bg-blue-600 text-white">
                            Enterprise Suite
                          </span>
                          {selectedProduct.isPartnerProduct && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded bg-emerald-500 text-white shadow-sm">
                              <CheckCircle size={11} strokeWidth={3} />
                              Official Partner
                            </span>
                          )}
                        </div> */}

                  <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'
                    }`}>
                    {selectedProduct.name}
                  </h2>

                  {/* Brief, impact-driven description */}
                  <p className={`text-base leading-relaxed font-medium ${theme === 'light' ? 'text-slate-600' : 'text-[#A09BB8]'
                    }`}>
                    {selectedProduct.heroDescription}

                  </p>

                  {/* Clean platform compatibility layout */}
                  <div className="space-y-2">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Platform Compatibility</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.platformBadges.map((badge) => (
                        <span key={badge} className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold border ${theme === 'light' ? 'bg-white border-slate-200 text-slate-600' : 'bg-white/5 border-white/5 text-slate-300'
                          }`}>
                          {getPlatformIcon(badge)}
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Strict CTA Alignment: Only One Primary & One Secondary */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={() => {
                        setSelectedProduct(null);

                        setTimeout(() => {
                          document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }, 150);
                      }} className="w-full sm:flex-1 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-blue-500/15 cursor-pointer text-center flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      Book Demo </button>
                    <a
                      href={getWhatsAppLink(selectedProduct.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all text-center flex items-center justify-center gap-2 border ${theme === 'light'
                        ? 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                        }`}
                    >
                      <MessageCircle size={15} fill="currentColor" className="stroke-none" />
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>

                {/* SECTION 4: INTERACTIVE SOFTWARE PREVIEW (HERO SCREENSHOT & SWITCHER THUMBNAILS) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className={`p-1.5 border rounded-2xl ${theme === 'light' ? 'bg-white border-slate-200 shadow-xl' : 'bg-[#0E0E15] border-white/10 shadow-2xl'
                    }`}>
                    {/* Modern Interactive Window Frame */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-white/5 rounded-t-xl border-b border-slate-200/50 dark:border-white/5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono ml-4 truncate max-w-[200px]">
                          system.jilansoft.io/{selectedProduct.id}
                        </div>
                      </div>

                      {/* Zoom Trigger Button */}
                      <button
                        onClick={() => {
                          setZoomScale(1.0);
                          setLightboxOpen(true);
                        }}
                        className={`p-1 rounded text-xs flex items-center gap-1 font-bold ${theme === 'light' ? 'text-slate-500 hover:text-blue-600' : 'text-slate-400 hover:text-blue-400'
                          }`}
                        title="Click to Zoom Fullscreen"
                      >
                        <Maximize2 size={13} />
                        <span className="hidden sm:inline">Fullscreen</span>
                      </button>
                    </div>

                    {/* Active Screenshot Display */}
                    <div
                      onClick={() => {
                        setZoomScale(1.0);
                        setLightboxOpen(true);
                      }}
                      className="relative h-[500px] overflow-hidden bg-slate-900 cursor-zoom-in group"
                    >
                      <img
                        src={activePreviewImage || selectedProduct.heroImage || selectedProduct.image}
                        alt={`${selectedProduct.name} Interface preview`}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-4 py-2 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-white/10 shadow-xl flex items-center gap-1.5">
                          <Maximize2 size={12} />
                          Click to Expand Screen & Zoom
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Row Switcher */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                      Interactive Dashboard Modules (Click to switch view)
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {getProductImages(selectedProduct).map((view, index) => {
                        const isSelected = activePreviewImage === view.image;
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              setActivePreviewImage(view.image);
                              setActivePreviewIndex(index);
                            }}
                            className={`p-1 rounded-xl border text-left transition-all cursor-pointer overflow-hidden ${isSelected
                              ? 'border-blue-600 ring-2 ring-blue-500/10 bg-blue-50/5 dark:bg-blue-500/5'
                              : theme === 'light'
                                ? 'border-slate-200 hover:border-slate-300 bg-white'
                                : 'border-white/5 hover:border-white/10 bg-white/3'
                              }`}
                          >
                            <div className="aspect-[16/10] overflow-hidden rounded-lg mb-1.5 bg-slate-900">
                              <img
                                src={view.image}
                                alt={view.label}
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                                className={`w-full h-full object-contain bg-slate-900 transition-transform ${isSelected ? 'scale-105' : 'hover:scale-105'
                                  }`}
                              />
                            </div>
                            <span className="block text-[10px] font-bold tracking-tight truncate px-1 text-slate-700 dark:text-slate-300">
                              {view.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
              {/* Pricing */}

              {/* SECTION 2: KEY BENEFITS (REPLACING LONG TEXT WITH CONCISE CARDS) */}
              {/* <div className="space-y-6">
                      <div className="border-b border-slate-200 dark:border-white/5 pb-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Key Benefits
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {selectedProduct.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className={`p-6 rounded-2xl border flex flex-col justify-between ${theme === 'light' ? 'bg-white border-slate-150 shadow-sm' : 'bg-[#0E0E18] border-white/5'
                              }`}
                          >
                            <div>
                              <div className="p-3 bg-blue-500/5 rounded-xl text-blue-500 w-fit mb-4">
                                {getBenefitIcon(benefit.iconName, "text-blue-500", 20)}
                              </div>
                              <h4 className={`text-base font-black tracking-tight mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-slate-100'}`}>
                                {benefit.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-500 dark:text-[#9A95B6] leading-relaxed">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      
                    </div> */}

              {/* SECTION 3: CORE MODULES GRID */}
              <div className="space-y-6">
                <div className="border-b border-slate-200 dark:border-white/5 pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Business Modules
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProduct.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${theme === 'light' ? 'bg-white border-slate-150 shadow-sm hover:shadow-md' : 'bg-[#0E0E18] border-white/5 hover:border-white/10'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <h4 className="font-extrabold text-base tracking-tight">{mod.name}</h4>
                          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${theme === 'light' ? 'bg-slate-100 border-slate-200 text-slate-500' : 'bg-white/5 border-white/10 text-slate-400'
                            }`}>
                            Module
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                          {mod.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100 dark:border-white/5">
                          {mod.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs">
                              <CheckCircle size={13} className="text-blue-500 shrink-0" />
                              <span className="text-slate-600 dark:text-slate-300 font-medium truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProduct.pricingPlans?.length ? (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-white/5 pb-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Pricing Plans
                    </h3>
                  </div>

                  <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-xl border overflow-hidden">
                      <button
                        onClick={() => setYearly(false)}
                        className={`px-5 py-2 font-semibold ${!yearly ? "bg-blue-600 text-white" : "bg-transparent"
                          }`}
                      >
                        Monthly
                      </button>

                      <button
                        onClick={() => setYearly(true)}
                        className={`px-5 py-2 font-semibold ${yearly ? "bg-blue-600 text-white" : "bg-transparent"
                          }`}
                      >
                        Yearly
                      </button>
                    </div>
                  </div>

                  <div
                    className={`grid gap-6 ${selectedProduct.pricingPlans.length === 4
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                      : "grid-cols-1 md:grid-cols-3"
                      }`}
                  >
                    {selectedProduct.pricingPlans.map((plan, index) => {
                      const isExpanded = expandedPlans[index];

                      const visibleFeatures =
                        window.innerWidth < 768 && !isExpanded
                          ? plan.features.slice(0, 6)
                          : plan.features;

                      return (
                        <div
                          key={index}
                          className={`rounded-2xl border p-6 flex flex-col justify-between ${theme === "light"
                            ? "bg-white border-slate-200"
                            : "bg-[#0E0E18] border-white/5"
                            }`}
                        >
                          <div>
                            <h4 className="text-xl font-bold">{plan.title}</h4>

                            <div className="mt-3">
                              <div className="text-3xl font-black text-blue-600">
                                {yearly ? plan.yearlyprice : plan.monthlyprice}
                              </div>
                            </div>

                            <p className="text-sm text-slate-500 mt-2">
                              {plan.description}
                            </p>

                            <ul className="mt-6 space-y-3">
                              {visibleFeatures.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle
                                    size={16}
                                    className="text-green-500 shrink-0"
                                  />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {plan.features.length > 6 && (
                            <button
                              onClick={() =>
                                setExpandedPlans((prev) => ({
                                  ...prev,
                                  [index]: !prev[index],
                                }))
                              }
                              className="md:hidden mt-5 w-full rounded-xl border border-slate-200 dark:border-white/10 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-white/5 transition-all"
                            >
                              {isExpanded
                                ? "Show Less"
                                : `Show ${plan.features.length - 6} More Features`}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : selectedProduct.id === "school-erp" ? (
                <div
                  className={`mt-10 rounded-3xl border ${theme === "light"
                    ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
                    : "bg-[#0E0E18] border-blue-900/40"
                    }`}
                >
                  <div className="max-w-2xl mx-auto text-center px-8 py-14">

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                      Request a Custom Quote
                    </h3>

                    <p
                      className={`mt-4 text-base leading-7 ${theme === "light" ? "text-slate-600" : "text-slate-300"
                        }`}
                    >
                      Because requirements vary from school to school, we offer customized pricing based on your requirements.
                    </p>

                    <button
                      onClick={() => {
                        setSelectedProduct(null);

                        setTimeout(() => {
                          document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 150);
                      }}
                      className="inline-flex mt-8 items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-all shadow-lg shadow-blue-500/20"
                    >
                      <Send size={18} />
                      Request Custom Quote
                    </button>

                  </div>
                </div>
              ) : null}

            </div> {/* closes: flex-grow max-w-[1280px] */}

          </motion.div>)} {/* closes: modal */}
      </AnimatePresence>

      {/* PORTFOLIO LIGHTBOX VIEWER WITH RESPONSIVE DYNAMIC ZOOM & CYCLE CONTROLS */}
      <AnimatePresence>
        {lightboxOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/98 flex flex-col justify-between p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Header controls inside lightbox */}
            <div className="flex items-center justify-between w-full text-white px-4 py-2 z-10" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-500">
                  SYSTEM BLUEPRINT VIEWER
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  {selectedProduct.name} · View {activePreviewIndex + 1} of 3: {getProductImages(selectedProduct)[activePreviewIndex]?.label}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Zoom toggle button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomScale(prev => prev === 1.0 ? 1.8 : prev === 1.8 ? 2.5 : 1.0);
                  }}
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                >
                  {zoomScale === 1.0 ? <ZoomIn size={15} /> : <ZoomOut size={15} />}
                  <span>{zoomScale === 1.0 ? 'Zoom In' : `Scale ${zoomScale}x`}</span>
                </button>

                {/* Dismiss button */}
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Lightbox image view body */}
            <div
              className="flex-grow w-full flex items-center justify-center overflow-auto py-4 relative"
              onClick={() => setLightboxOpen(false)}
            >
              {/* Previous Screen Chevron */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const images = getProductImages(selectedProduct);
                  const nextIdx = (activePreviewIndex - 1 + images.length) % images.length;
                  setActivePreviewIndex(nextIdx);
                  setActivePreviewImage(images[nextIdx].image);
                  setZoomScale(1.0);
                }}
                className="absolute left-4 p-3 bg-black/60 border border-white/10 text-white hover:bg-black/90 rounded-full cursor-pointer transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Responsive main preview wrapper */}
              <div
                className="max-w-[85vw] max-h-[75vh] flex items-center justify-center transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activePreviewImage || selectedProduct.heroImage || selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  style={{
                    transform: `scale(${zoomScale})`,
                    cursor: zoomScale > 1.0 ? 'zoom-out' : 'zoom-in',
                  }}
                  onClick={() => setZoomScale(prev => prev === 1.0 ? 1.8 : prev === 1.8 ? 2.5 : 1.0)}
                  className="max-w-full max-h-[72vh] object-contain rounded-xl border border-white/10 select-none shadow-2xl transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Next Screen Chevron */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const images = getProductImages(selectedProduct);
                  const nextIdx = (activePreviewIndex + 1) % images.length;
                  setActivePreviewIndex(nextIdx);
                  setActivePreviewImage(images[nextIdx].image);
                  setZoomScale(1.0);
                }}
                className="absolute right-4 p-3 bg-black/60 border border-white/10 text-white hover:bg-black/90 rounded-full cursor-pointer transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Captions & User guides */}
            <div className="text-center pb-4 text-white/70 text-xs tracking-wider z-10 font-medium" onClick={(e) => e.stopPropagation()}>
              <p className="mb-1 text-slate-300 font-semibold">{getProductImages(selectedProduct)[activePreviewIndex]?.label}</p>
              <p className="text-[10px] text-slate-500 uppercase">Use Left/Right icons to cycle views · Click image to toggle zoom scale</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section >
  );
}
