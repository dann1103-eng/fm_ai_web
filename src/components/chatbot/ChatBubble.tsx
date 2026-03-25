'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ChatPanel from './ChatPanel';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('chatbot');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && <ChatPanel onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('title')}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 hover:bg-ochre hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <span className="material-symbols-outlined text-on-primary text-2xl">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  );
}
