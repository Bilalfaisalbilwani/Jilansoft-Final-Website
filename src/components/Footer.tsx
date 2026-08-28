import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  // Youtube,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  MapPin,
  Clock,
} from 'lucide-react';

const WhatsAppIcon = ({ size = 14 }: { size?: number }) => (
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

// const PinterestIcon = ({ size = 14 }: { size?: number }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.775 2.169 2.128 0 3.765-2.244 3.765-5.479 0-2.861-2.056-4.86-4.991-4.86-3.399 0-5.395 2.549-5.395 5.184 0 1.027.395 2.13.888 2.73.097.118.11.221.082.338-.09.376-.291 1.186-.33 1.348-.052.217-.171.263-.395.158-1.474-.687-2.396-2.842-2.396-4.576 0-3.725 2.709-7.147 7.801-7.147 4.095 0 7.279 2.919 7.279 6.822 0 4.069-2.564 7.342-6.124 7.342-1.197 0-2.324-.622-2.71-1.357 0 0-.593 2.257-.738 2.812-.268 1.029-.993 2.319-1.479 3.111C9.016 23.774 10.468 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
//   </svg>
// );

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRequestQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === '/contact') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/contact');
    }
  };
  return (
    <footer
      className="bg-[#0B0F19] border-t border-white/10 pt-20 pb-10"
      id="footer"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-[1240px] mx-auto px-6">

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-10 pb-16 border-b border-white/10 text-left">

          {/* Brand Block */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <Link
              to="/"
              className="font-display text-2xl font-bold tracking-tight text-white mb-5 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-[15px] font-extrabold shadow-md shadow-blue-500/20 shrink-0">
                J
              </div>

              <span>
                Jilan<span className="text-blue-500">soft</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px] mb-6 font-sans">
              From business software and ERP systems to websites and eCommerce
              stores, Jilansoft provides technology solutions tailored to your
              businesses.
            </p>

            {/* Premium CTA Button */}
            <div className="mb-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-tr from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 shadow-md shadow-blue-500/15 hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
                aria-label="Get a free consultation for your project"
              >
                <span>Get Free Consultation</span>

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Social Channels */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/923315424466"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19] cursor-pointer"
              >
                <WhatsAppIcon size={16} />
              </a>

              <a
                href="https://www.facebook.com/jilansoftofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:bg-[#1877F2]/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19] cursor-pointer"
              >
                <Facebook size={16} />
              </a>
              
              <a
                href="https://www.instagram.com/jilansoft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F]/30 hover:bg-[#E4405F]/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19] cursor-pointer"
              >
                <Instagram size={16} />
              </a>

              {/* <a
                href="https://www.pinterest.com/jilansoft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Pinterest"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#BD081C] hover:border-[#BD081C]/30 hover:bg-[#BD081C]/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19] cursor-pointer"
              >
                <PinterestIcon size={16} />
              </a> */}

              {/* <a
                href="https://www.youtube.com/channel/UCwekJuIXmcOfTh-nalQspwQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#FF0000] hover:border-[#FF0000]/30 hover:bg-[#FF0000]/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19] cursor-pointer"
              >
                <Youtube size={16} />
              </a> */}

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19] cursor-pointer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="font-sans">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-5">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-3 font-medium text-sm text-slate-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all duration-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/#about"
                  className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all duration-200"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/services#work"
                  className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all duration-200"
                >
                  Custom Software
                </Link>
              </li>

              <li>
                <Link
                  to="/services#pricing"
                  className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all duration-200"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all duration-200"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/services#faq"
                  className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all duration-200"
                >
                  FAQ
                </Link>
              </li>


            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="font-sans">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-5">
              Get in Touch
            </h3>

            <ul className="flex flex-col gap-3.5 font-medium text-sm text-slate-400">
              <li>
                <a
                  href="mailto:jilansoft@gmail.com"
                  className="group flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <Mail
                    size={14}
                    className="text-slate-500 group-hover:text-blue-400 transition-colors shrink-0"
                  />
                  <span className="truncate">jilansoft@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/923315424466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <MessageSquare
                    size={14}
                    className="text-slate-500 group-hover:text-[#25D366] transition-colors shrink-0"
                  />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+923315424466"
                  className="group flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <Phone
                    size={14}
                    className="text-slate-500 group-hover:text-blue-400 transition-colors shrink-0"
                  />
                  <span>Call Us</span>
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  onClick={handleRequestQuote}
                  className="group flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <ArrowRight
                    size={14}
                    className="text-slate-500 group-hover:text-blue-400 transition-all group-hover:translate-x-0.5 shrink-0"
                  />
                  <span>Request a Quote</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Office */}
          <div className="font-sans">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-5">
              Office
            </h3>

            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <div>
                <span className="block font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <MapPin size={14} className="text-blue-500" />
                  Office Location
                </span>

                <a
                  href="https://maps.google.com/?q=LandMark+Plaza+I+I+Chundrigar+Road+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition duration-200 leading-relaxed hover:underline decoration-blue-500/50 underline-offset-4"
                >
                  Karachi, Pakistan
                  <br />
                  Office #604, 6th Floor
                  <br />
                  LandMark Plaza
                  <br />
                  I. I. Chundrigar Road
                </a>
              </div>

              <div>
                <span className="block font-semibold text-white mb-1 flex items-center gap-1.5">
                  <Clock size={14} className="text-blue-500" />
                  Business Hours
                </span>

                <p className="leading-relaxed text-slate-400">
                  Monday – Saturday
                  <br />
                  12:30 PM – 7:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Metadata Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-slate-400 font-medium font-sans gap-4">
          <span>
            © 2009–{new Date().getFullYear()} Jilansoft. All rights reserved.
          </span>

          <div className="flex items-center gap-1">
            <span className="text-slate-500">
              Let's build your next digital product.
            </span>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-1 font-semibold text-white hover:text-blue-400 transition-colors duration-200"
            >
              <span>Let's Work Together</span>

              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1 text-blue-500 shrink-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}