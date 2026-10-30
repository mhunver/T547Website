import { Package, TrendingUp, Award, Clock, Target, TurkishLira, AlertCircle, ShoppingBag } from 'lucide-react';
import StatCard from '../components/StatCard';
import img1 from "../assets/employee.jpeg"

export default function Home() {
  // Şimdilik örnek veri (İleride Supabase'den çekilecek)
  const dashboardData = {
    salesCount: 3137,
    revenue: 2327337,
    addOnSalesCount:250,
    starEmployee: 'Gözde Nallı',
    starEmployeeRole: 'Rekor oto kokusu satışı',
    lastUpdated: 'Bugün 19:30',
  };
  const salesData = {
    target: 72444000,   // Günlük Ciro Hedefi (₺)
    current: 63912633,  // Anlık Gerçekleşen Ciro (₺)
  };

  const remaining = Math.max(0, salesData.target - salesData.current);
  const percentage = Math.min(100, Math.round((salesData.current / salesData.target) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* 1. HERO SECTION: Ekip Görseli */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          {/* Ekip fotoğrafı alanı (placeholder görsel) */}
          <img
            src={img1}
            alt="Mağaza Ekibi"
            className="h-full w-full object-cover  brightness-75"
          />
          {/* Görsel üzeri yumuşak karartma / degrade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-3 uppercase">
              Sahanın Arkasındaki Kadro
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Bugün de Mağazadayız,
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Anlık mağaza performansımız, günlük satış metriklerimiz ve günün öne çıkan ekip detayları.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CANLI PERFORMANS PANOSU */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <h2 className="text-xl font-bold text-white tracking-wide">Canlı Gösterge Panosu</h2>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/40">
            <Clock size={14} className="text-emerald-400" />
            <span>Son Güncelleme: <strong className="text-slate-200">{dashboardData.lastUpdated}</strong></span>
          </div>
        </div>

        {/* Sayaç Kartları Izgarası */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
      {/* Parlama Efekti */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Üst Başlık & Yüzde Rozeti */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl">
            <TrendingUp size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Günün Mağaza Cirosu</h3>
            <p className="text-xs text-slate-400">Anlık Satış & Hedef Takibi</p>
          </div>
        </div>

        <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl font-mono">
          %{percentage} Tamamlandı
        </span>
      </div>

      {/* 3'LÜ RAKAM IZGARASI (HEDEF / MEVCUT / KALAN) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* 1. Hedef */}
        <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <Target size={14} className="text-amber-400" />
            <span>Aylık Hedef</span>
          </div>
          <p className="text-2xl font-black text-white font-mono">
            ₺{salesData.target.toLocaleString('tr-TR')}
          </p>
        </div>

        {/* 2. Anlık Ciro */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <TurkishLira size={14} />
            <span>Gerçekleşen</span>
          </div>
          <p className="text-2xl font-black text-emerald-400 font-mono">
            ₺{salesData.current.toLocaleString('tr-TR')}
          </p>
        </div>

        {/* 3. Kalan */}
        <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <AlertCircle size={14} className="text-rose-400" />
            <span>Hedefe Kalan</span>
          </div>
          <p className="text-2xl font-black text-rose-400 font-mono">
            ₺{remaining.toLocaleString('tr-TR')}
          </p>
        </div>
      </div>

      {/* İLERLEME ÇUBUĞU (PROGRESS BAR) */}
      <div className="space-y-2">
        <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-slate-500 font-medium">
          <span>₺{salesData.current.toLocaleString('tr-TR')}</span>
          <span>Hedef: ₺{salesData.target.toLocaleString('tr-TR')}</span>
        </div>
      </div>

    </div>
    {/* CANLI KARTLAR DİZİLİMİ */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* 1. KART: Günün Satış Adedi */}
  <StatCard
    title="Günün Satış Adedi"
    value={dashboardData.salesCount}
    icon={Package}
    type="number"
    highlightColor="sky"
  />

  {/* 2. KART: Kasada Satılan Ek Ürün */}
  <StatCard
    title="Kasa Ek Ürün Satışı"
    value={dashboardData.addOnSalesCount} // Örn: 142 Adet
    icon={ShoppingBag}
    type="number"
    highlightColor="emerald"
  />

  {/* 3. KART: Günün Elemanı Özel Kartı */}
  <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur-sm transition-all hover:scale-[1.02] flex flex-col justify-between">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-amber-400/80">Günün Elemanı</p>
        <h3 className="mt-1 text-2xl font-bold text-white">
          {dashboardData.starEmployee}
        </h3>
        <p className="mt-1 text-xs text-slate-400">
          {dashboardData.starEmployeeRole}
        </p>
      </div>
      <div className="rounded-xl p-3 bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0">
        <Award className="h-6 w-6" />
      </div>
    </div>
  </div>

</div>
      </section>

    </div>
  );
}