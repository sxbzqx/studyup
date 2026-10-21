import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, service, details, deadline } = body;

    // Валидация на сервере
    if (!name || !contact || !service) {
      return NextResponse.json(
        { error: 'Заполните обязательные поля' },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: 'Ошибка конфигурации сервера' },
        { status: 500 }
      );
    }

    // Красивая верстка сообщения в Маркдауне
    const text = `
🔥 **НОВАЯ ЗАЯВКА С САЙТА**

👤 **Имя:** ${name}
📱 **Связь:** ${contact}
🛠 **Услуга:** ${service}
⏳ **Дедлайн:** ${deadline || 'Не указан'}
📝 **Комментарий:** ${details || 'Нет'}
    `.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramRes.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending lead:', error);
    return NextResponse.json(
      { error: 'Не удалось отправить заявку' },
      { status: 500 }
    );
  }
}