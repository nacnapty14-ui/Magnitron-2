import { Reveal } from './Reveal';
import { Counter } from './Counter';

const stats = [
  {
    value: 5,
    suffix: ' кГц',
    label: 'Рабочая частота',
    sub: 'Звуковой диапазон — биологически активнее промышленной частоты 50 Гц',
  },
  {
    value: 160,
    suffix: ' А/м',
    label: 'Напряжённость',
    sub: 'Лечебное воздействие «Магнитрона» — всего 4 геомагнитных фона',
  },
  {
    value: 250,
    suffix: '×',
    label: 'Разница с конкурентами',
    sub: 'Аппаратам промышленной частоты нужна напряжённость в 250 раз выше',
  },
];

export function Breakthrough() {
  return (
    <section id="breakthrough" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-brand-600 tracking-wider uppercase">
            Прорыв
          </span>
          <h2 className="mt-4 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Почему звуковая частота — это прорыв?
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Поле звуковой частоты биологически активнее — и при этом требует в сотни
            раз меньшей напряжённости.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 140}>
              <div className="group h-full p-8 rounded-2xl bg-brand-50 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-brand-600 mb-3">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-bold text-lg text-gray-900 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
