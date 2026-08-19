export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  metadata?: {
    title?: string;
    theme?: string;
    date?: string;
  };
  reflection?: string;
}
