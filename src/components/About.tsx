import { Reveal } from './Reveal';
import { Microscope, Radio, Home } from 'lucide-react';

const cards = [
  {
    icon: Microscope,
    title: 'Научная основа',
    text: 'Разработан на базе открытий учёных Тбилисского университета (1980 г.) российскими инженерами',
  },
  {
    icon: Radio,
    title: 'Звуковая частота',
    text: 'Работает на частоте 5 кГц — принципиально иной физический принцип по сравнению с обычными аппаратами',
  },
  {
    icon: Home,
    title: 'Для дома',
    text: 'Простое самостоятельное применение — без клиники и рецепта',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo placeholder */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-brand-100/60 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-brand-100 shadow-xl shadow-brand-500/10">
                <img
                  src="https://images.pexels.com/photos/5793684/pexels-photo-5793684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Применение аппарата «Магнитрон»"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold text-brand-600 tracking-wider uppercase">
                О приборе
              </span>
              <h2 className="mt-4 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
                Что такое «Магнитрон»?
              </h2>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                Первый серийный аппарат, реализующий все преимущества магнитного поля
                звуковой частоты (5 кГц) для домашнего лечения.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div className="group flex gap-5 p-6 rounded-2xl bg-white border border-brand-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:scale-110 transition-all">
                      <card.icon className="w-7 h-7 text-brand-600" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1.5">{card.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{card.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
