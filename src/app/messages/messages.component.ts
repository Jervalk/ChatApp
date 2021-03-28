import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: [];

  constructor(private http: HttpClient, private msgService: MessageService) {
    msgService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  ngOnInit() {
  }






}
