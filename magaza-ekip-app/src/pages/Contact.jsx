import { MapPin, Phone, Clock, UserCheck, ShieldCheck, ExternalLink, Navigation } from 'lucide-react';

export default function Contact() {
  const storeInfo = {
    name: 'LC Waikiki - Çanakkale Burda AVM',
    rating: '4.6',
    reviews: '2.3 B Yorum',
    address: 'Burda AVM, Barbaros, Atatürk Cd. No:207 17, 17020 Çanakkale Merkez/Çanakkale',
    landline: '(0286) 220 03 13',
    managerPhone: '+90 (5XX) XXX XX XX', // Mağaza Müdürünün Özel Numarası
    workingHours: 'Haftanın Her Günü: 10:00 - 22:00',
    mapsUrl: 'https://maps.google.com/?q=LC+Waikiki+Burda+AVM+Çanakkale',
  };

  const internalLines = [
    { department: 'Mağaza Müdürü (Duygu Çelebi / Mesut Albayrak)', extension: 'Dahili: 101' },
    { department: 'Müdür Yardımcıları & MGDY', extension: 'Dahili: 102' },
    { department: 'Kasa Takım Lideri & Danışma', extension: 'Dahili: 103' },
    { department: 'Lojistik & Depo Sorumlusu', extension: 'Dahili: 104' },
    { department: 'Danışma & Güvenlik Masası', extension: 'Dahili: 105' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. ÜST BAŞLIK */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <Phone size={14} />
          <span>İletişim & Ulaşım</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Mağaza İletişim Bilgileri
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Resmi mağaza hatları, Google Harita bilgileri ve dahili birim numaraları.
        </p>
      </div>

      {/* 2. ANA BİLGİ KARTLARI (2 SÜTUN) */}
      <div className=" lg:grid-cols-3 gap-8">
        
        {/* SOL: RESMİ MAĞAZA VE MÜDÜR İLETİŞİM KARTI */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          
          {/* Mağaza Başlığı & Puan */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                T547 - Çanakkale Mağazası
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">{storeInfo.name}</h2>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-2xl border border-slate-800 w-fit">
              <span className="text-amber-400 font-extrabold text-lg">★ {storeInfo.rating}</span>
              <span className="text-xs text-slate-400 font-medium">({storeInfo.reviews})</span>
            </div>
          </div>

          {/* İletişim Detayları Izgarası */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Adres */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 text-emerald-400 rounded-2xl shrink-0 border border-slate-700/60">
                <MapPin size={22} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400">Mağaza Adresi</p>
                <p className="text-sm font-medium text-slate-200 leading-relaxed">
                  {storeInfo.address}
                </p>
              </div>
            </div>

            {/* Sabit Telefon */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 text-sky-400 rounded-2xl shrink-0 border border-slate-700/60">
                <Phone size={22} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400">Mağaza Telefonu</p>
                <a
                  href={`tel:${storeInfo.landline.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-white hover:text-sky-400 transition-colors block font-mono"
                >
                  {storeInfo.landline}
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 text-amber-400 rounded-2xl shrink-0 border border-slate-700/60">
                <Clock size={22} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400">Çalışma Saatleri</p>
                <p className="text-sm font-semibold text-emerald-400">
                  {storeInfo.workingHours}
                </p>
              </div>
            </div>

            {/* MAĞAZA MÜDÜRÜ ÖZEL İLETİŞİM HATTI */}
            <div className="flex items-start gap-4 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
              <div className="p-2.5 bg-emerald-500 text-slate-950 rounded-xl shrink-0 font-bold">
                <UserCheck size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Mağaza Müdürü Özel Hattı
                </p>
                <a
                  href={`tel:${storeInfo.managerPhone.replace(/\s+/g, '')}`}
                  className="text-base font-black text-white hover:underline font-mono block"
                >
                  {storeInfo.managerPhone}
                </a>
              </div>
            </div>

          </div>

          {/* Yol Tarifi Butonu */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4">
            <a
              href={storeInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/20"
            >
              <Navigation size={18} />
              <span>Google Maps Yol Tarifi Al</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}