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
        this.mapData();
        this.filterMessage();

      });
    });
  }
  /*
    Local Storage : https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
  */

  mapData() {
    if (this.conversation != null) {
      this.conversation.map((messagesData) => {
        this.listMessages = messagesData.messages;
        //this.addToLocalStorage(JSON.stringify(messagesData), messagesData.id);
      });
    }
  }

  filterMessage() {
    this.conversation.map((messagesData) => {
      const test = messagesData.messages;
      test.forEach(item => {
        console.log(item);
      });
    });
  }

  addToLocalStorage(data, id) {
    if (localStorage.getItem('dataSource' + id) === null) {
      localStorage.setItem('dataSource' + id, data);
    } else {
      console.log('DataSource' + id + ' already added');
    }
  }

}
