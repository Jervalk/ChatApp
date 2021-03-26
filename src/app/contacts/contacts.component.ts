import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.getContacts();
  }

  public getContacts() {
    return this.http.get<any>(`http://localhost:1337/contacts`).subscribe(
      (response) => {
        this.contacts = response;
    });
  }


}
