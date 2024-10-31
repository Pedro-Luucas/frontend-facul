import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  username: string;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatangular';
  username = 'username';
  message = '';
  messages: Message[] = [];

  submit(): void {
    if (this.message.trim()) {
      // Adiciona a mensagem ao array local
      this.messages.push({
        username: this.username,
        message: this.message
      });
      this.message = ''; // Limpa o campo de entrada
    }
  }
}
