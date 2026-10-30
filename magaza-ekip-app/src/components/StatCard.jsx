import { useEffect, useState } from 'react';

// Sayı artış animasyonu için yardımcı hook
function useCountUp(endValue, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const numericEnd = typeof endValue === 'number' ? endValue : parseFloat(endValue) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out kuadratik ivmelenme
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * numericEnd));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return count;
}

export default function StatCard({ title, value, icon: Icon, type = 'number', highlightColor = 'emerald' }) {
  const numericVal = typeof value === 'number' ? value : value || 0;
  const animatedValue = useCountUp(numericVal);

  // Para birimi veya standart adet biçimlendirmesi
  const formattedValue = type === 'currency'
    ? `₺${animatedValue.toLocaleString('tr-TR')}`
    : animatedValue.toLocaleString('tr-TR');

  const colorStyles = {
    emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400',
    amber: 'border-amber-500/20 bg-amber-500/5 text-amber-400',
    sky: 'border-sky-500/20 bg-sky-500/5 text-sky-400',
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all hover:scale-[1.02] ${colorStyles[highlightColor]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {formattedValue}
          </h3>
        </div>
        <div className={`rounded-xl p-3 bg-slate-800/80 text-white border border-slate-700/50`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}