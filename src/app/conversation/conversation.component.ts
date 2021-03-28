import {Component, OnInit} from '@angular/core';
import { ContactService } from '../services/contact.service';
import {MessageService} from '../services/message.service';
import {log} from 'util';

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
    this.contactId.sub.subscribe((id: number) => {
      this.messageService.getConversation(id).subscribe((data: any) => {
        !data.length ? this.messageService.createConversation(id, 11) : this.conversation = data;
        this.messageService.setConversation(data[0].id);
      });
    });
  }


}
