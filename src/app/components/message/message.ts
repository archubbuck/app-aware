import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message as MessageModel } from '../../models/message.model';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Message {
  message = input.required<MessageModel>();
}
