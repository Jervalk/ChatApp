import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts = [];

  constructor(private http: HttpClient, private contactId: ContactService) {
    contactId.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }
  displayMsgOnClick(id: string) {
    this.contactId.setSelectedContact(id);
  }


}
