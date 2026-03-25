'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const WEBHOOK_URL =
  'https://n8n-n8n.5hoafb.easypanel.host/webhook-test/chatbot_fmai_test';

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
        text:
          data.response || data.message || data.output ||
          'Lo siento, hubo un error al procesar tu solicitud.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: 'Error de conexión. Por favor intenta de nuevo.',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[440px] flex flex-col bg-white border border-outline-variant/30 rounded-[2rem] shadow-2xl shadow-primary/10 overflow-hidden mb-3">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-primary">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-lg">smart_toy</span>
          </div>
          <div>
            <p className="font-bold text-on-primary font-headline text-sm">{t('title')}</p>
            <p className="text-on-primary/60 text-xs font-label">FM AI · Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-on-primary/70 hover:text-on-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-surface-container-low/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed font-body ${
                msg.sender === 'user'
                  ? 'bg-primary text-on-primary rounded-[1.25rem] rounded-br-sm'
                  : 'bg-white text-on-surface rounded-[1.25rem] rounded-bl-sm shadow-sm border border-outline-variant/20'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white px-5 py-4 rounded-[1.25rem] rounded-bl-sm shadow-sm border border-outline-variant/20 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-outline-variant/20 bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder={t('placeholder')}
          className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-full px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-body"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-40 hover:bg-ochre active:scale-95 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-on-primary text-lg">send</span>
        </button>
      </div>
    </div>
  );
}
