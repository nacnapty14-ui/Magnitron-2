import { Reveal } from './Reveal';
import { ShieldX, Clock4, Wrench } from 'lucide-react';

const cards = [
  {
    icon: ShieldX,
    title: 'Без противопоказаний',
    text: 'Сверхнизкая напряжённость поля полностью исключает перегрев тканей — применение безопасно без ограничений',
  },
  {
    icon: Clock4,
    title: 'Без ограничений по времени',
    text: 'Аккумуляторная модель позволяет использовать аппарат в движении — в дороге, на работе, дома',
  },
  {
    icon: Wrench,
    title: 'Надёжнее и долговечнее',
    text: 'Конструктивно проще и экономичнее аналогов на промышленной частоте — меньше деталей, выше ресурс',
  },
];

export function KeyDifferences() {
  return (
    <section className="py-24 md:py-32 bg-brand-50">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-brand-600 tracking-wider uppercase">
            Отличия
          </span>
          <h2 className="mt-4 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Ключевые отличия от конкурентов
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            «Магнитрон» переосмыслил стандарты домашней магнитотерапии по трём направлениям:
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <div className="group h-full p-8 rounded-2xl bg-white border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/8 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all">
                  <card.icon className="w-7 h-7 text-brand-600" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
