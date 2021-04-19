import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {ContactService} from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  post: string;
  sub = new ReplaySubject(1);
  conversationData = new BehaviorSubject([]);
  constructor(private http: HttpClient, private contactId: ContactService) { }


  getConversation(id: number) {
    this.http.get<any>(`http://localhost:1337/conversations?contacts=${id}`).subscribe((data) => {
      this.conversationData.next(data);
    });
  }

  createConversation(contactId: number, senderId: number) {
    this.http.post<any>(`http://localhost:1337/conversations?contacts:${contactId}`, {
      contacts: [{id: contactId}, {id: senderId}],
    }).subscribe({
      next: data => {
        console.log('Conversation posted successfully', data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  postMessage(msg: string, contactId: number, conversationId: number) {
    this.http.post<any>(`http://localhost:1337/messages`, {
      Content: msg,
      Sender: {id: contactId},
      conversation: {id: conversationId},
    }).subscribe({
      next: data => {
        this.post = data;
        console.log('Data posted successfully');
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  getMessages() {
    return this.http.get<any>(`http://localhost:1337/messages`);
  }

  setConversation(id) {
    return this.sub.next(id);
  }
}
