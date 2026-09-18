import { Reveal } from './Reveal';
import { TrendingUp, Clock, RefreshCw } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    title: 'Клиническое превосходство',
    text: '«Магнитрон» демонстрирует 97 положительных результатов на 1 отрицательный — против соотношения 66 к 16 у аппаратов промышленной частоты',
  },
  {
    icon: Clock,
    title: 'Вдвое короче процедура',
    text: 'Экспозиция значительно короче при более высокой эффективности',
  },
  {
    icon: RefreshCw,
    title: 'Длительное последействие',
    text: 'Терапевтический эффект сохраняется после завершения курса',
  },
];

export function Results() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-brand-600 tracking-wider uppercase">
            Результаты
          </span>
          <h2 className="mt-4 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Результаты, которые говорят сами за себя
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {results.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group h-full p-8 rounded-2xl bg-brand-50 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/8 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all">
                  <item.icon className="w-7 h-7 text-brand-600" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
