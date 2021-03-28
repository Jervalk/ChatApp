import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sub = new ReplaySubject(1);

  constructor(private http: HttpClient) { }

  setSelectedContact(id) {
    return this.sub.next(id);
  }

  getContacts() {
    return  this.http.get<any>(`http://localhost:1337/contacts?id_ne=11`);
  }
}
