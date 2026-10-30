import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, LayoutDashboard, Calendar, Info, Phone, Lock, Menu, X ,Newspaper } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Ana Sayfa', path: '/', icon: LayoutDashboard },
    { name: 'Ekibimiz', path: '/ekibimiz', icon: Users },
    { name: 'Güncel Shift', path: '/shift', icon: Calendar },
    { name: 'Hakkımızda', path: '/hakkimizda', icon: Info },
    { name: 'İletişim', path: '/iletisim', icon: Phone },
    { name: 'duyurular', path: '/duyurular', icon: Newspaper },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link to="/" className="text-xl font-bold text-emerald-400 tracking-wider">
            T547<span className="text-white">PANEL</span>
          </Link>
          
          {/* MASAÜSTÜ MENÜ (md ve üzeri ekranlarda görünür) */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* SAĞ YÖNETİCİ GİRİŞİ & MOBİL MENÜ BUTONU */}
          <div className="flex items-center gap-2">
            <Link
              to="/admin"
              className="p-2 text-slate-400 hover:text-amber-400 transition-colors rounded-lg hover:bg-slate-800"
              title="Yönetici Paneli"
            >
              <Lock size={18} />
            </Link>

            {/* Hamburger Menü Butonu (Sadece mobilde görünür) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Menüyü Aç/Kapat"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL AÇILIR MENÜ (Açıldığında pürüzsüz görünür) */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 backdrop-blur-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)} // Tıklanınca menüyü kapatır
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}