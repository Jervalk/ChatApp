import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sub = new ReplaySubject(1);

  constructor() { }

  setSelectedContact(id) {
    return this.sub.next(id);
  }
}
