import { Injectable, signal } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class Chat {
  private messagesSignal = signal<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m ChatSEO, your AI-powered SEO assistant. I can help you with keyword research, content optimization, technical SEO, link building, and more. What SEO question can I help you with today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);

  readonly messages = this.messagesSignal.asReadonly();

  private seoResponses: { [key: string]: string } = {
    'keyword': 'For keyword research, focus on finding relevant long-tail keywords with good search volume and low competition. Use tools like Google Keyword Planner, consider search intent, and analyze your competitors. Would you like specific tips for your niche?',
    'seo': 'SEO (Search Engine Optimization) is the practice of improving your website to increase visibility in search engine results. Key areas include: technical SEO, on-page optimization, content creation, and link building. What specific aspect would you like to explore?',
    'backlink': 'Quality backlinks are crucial for SEO. Focus on: creating valuable content that others want to link to, guest posting on reputable sites, broken link building, and building relationships in your industry. Always prioritize quality over quantity.',
    'content': 'SEO-friendly content should be: valuable to readers, well-structured with proper headings (H1, H2, etc.), optimized for target keywords naturally, comprehensive, and regularly updated. Include internal links and multimedia elements.',
    'technical': 'Technical SEO includes: site speed optimization, mobile-friendliness, proper URL structure, XML sitemaps, robots.txt, structured data markup, HTTPS security, and fixing crawl errors. These are foundational for search engine visibility.',
    'rank': 'To improve rankings: create high-quality content, optimize on-page elements (title tags, meta descriptions, headers), build quality backlinks, improve user experience, ensure mobile-friendliness, and monitor your progress with analytics tools.',
    'meta': 'Meta descriptions should be 150-160 characters, compelling, include target keywords naturally, and accurately describe page content. While not a direct ranking factor, they impact click-through rates from search results.',
    'title': 'Title tags are crucial for SEO: keep them under 60 characters, include primary keywords near the beginning, make them unique for each page, and write them to be compelling for users while descriptive of content.',
    'help': 'I can help you with: Keyword Research, Content Optimization, Technical SEO, Link Building, On-Page SEO, Local SEO, SEO Analytics, and more. Just ask me about any SEO topic!',
    'default': 'That\'s a great SEO question! Based on current best practices, I recommend focusing on creating high-quality, user-focused content while ensuring your technical SEO foundation is solid. Could you provide more details about your specific situation?'
  };

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
    const lowerMessage = userMessage.toLowerCase();
    
    // Sort keywords by length (longest first) to match more specific terms first
    const sortedKeywords = Object.keys(this.seoResponses)
      .filter(key => key !== 'default')
      .sort((a, b) => b.length - a.length);
    
    for (const key of sortedKeywords) {
      if (lowerMessage.includes(key)) {
        return this.seoResponses[key];
      }
    }
    
    return this.seoResponses['default'];
  }

  clearMessages(): void {
    this.messagesSignal.set([
      {
        id: '1',
        content: 'Hello! I\'m ChatSEO, your AI-powered SEO assistant. I can help you with keyword research, content optimization, technical SEO, link building, and more. What SEO question can I help you with today?',
        sender: 'assistant',
        timestamp: new Date()
      }
    ]);
  }
}
