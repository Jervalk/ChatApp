import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  message: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.sub.subscribe((id: number) => {
      this.messageService.postMessage(this.message, 11, id);
    });
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }
}
