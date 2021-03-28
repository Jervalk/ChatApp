import {Component, OnInit} from '@angular/core';
import { ContactService } from '../services/contact.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  conversation;
  listMessages;
  constructor(private contactId: ContactService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getConversationMessages();
  }

  getConversationMessages() {
    this.contactId.sub.subscribe((id: string) => {
      this.messageService.getConversation(id).subscribe((data) => {
        this.conversation = data;
        this.conversation.map(item => {
          this.listMessages = item.messages;
          console.log(this.listMessages);
        });
      });
    });
  }


}
