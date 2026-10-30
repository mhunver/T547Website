import { Store, Target, Award, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Aktif Mağaza Ekibi', value: '90+' },
    { label: 'Haftalık Müşteri Ağırlama', value: '20.000+' },
    { label: 'Müşteri Memnuniyet Oranı', value: '%95 -  %99' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Hızlı ve Etkin Operasyon',
      description: 'Lojistikten kasaya, reyon düzeninden sevkiyata kadar her süreçte yüksek verimlilikle çalışıyoruz.',
    },
    {
      icon: HeartHandshake,
      title: 'Müşteri Odaklı Hizmet',
      description: 'Mağazamıza adım atan her ziyaretçimize en iyi alışveriş deneyimini sunmak için kesintisiz iletişim kuruyoruz.',
    },
    {
      icon: ShieldCheck,
      title: 'Güçlü Takım Ruhu',
      description: 'Yönetim, reyon ve saha ekiplerimizle birlikte şeffaf ve birbirini destekleyen bir çalışma ortamı oluşturuyoruz.',
    },
    {
      icon: Zap,
      title: 'Saha Enerjisi',
      description: 'Günün her saatinde dinamik, çözüm odaklı ve yüksek modla sahada yer alıyoruz.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. ÜST BAŞLIK ALANI */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <Store size={14} />
          <span>Mağaza Hakkında</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Sahada Tutkuyla Çalışan Büyük Bir Aileyiz
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Sadece ürün satmıyor, mağazamız bünyesinde her gün binlerce müşterimize güler yüzlü, hızlı ve kaliteli bir hizmet sunuyoruz. Yönetimden kasaya, depodan reyonlara kadar tek bir vücut halinde hareket ediyoruz.
        </p>
      </div>

      {/* 2. RAKAMLARLA MAĞAZAMIZ (STATS) */}
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm text-center space-y-1 hover:border-emerald-500/30 transition-colors"
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* 3. MİSYON & VİZYON KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Target size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Vizyonumuz</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Mağaza içi operasyonel mükemmelliği teknoloji ve doğru ekip yönetimiyle harmanlayarak, bölgenin en yüksek performanslı ve en yüksek müşteri memnuniyetine sahip retail noktası olmak.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Değerlerimiz</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Ekip içi dayanışma, adil çalışma saatleri, sürekli gelişim ve mağaza hedeflerine birlikte ulaşma arzusu. Birlikte başarmak bizim kültürümüzün temelini oluşturur.
          </p>
        </div>
      </div>

      {/* 4. TEMEL İLKELERİMİZ */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Çalışma İlkelerimiz</h2>
          <p className="text-slate-400 text-sm">Bizi sahada güçlü kılan temel sütunlar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3 hover:border-slate-700 transition-all hover:-translate-y-1"
              >
                <div className="p-2.5 w-fit rounded-xl bg-slate-800 text-emerald-400 border border-slate-700/60">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}