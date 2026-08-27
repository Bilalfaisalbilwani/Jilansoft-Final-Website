import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../components/ThemeContext';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | JilanSoft</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className={`min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-6 text-center ${
        isLight ? 'bg-white text-slate-900' : 'bg-[#070910] text-white'
      }`}>
        <div className="max-w-md mx-auto">
          <div className="text-7xl font-black text-blue-600 mb-4">404</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">Page Not Found</h1>
          <p className={`text-base mb-8 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            The page you are looking for doesn't exist, may have been renamed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition"
          >
            <Home size={18} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>
    </>
  );
}
