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
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

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
    CommentContainerComponent,
    EmailDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
