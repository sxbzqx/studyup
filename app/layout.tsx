import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Помощь с учебой: Презентации, Доклады, Курсовые',
  description: 'Быстрое и качественное выполнение учебных работ: презентации в PowerPoint/Canva, доклады, рефераты и срочная помощь.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900 antialiased bg-white`}>
        {/* Хедер */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="#" className="text-xl font-black text-blue-600 tracking-tight">
              StudyHelp<span className="text-gray-900">.</span>
            </a>
            <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#services" className="hover:text-blue-600 transition">Услуги</a>
              <a href="#order" className="hover:text-blue-600 transition">Заказать</a>
            </nav>
            <a
              href="#order"
              className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Связаться
            </a>
          </div>
        </header>

        {children}

        {/* Футер */}
        <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800 text-center text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <p>© 2026 StudyUp. Все права защищены.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}