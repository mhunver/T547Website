import { useState } from 'react';
import { Lock, LogOut, Save, TrendingUp, Package, ShoppingBag, Award, FileUp, CheckCircle, AlertCircle } from 'lucide-react';

export default function Admin() {
  // Şifre Giriş Durumu
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Yönetim Form Verileri (Varsayılan Değerler)
  const [formData, setFormData] = useState({
    targetRevenue: 250000,
    currentRevenue: 185000,
    salesCount: 1240,
    addOnSalesCount: 185,
    starEmployee: 'Ahmet Kaya',
    starEmployeeRole: 'Zemin Kat - Satış Danışmanı',
    weekRange: '26.10.2026 - 01.11.2026',
  });

  // Giriş Yapma Kontrolü (Varsayılan Şifre: 1234)
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === '1234') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  // Form Değişikliği
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Kaydetme İşlemi (Şimdilik LocalState / İleride Supabase'e yazılacak)
  const handleSave = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  };

  // 1. ŞİFRE GİRİŞ EKRANI (LOCKED STATE)
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="p-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit mx-auto rounded-2xl">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white">Yönetici Paneli Girişi</h1>
            <p className="text-xs text-slate-400">Verileri güncellemek için yetkili şifrenizi girin.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Yönetici Şifresi (Örn: 1234)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors text-center tracking-widest"
              />
            </div>

            {loginError && (
              <p className="text-xs text-rose-400 text-center font-medium flex items-center justify-center gap-1">
                <AlertCircle size={14} /> Hatalı şifre girdiniz.Tekrar deneyin.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-amber-500/20"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. YÖNETİCİ FORMU VE KONTROL PANELİ
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* ÜST BAŞLIK VE ÇIKIŞ */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-2xl">
            <Lock size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Mağaza Veri Yönetimi</h1>
            <p className="text-xs text-slate-400">Günün rakamlarını ve shift belgesini güncelleyin.</p>
          </div>
        </div>

        <button
          onClick={() => setIsAuthenticated(false)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700/60 transition-colors"
        >
          <LogOut size={16} />
          <span>Çıkış Yap</span>
        </button>
      </div>

      {/* BAŞARI MESAJI BİLDİRİMİ */}
      {successMessage && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl flex items-center gap-3 text-emerald-400 text-sm font-semibold">
          <CheckCircle size={20} />
          <span>Güncelleme başarılı! Rakamlar ana sayfaya ve gösterge paneline yansıtıldı.</span>
        </div>
      )}

      {/* DÜZENLEME FORMU */}
      <form onSubmit={handleSave} className="space-y-6">
        
        {/* CİRO VE HEDEF FORMU */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <TrendingUp size={20} className="text-emerald-400" />
            <span>Ciro ve Satış Verileri</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Günlük Ciro Hedefi (₺)</label>
              <input
                type="number"
                name="targetRevenue"
                value={formData.targetRevenue}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Gerçekleşen Ciro (₺)</label>
              <input
                type="number"
                name="currentRevenue"
                value={formData.currentRevenue}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Package size={14} className="text-sky-400" />
                Günün Toplam Satış Adedi
              </label>
              <input
                type="number"
                name="salesCount"
                value={formData.salesCount}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <ShoppingBag size={14} className="text-emerald-400" />
                Kasa Ek Ürün Satışı Adedi
              </label>
              <input
                type="number"
                name="addOnSalesCount"
                value={formData.addOnSalesCount}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>
        </div>

        {/* GÜNÜN ELEMANI VE VARDİYA FORMU */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Award size={20} className="text-amber-400" />
            <span>Günün Elemanı & Vardiya Bilgisi</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Günün Elemanı (İsim Soyisim)</label>
              <input
                type="text"
                name="starEmployee"
                value={formData.starEmployee}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Günün Elemanı Unvanı / Reyonu</label>
              <input
                type="text"
                name="starEmployeeRole"
                value={formData.starEmployeeRole}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">Haftalık Shift Tarih Aralığı</label>
              <input
                type="text"
                name="weekRange"
                value={formData.weekRange}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>
        </div>

        {/* MASAÜSTÜ / MOBİL KAYDET BUTONU */}
        <button
          type="submit"
          className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-base rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
        >
          <Save size={20} />
          <span>Tüm Verileri Kaydet ve Yayınla</span>
        </button>

      </form>

    </div>
  );
}