import { Calendar, Download, Building2, Users, ShoppingBag, Baby, CreditCard, Truck, ShieldCheck, FileText } from 'lucide-react';

export default function Shift() {
  // Yönetim panelinden güncellenecek PDF yolu ve tarih bilgisi
  const shiftMeta = {
    weekRange: '26.10.2026 - 01.11.2026',
    pdfUrl: '/GUNCEL_SHIFT.pdf', // public klasöründen doğrudan okur
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. ÜST BAŞLIK ALANI */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <Calendar size={14} />
            <span>Haftalık Çalışma Programı</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Güncel Vardiya & Shift Tablosu
          </h1>
          <p className="text-slate-400 text-sm">
            Tarih Aralığı: <strong className="text-slate-200">{shiftMeta.weekRange}</strong>
          </p>
        </div>

        <a
          href={shiftMeta.pdfUrl}
          download="GUNCEL_SHIFT.pdf"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/20"
        >
          <Download size={18} />
          <span>PDF Dosyasını İndir</span>
        </a>
      </div>

      {/* 2. CANLI PDF GÖSTERİCİ */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="text-emerald-400" size={22} />
            <span>Resmi Shift Belgesi (Orijinal Görünüm)</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
          <iframe
            src={shiftMeta.pdfUrl}
            title="Güncel Shift PDF"
            className="w-full h-[600px] sm:h-[850px] border-none"
          />
        </div>
      </section>

    </div>
  );
}