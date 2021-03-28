import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  post: string;
  constructor(private http: HttpClient) { }

  getConversation(id: string) {
    return this.http.get(`http://localhost:1337/conversations?contacts=${id}`);
  }

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

  getMessages() {
    return this.http.get<any>(`http://localhost:1337/messages`)
  }
}
