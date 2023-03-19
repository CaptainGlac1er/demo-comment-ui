import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { CommentComponent } from './comment/comment.component';
import { EmailComponent } from './email/email.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: 'task/:taskId',
    component: TaskContainerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskContainerComponent,
    EmailReplyComponent,
    CommentComponent,
    EmailComponent,
    CommentContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
