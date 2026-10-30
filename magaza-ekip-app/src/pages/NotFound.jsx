import { Link } from 'react-router-dom';
import { Store, ArrowLeft, Home, AlertCircle, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* İKON VE MİNİ ROZET */}
        <div className="relative inline-block">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl relative z-10">
            <Store className="text-emerald-400 mx-auto" size={64} />
          </div>
          {/* Arka plan parlama efekti */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full -z-0" />
          
          <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-amber-400/50 flex items-center gap-1 z-20">
            <AlertCircle size={14} />
            404
          </span>
        </div>

        {/* METİNLER */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <ShoppingBag size={14} />
            <span>Reyon Bulunamadı</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bu Reyon Şu Anda Hizmette Değil
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Aradığınız sayfa ya taşındı, ya düzenleniyor ya da mağaza vitrinimizde şu an bulunmuyor. Ana sayfaya dönerek diğer reyonları inceleyebilirsiniz.
          </p>
        </div>

        {/* YÖNLENDİRME BUTONLARI */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            <Home size={18} />
            <span>Ana Sayfaya Dön</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-2xl border border-slate-700/80 transition-all"
          >
            <ArrowLeft size={18} />
            <span>Geri Git</span>
          </button>
        </div>

      </div>
    </div>
  );
}