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
        className="w-14 h-14 rounded-full neural-gradient flex items-center justify-center cyan-glow hover:scale-110 active:scale-95 transition-transform shadow-lg"
      >
        <span className="material-symbols-outlined text-white text-2xl">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  );
}
