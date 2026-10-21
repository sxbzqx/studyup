'use client';

import { useState } from 'react';

interface OrderFormProps {
  selectedService?: string;
}

export default function OrderForm({ selectedService = 'Презентация' }: OrderFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      service: formData.get('service'),
      deadline: formData.get('deadline'),
      details: formData.get('details'),
    };

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h3 className="text-2xl font-bold text-gray-800">Заказать работу</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Ваше имя</label>
        <input required name="name" type="text" placeholder="Александр" className="w-full mt-1 p-2 border rounded-md" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Контакты (Telegram / WhatsApp / Телефон)</label>
        <input required name="contact" type="text" placeholder="@username или +996..." className="w-full mt-1 p-2 border rounded-md" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Услуга</label>
        <select name="service" defaultValue={selectedService} className="w-full mt-1 p-2 border rounded-md">
          <option value="Презентация">Презентация (PowerPoint / Canva)</option>
          <option value="Доклад / Реферат">Доклад / Реферат</option>
          <option value="Курсовая работа">Курсовая работа</option>
          <option value="Срочная помощь">Срочная помощь (в течение дня)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Срок сдачи (Дедлайн)</label>
        <input name="deadline" type="text" placeholder="Например: завтра до 18:00" className="w-full mt-1 p-2 border rounded-md" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Детали или тема работы</label>
        <textarea name="details" rows={3} placeholder="Тема, количество слайдов/страниц..." className="w-full mt-1 p-2 border rounded-md" />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
      >
        {loading ? 'Отправка...' : 'Отправить заявку'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm text-center">Заявка успешно отправлена! Мы свяжемся с вами в течение 10 минут.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">Произошла ошибка при отправке. Попробуйте еще раз.</p>
      )}
    </form>
  );
}