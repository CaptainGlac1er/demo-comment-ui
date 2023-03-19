import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "./types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getReplies(commentId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8080/comment/${commentId}/replies`);
  }

}
