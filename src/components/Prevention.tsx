import { Reveal } from './Reveal';
import { Monitor, Dumbbell, BatteryCharging } from 'lucide-react';

const cards = [
  {
    icon: Monitor,
    title: 'Офисные работники и водители',
    text: 'Профилактика простатита и геморроя при длительном сидячем положении',
  },
  {
    icon: Dumbbell,
    title: 'Активный образ жизни',
    text: 'Защита суставов и позвоночника при регулярных физических нагрузках',
  },
  {
    icon: BatteryCharging,
    title: 'Терапия в любом месте',
    text: 'Аккумуляторная модель — применяйте в дороге, на работе и дома',
  },
];

export function Prevention() {
  return (
    <section id="prevention" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/Apparat.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Overlay to keep content readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: empty spacer — photo is now the background */}
          <div className="hidden lg:block" />

          {/* Right: Content */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold text-brand-600 tracking-wider uppercase">
                Профилактика
              </span>
              <h2 className="mt-4 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
                Профилактика, а не только лечение
              </h2>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                Благодаря напряжённости поля, сопоставимой с геомагнитным фоном,
                «Магнитрон» можно применять ежедневно — не дожидаясь болезни. Это
                инструмент активной защиты здоровья.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div className="group flex gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-brand-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
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
