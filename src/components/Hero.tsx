import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Activity, ShieldCheck } from 'lucide-react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(Math.min(window.scrollY, 420));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const deviceTransform = `rotate(${scrollY * 0.12}deg) scale(${1 + scrollY * 0.0006})`;
  const deviceOpacity = `${Math.max(0, 1 - scrollY / 300)}`;

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-brand-100/50 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-brand-50 blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(129,208,227,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(129,208,227,0.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-pulse" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            <span className="text-xs font-semibold text-brand-700 tracking-wide">
              МАГНИТОТЕРАПИЯ НОВОГО ПОКОЛЕНИЯ
            </span>
          </div>

          <h1 className="font-extrabold text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-none tracking-tight">
            Магнитрон
            <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-600 leading-tight max-w-xl">
              — новое слово
              <br />
              в магнитотерапии
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
            Аппарат низкоинтенсивной магнитотерапии нового поколения — для домашнего
            лечения и профилактики
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#about" className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-500 text-white font-semibold text-base shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:bg-brand-600 hover:scale-[1.03] transition-all">
              Узнать больше
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#buy" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-brand-200 text-brand-700 font-semibold text-base hover:bg-brand-50 hover:border-brand-300 transition-all">
              <MapPin className="w-5 h-5" />
              Где купить
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-500" /><span>Без противопоказаний по перегреву</span></div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 text-brand-500" /><span>Частота 5 кГц</span></div>
          </div>
        </div>

        <div className="relative animate-fade-in-up animate-delay-300 hidden lg:block">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-brand-100/50 blur-3xl animate-pulse-soft" />
            <div className="absolute inset-8 rounded-full border-2 border-brand-200/60 animate-pulse-soft" style={{ animationDelay: '0s' }} />
            <div className="absolute inset-8 rounded-full border-2 border-brand-200/40 animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
            <div className="absolute inset-8 rounded-full border-2 border-brand-100/30 animate-pulse-soft" style={{ animationDelay: '3s' }} />

            <div
              className="absolute inset-14 rounded-full overflow-hidden bg-white border border-gray-100 shadow-2xl flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ transform: deviceTransform, opacity: deviceOpacity }}
            >
              <img src="/Magnitron.png" alt="Аппарат «Магнитрон»" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="animate-heat-blur rounded-full bg-white/80 backdrop-blur-sm px-5 py-3 shadow-lg border border-brand-100">
                  <span className="text-4xl font-extrabold text-brand-600">5</span>
                  <span className="ml-1 text-lg font-bold text-brand-700">кГц</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -left-6 px-4 py-3 rounded-xl bg-white border border-gray-100 shadow-xl animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-xs text-gray-400">Напряжённость</div>
              <div className="text-lg font-bold text-gray-900">160 А/м</div>
            </div>
            <div className="absolute -bottom-2 -right-6 px-4 py-3 rounded-xl bg-white border border-gray-100 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-xs text-gray-400">Эффективность</div>
              <div className="text-lg font-bold text-brand-600">97 : 1</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5"><div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce" /></div>
      </div>
    </section>
  );
}
