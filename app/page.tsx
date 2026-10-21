import Services from './components/Services';
import OrderForm from './components/OrderForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero-блок */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            ⚡ Помощь по учебе за пару часов
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight mb-6">
            Презентации, доклады и работы на заказ
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Сделаем качественную работу с высоким процентом уникальности и правильным оформлением. Без нервов и строго в срок.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="py-3.5 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#services"
              className="py-3.5 px-8 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition"
            >
              Смотреть услуги
            </a>
          </div>
        </div>
      </section>

      {/* Блок Услуг */}
      <Services />

      {/* Преимущества */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-bold text-gray-800 mb-1">Без предоплаты 100%</h4>
            <p className="text-sm text-gray-500">Сначала показываем часть работы или структуру, потом оплата.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🛡</div>
            <h4 className="font-bold text-gray-800 mb-1">Гарантия правок</h4>
            <p className="text-sm text-gray-500">Если препод попросит исправить — сделаем бесплатно.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="font-bold text-gray-800 mb-1">Быстрый ответ</h4>
            <p className="text-sm text-gray-500">Отвечаем в течение 5-10 минут после отправки заявки.</p>
          </div>
        </div>
      </section>

      {/* Секция с формой */}
      <section id="order" className="py-16 bg-gray-50 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Оформить заявку</h2>
            <p className="text-gray-600">Заполните форму, и мы напишем вам в Telegram для уточнения деталей</p>
          </div>
          <OrderForm />
        </div>
      </section>
    </main>
  );
}