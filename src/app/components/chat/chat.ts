import { Component, signal, effect, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '../message/message';
import { Chat as ChatService } from '../../services/chat';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule, Message],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  userInput = signal('');
  private shouldScroll = false;

  constructor(protected chatService: ChatService) {
    effect(() => {
      this.chatService.messages();
      this.shouldScroll = true;
    });
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  sendMessage(): void {
    const message = this.userInput().trim();
    if (message) {
      this.chatService.sendMessage(message);
      this.userInput.set('');
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  clearChat(): void {
    this.chatService.clearMessages();
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = 
          this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch(err) { 
      // Silently ignore scroll errors that may occur during view initialization
    }
  }
}
