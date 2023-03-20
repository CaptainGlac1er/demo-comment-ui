import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Email } from './types';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getEmail(commentId: string): Observable<Email> {
    return this.http.get<Email>(`http://localhost:8080/email/${commentId}`);
  }

  sendEmail(user: string, commentId: string, emails: string[]): Observable<Email> {
    return this.http.post<Email>(`http://localhost:8080/email/${user}/send/${commentId}`, emails)
  }

  replyEmail(user: string, emailId: string, emailContents: string): Observable<Email> {
    return this.http.post<Email>(`http://localhost:8080/email/${user}/reply/${emailId}`, {
      "emailRecipients": ["system@example.com"],
      emailContents
    });
  }
}
