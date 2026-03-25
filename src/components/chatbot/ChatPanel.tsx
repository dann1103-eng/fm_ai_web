'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const WEBHOOK_URL = 'https://n8n-n8n.5hoafb.easypanel.host/webhook-test/chatbot_fmai_test';

interface ChatPanelProps {
  onClose: () => void;
}

export default function ChatPanel({ onClose }: ChatPanelProps) {
  const t = useTranslations('chatbot');
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', text: t('greeting'), sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput('');
    const userMsg: Message = { id: crypto.randomUUID(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: data.response || data.message || data.output || 'Lo siento, hubo un error.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: 'Error de conexión. Intenta de nuevo.', sender: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[420px] flex flex-col bg-surface-container border border-outline-variant/30 rounded-2xl shadow-2xl shadow-cyan-900/30 overflow-hidden mb-2">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 neural-gradient">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-white text-lg">smart_toy</span>
          <span className="font-headline font-bold text-white text-sm">{t('title')}</span>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'neural-gradient text-white rounded-br-sm'
                  : 'bg-surface-container-high text-on-surface rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-surface-container-high px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-outline-variant/20 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder={t('placeholder')}
          className="flex-1 bg-surface-container-high border border-outline-variant/30 rounded-xl px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary/50 transition-colors"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="w-9 h-9 rounded-xl neural-gradient flex items-center justify-center disabled:opacity-40 hover:scale-105 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-white text-lg">send</span>
        </button>
      </div>
    </div>
  );
}
