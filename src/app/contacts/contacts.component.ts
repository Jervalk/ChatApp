import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = [];
  url = 'http://localhost:1337/contacts';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getContacts();
  }

  public getContacts() {
    return this.http.get<any>(this.url).subscribe(
      (response) => {
        this.contacts = response;
        console.log(this.contacts);
    });
  }


}
