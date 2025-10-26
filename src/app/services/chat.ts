import { Injectable, signal } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class Chat {
  private messagesSignal = signal<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);

  readonly messages = this.messagesSignal.asReadonly();

  sendMessage(content: string): void {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    this.messagesSignal.update(messages => [...messages, userMessage]);

    setTimeout(() => {
      const response = this.generateResponse(content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      this.messagesSignal.update(messages => [...messages, assistantMessage]);
    }, 500);
  }

  private generateResponse(userMessage: string): string {
    return 'Thank you for your message. This is a demo response from the AI assistant.';
  }

  clearMessages(): void {
    this.messagesSignal.set([
      {
        id: '1',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        sender: 'assistant',
        timestamp: new Date()
      }
    ]);
  }
}
