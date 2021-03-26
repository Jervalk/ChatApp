import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { MessagesComponent } from './messages/messages.component';
import { ConversationComponent } from './conversation/conversation.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ChatFormComponent,
    MessagesComponent,
    ConversationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
