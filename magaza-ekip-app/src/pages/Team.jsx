import { Users, Award, Sparkles, Heart } from 'lucide-react';

export default function Team() {
  // Örnek ekip listesi (İleride Supabase/Veritabanına bağlanabilir)
  const teamMembers = [
    {
      id: 1,
      name: 'Mesut Albayrak',
      role: 'Mağaza Müdürü',
      department: 'Yönetim Ekibi',
      // image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      experience: '15+ Yıl',
      favoriteZone: 'Uzman mağaza Yönetimi ve teknik Mağaza matematiği',
      isStar: false, // Günün/Ayın Elemanı rozeti
    },
    {
      id: 2,
      name: 'Duygu Çelik',
      role: 'Mağaza 2.Müdürü',
      department: 'Yönetim Ekibi',
      // image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      experience: '8 Yıl',
      favoriteZone: 'İleri seviye Reyon Yönetimleri ve Müşteri,çalışan ilişkileri',
      motto: 'Gülümsemek en hızlı iletişim yoludur.',
      isStar: false,
    },
        {
      id: 6,
      name: 'Hilal Akdaş',
      role: 'BU Reyon Yöneticisi',
      department: 'Yönetim Ekibi',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      experience: '8 Yıl',
      favoriteZone: 'Kasa teknik ve  yetkin reyon yönetimi',
      isStar: false,
    },
    {
      id: 3,
      name: 'Zeliha Avcı',
      role: 'WKK Reyon Yöneticisi',
      department: 'Yönetim Ekibi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      experience: '5+ Yıl',
      favoriteZone: ' yetkin Çocuk Reyonu yönetimi',
      motto: 'Tarz kişiliğin aynasıdır.',
      isStar: false,
    },
    {
      id: 4,
      name: 'Tuğba Arpacı',
      role: 'Kasa Yöneticisi',
      department: 'Yönetim Ekibi',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
      experience: '4 Yıl',
      favoriteZone: 'ileri düzey Kasa yönetimi ve raporlar',
      motto: 'Düzen renklerle başlar.',
      isStar: false,
    },
    {
      id: 5,
      name: 'Emine Reyhan Tutal',
      role: 'BG Reyonu Yöneticisi',
      department: 'Yönetim Ekibi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      experience: '5+ Yıl',
      favoriteZone: ' yetkin BG Reyonu yönetimi',
      motto: 'Tarz kişiliğin aynasıdır.',
      isStar: false,
    },
        {
      id: 7,
      name: 'Muhammer Dünder',
      role: 'Depo Yöneticisi',
      department: 'Yönetim Ekibi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      experience: '9+ Yıl',
      favoriteZone: 'teknkik ve ileri düzey Depo Yönetimi',
      motto: 'Tarz kişiliğin aynasıdır.',
      isStar: false,
    },

  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* BAŞLIK & BAŞLIK ALTI METNİ */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <Users size={14} />
          <span>Mağaza Ailesi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Sahanın Arkasındaki Güç
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Her gün mağazamızda harikalar yaratan, müşteri memnuniyeti için tutkuyla çalışan ekibimizle tanışın.
        </p>
      </div>

      {/* EKİP KARTLARI IZGARASI (GRID) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Günün Elemanı Rozeti */}
            {member.isStar && (
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-lg">
                <Award size={14} />
                <span>Günün Yıldızı</span>
              </div>
            )}

            {/* Fotoğraf Alanı
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            </div> */}

            {/* İçerik Detayları */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  {member.department}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-slate-300">{member.role}</p>
              </div>

              {/* Bilgi Etiketleri */}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>Deneyim: <strong className="text-slate-200">{member.experience}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart size={14} className="text-rose-400" />
                  <span>Favori: <strong className="text-slate-200">{member.favoriteZone}</strong></span>
                </div>
              </div>

              {/* Motto / Alıntı */}
              {/* {member.motto && (
                <p className="text-xs italic text-slate-400 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                  "{member.motto}"
                </p>
              )} */}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}