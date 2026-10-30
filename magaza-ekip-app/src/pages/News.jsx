import { useEffect, useState } from 'react';
import { Newspaper, BellRing, Sparkles, Heart, ThumbsUp, Smile, Tag, Calendar, User } from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Mağaza içi güncel haber & duyuru verileri
  const initialNews = [
    {
      id: 1,
      title: 'Haftalık Satış Hedefinde Rekora Doğru!',
      category: 'DUYURU',
      type: 'official',
      date: '30 Ekim 2026',
      author: 'Mağaza Yönetimi',
      content: 'kasa oto kokusu ve Erkek reyonlarımızın yüksek performansı sayesinde haftalık kotamızın %85\'ine ulaştık. Tüm ekibin eline sağlık, hafta sonu prim hedefini patlatıyoruz!',
      likes: 24,
      laughs: 5,
      isPinned: true,
    },
    {
      id: 2,
      title: 'Piston aşşağı',
      category: 'EĞLENCE',
      type: 'funny',
      date: '29 Ekim 2026',
      author: 'Kadir',
      content: 'gün ortasın da bozulan kasa ile mağaza müdürü çılgına döndü ve şu kelimler çıktı "Piston aşşaaa"',
      likes: 18,
      laughs: 42,
      isPinned: false,
    },
    {
      id: 3,
      title: 'Kasa Arkası su Unutma Rekoru Kırıldı',
      category: 'EĞLENCE',
      type: 'funny',
      date: '28 Ekim 2026',
      author: 'Kasa Personeli',
      content: 'Bugün yoğunluk sebebiyle kasa arkasında  terk edilen su sayısı 14\'e ulaştı. sularımızın aziz hatırasına saygıyla...',
      likes: 12,
      laughs: 38,
      isPinned: false,
    },
    {
      id: 4,
      title: 'Saha Denetimi Teşekkür Mesajı',
      category: 'DUYURU',
      type: 'official',
      date: '27 Ekim 2026',
      author: 'Bölüm Yöneticileri',
      content: 'Dün gerçekleşen mağaza standartları kontrolünde vitrin düzeni ve reyon katlamalarımız tam puan aldı. Disiplin ve emeğiniz için teşekkürler!',
      likes: 31,
      laughs: 2,
      isPinned: false,
    },
        {
      id: 5,
      title: 'Yalan Makinası',
      category: 'EĞLENCE',
      type: 'funny',
      date: '30 Ekim 2026',
      author: 'Mehmet Huzeyfe Ünver',
      content: 'Mağazamızın Çalışanı M.Arif Yıldırım 1 saatte bütün sevkiyatı açtığını söyleyerek insanları şaşkınlığa çevirdi',
      likes: 31,
      laughs: 2,
      isPinned: false,

    },
            {
      id: 6,
      title: 'Hızlı Lojistik',
      category: 'EĞLENCE',
      type: 'funny',
      date: '29 Ekim 2026',
      author: 'ananymous',
      content: 'Mağazamızın Kadın,Çocuk ve erkek reyonu için yaplan lojistik kadromuzun sırasıyla Sıla,Aysu ve Nurhayat ın heyacanlı kapışmları devam ediyor,Sıla Güneş tecrübesiyle kolileri bitirdi bile..',
      likes: 67,
      laughs: 50,
      isPinned: false,
    },
  ];

  const [newsList, setNewsList] = useState(initialNews);

  useEffect(() =>{
    console.log("newsList")
    console.log(newsList)

  })

  // Reaksiyon Arttırma Fonksiyonu
  const handleReaction = (id, type) => {
    setNewsList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [type]: item[type] + 1,
          };
        }
        return item;
      })
    );
  };

  const categories = [
    { key: 'ALL', label: 'Tüm Akış' },
    { key: 'DUYURU', label: 'Resmi Duyurular' },
    { key: 'EĞLENCE', label: 'Mağaza Dedikoduları & Neşe' },
  ];

  const filteredNews = newsList.filter(
    (item) => selectedCategory === 'ALL' || item.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* 1. ÜST BAŞLIK */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <Newspaper size={14} />
          <span>Saha Duyuru & Pano</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Mağaza Havadisleri
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Mağazamıza dair önemli gelişmeleri, eğlenceli anları ve güncel panoyu buradan takip edebilirsiniz.
        </p>
      </div>

      {/* 2. KATEGORİ FİLTRELERİ */}
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === cat.key
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. HABER KARTLARI AKIŞI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNews.map((item) => (
          <article
            key={item.id}
            className={`relative flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
              item.isPinned
                ? 'bg-slate-900/90 border-emerald-500/50 shadow-xl shadow-emerald-500/5'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            {/* Sabitlenmiş Haber İkonu */}
            {item.isPinned && (
              <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <BellRing size={12} />
                <span>Öne Çıkan</span>
              </div>
            )}

            <div className="space-y-4">
              {/* Etiketler ve Tarih */}
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span
                  className={`font-bold px-2.5 py-0.5 rounded-md border ${
                    item.type === 'official'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }`}
                >
                  {item.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {item.date}
                </span>
              </div>

              {/* Başlık ve İçerik */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white leading-snug">
                  {item.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>

            {/* Alt Bilgi & Etkileşim Butonları */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <User size={13} className="text-emerald-400" />
                {item.author}
              </span>

              {/* Beğeni / Reaksiyon Sayacı */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleReaction(item.id, 'likes')}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700/80 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-700/50 transition-colors"
                >
                  <ThumbsUp size={14} className="text-emerald-400" />
                  <span>{item.likes}</span>
                </button>

                <button
                  onClick={() => handleReaction(item.id, 'laughs')}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700/80 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-700/50 transition-colors"
                >
                  <Smile size={14} className="text-amber-400" />
                  <span>{item.laughs}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}