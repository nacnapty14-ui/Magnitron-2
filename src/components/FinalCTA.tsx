import { Reveal } from './Reveal';
import { MousePointerClick, Globe, TrendingUp, MapPin, ArrowRight } from 'lucide-react';

const blocks = [
  {
    icon: MousePointerClick,
    title: 'Просто в использовании',
    text: 'Интуитивное управление — подходит для самостоятельного применения дома без специальной подготовки',
  },
  {
    icon: Globe,
    title: 'Доступен в России и СНГ',
    text: 'Широкая сеть официальных дистрибьюторов — уточните наличие в вашем регионе',
  },
  {
    icon: TrendingUp,
    title: 'Инвестиция в здоровье',
    text: 'Вложение, которое окупается уже в первый курс — без повторных визитов в клинику',
  },
];

export function FinalCTA() {
  return (
    <section id="buy" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main CTA card */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 md:p-16 text-center shadow-2xl shadow-brand-500/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-300/20 blur-3xl" />

            <div className="relative">
              <h2 className="font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight">
                Начните лечение сегодня —
                <br />
                без рецепта и клиники
              </h2>
              <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                «Магнитрон» доступен для самостоятельного применения в России и странах
                СНГ. Уточните наличие у официальных дистрибьюторов.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Three blocks */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 120}>
              <div className="h-full p-7 rounded-2xl bg-brand-50 border border-brand-100 hover:border-brand-200 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5">
                  <block.icon className="w-6 h-6 text-brand-600" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{block.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{block.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Final text */}
        <Reveal delay={400}>
          <div className="mt-10 text-center">
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              «Магнитрон» — первый аппарат, где деликатность воздействия и высокая
              эффективность наконец совместились в одном устройстве для домашнего
              использования.
            </p>
          </div>
        </Reveal>

        {/* Button */}
        <Reveal delay={500}>
          <div className="mt-10 text-center">
            <a
              href="#buy"
              className="group inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-full bg-brand-500 text-white font-bold text-lg shadow-xl shadow-brand-500/25 hover:bg-brand-600 hover:shadow-2xl hover:shadow-brand-500/35 hover:scale-[1.03] transition-all"
            >
              <MapPin className="w-6 h-6" />
              Где купить
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
