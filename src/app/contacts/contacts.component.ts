import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = [];
  constructor(private http: HttpClient, private listMessage: MessageService) { }

  ngOnInit() {
     this.getContacts();
  }

  displayMsgOnClick(id: string) {
    this.listMessage.getConversation(id);
  }

  getContacts() {
    return  this.http.get<any>(`http://localhost:1337/contacts`).subscribe(
      (response) => {
        this.contacts = response;
    });
  }



}
