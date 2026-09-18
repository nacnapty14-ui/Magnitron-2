import { Mail, MapPin, Building2, BadgeCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo_magnitron.svg" alt="" className="h-9 w-9" />
              <span className="font-bold text-xl text-white tracking-tight">Магнитрон</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Аппарат низкоинтенсивной магнитотерапии нового поколения. Поле звуковой
              частоты 5 кГц для домашнего лечения и профилактики.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              {[
                { l: 'О приборе', h: '#about' }, { l: 'Прорыв', h: '#breakthrough' }, { l: 'Сравнение', h: '#comparison' }, { l: 'Показания', h: '#indications' }, { l: 'Профилактика', h: '#prevention' },
              ].map((item) => <li key={item.h}><a href={item.h} className="text-sm text-gray-400 hover:text-white transition-colors">{item.l}</a></li>)}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5"><Mail className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /><a href="mailto:info@magnitron.pro" className="hover:text-white transition-colors">info@magnitron.pro</a></div>
              <div className="flex items-start gap-2.5"><Building2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /><span>ООО «ЦЕНТР НАУЧ МЕД ПРИБОР»</span></div>
              <div className="flex items-start gap-2.5"><BadgeCheck className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /><span>Резидент Сколково, официальный статус МТК</span></div>
              <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /><span>142214, Московская обл., г. о. Серпухов</span></div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 space-y-1"><p>Магнитрон — зарегистрированный товарный знак</p><p>Производитель — ООО «ЦЕНТР НАУЧ МЕД ПРИБОР» · ИНН 5043088633</p></div>
          <p className="text-xs text-gray-600 max-w-md text-center md:text-right">Перед применением проконсультируйтесь с врачом. Имеются противопоказания.</p>
        </div>
      </div>
    </footer>
  );
}
