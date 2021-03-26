import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  message: string;
  constructor(private messageService: MessageService, private msg: MessagesComponent) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.postMessage(this.message);
    this.msg.getMessages();
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }
}
