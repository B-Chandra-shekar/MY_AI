import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  userInput: string = '';
  messages: { sender: 'user' | 'ai'; text: string }[] = [];
  loading: boolean = false;

  constructor(private chatService: ChatService) { }

  send() {
    if (!this.userInput.trim()) return;

    this.messages.push({ sender: 'user', text: this.userInput });
    const message = this.userInput;
    this.userInput = '';
    this.loading = true;

    this.chatService.sendMessage(message).subscribe({
      next: (res) => {
        this.messages.push({ sender: 'ai', text: res.response });
        this.loading = false;
      },
      error: (err) => {
        this.messages.push({ sender: 'ai', text: 'Error: Something went wrong.' });
        this.loading = false;
      }
    });
  }
}
