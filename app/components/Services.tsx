'use client';

import { useState } from 'react';
import OrderForm from './OrderForm';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  time: string;
  icon: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: 'presentation',
    title: 'Презентации',
    description: 'Индивидуальный дизайн в PowerPoint, Keynote или Canva. Структурированный контент и спикер-ноты.',
    price: 'от 500 сом',
    time: 'от 2-3 часов',
    icon: '📊',
    features: ['Уникальный шаблон', 'Инфографика и диаграммы', 'Заметки к каждому слайду'],
  },
  {
    id: 'report',
    title: 'Доклады и рефераты',
    description: 'Глубокая проработка темы, проверка на антиплагиат и полное оформление по стандартам.',
    price: 'от 400 сом',
    time: 'от 4 часов',
    icon: '📄',
    features: ['Оформление по ГОСТу', 'Высокая уникальность', 'Актуальные источники'],
  },
  {
    id: 'coursework',
    title: 'Курсовые работы',
    description: 'Полный цикл разработки: от теоретической части и сбора материала до практических расчетов.',
    price: 'от 1500 сом',
    time: 'от 1-2 дней',
    icon: '📝',
    features: ['Бесплатные правки', 'Сопровождение до защиты', 'Полный пакет документов'],
  },
  {
    id: 'express',
    title: 'Срочная помощь',
    description: 'Нужно сдать работы «еще вчера»? Берем горящие заказы с дедлайном за пару часов.',
    price: 'от 800 сом',
    time: 'от 1 часа',
    icon: '⚡',
    features: ['Приоритетное выполнение', 'Прямая связь в Telegram', 'Без потери качества'],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Наши услуги и цены
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Помогаем студентам и школьникам сдавать работы вовремя и на отличные оценки.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="border-t pt-4 mb-4 flex justify-between items-center text-sm">
                  <span className="font-bold text-blue-600">{service.price}</span>
                  <span className="text-gray-400 text-xs">⏳ {service.time}</span>
                </div>

                <button
                  onClick={() => setSelectedService(service.title)}
                  className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-xl text-sm transition-colors text-center"
                >
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно с формой при клике на "Заказать" */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ✕
            </button>
            <OrderForm selectedService={selectedService} />
          </div>
        </div>
      )}
    </section>
  );
}