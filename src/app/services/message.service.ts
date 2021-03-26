import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  post: string;
  constructor(private http: HttpClient) { }


  postMessage(msg: string) {
    this.http.post<any>(`http://localhost:1337/messages`, {
      Content: msg,
      Sender: {id: 1}
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
}
