import { Reveal } from './Reveal';
import { Check, X, Zap } from 'lucide-react';

const rows = [
  {
    label: 'Напряжённость поля',
    magnetron: '160 А/м (4 геофона)',
    industrial: '40 000 А/м и выше',
  },
  {
    label: 'Эффективность',
    magnetron: '97 : 1 положительных результатов',
    industrial: '66 : 16 положительных результатов',
  },
  {
    label: 'Время процедуры',
    magnetron: 'Вдвое короче',
    industrial: 'Стандартная длительность',
  },
  {
    label: 'Противопоказания по перегреву',
    magnetron: 'Отсутствуют',
    industrial: 'Имеются',
  },
  {
    label: 'Автономность',
    magnetron: 'Аккумуляторная модель — без привязки к сети',
    industrial: 'Требуется подключение к сети',
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-brand-600 tracking-wider uppercase">
            Сравнение
          </span>
          <h2 className="mt-4 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            «Магнитрон» vs аппараты промышленной частоты
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Сравнение по ключевым параметрам, важным для потребителя
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-5 md:p-6">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Параметр</span>
              </div>
              <div className="p-5 md:p-6 bg-brand-100 border-x border-brand-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-gray-900 text-sm md:text-base">Магнитрон</span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <span className="font-bold text-gray-400 text-sm md:text-base">Промышленные аппараты</span>
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                <div className="p-5 md:p-6 flex items-center">
                  <span className="text-sm md:text-base font-medium text-gray-700">{row.label}</span>
                </div>
                <div className="p-5 md:p-6 bg-brand-50/60 border-x border-brand-100 flex items-center gap-2.5">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base text-gray-900 font-medium">{row.magnetron}</span>
                </div>
                <div className="p-5 md:p-6 flex items-center gap-2.5">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                    <X className="w-3 h-3 text-gray-400" strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base text-gray-400">{row.industrial}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
