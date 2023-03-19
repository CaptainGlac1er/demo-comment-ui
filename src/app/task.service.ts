import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "./types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskComments(taskId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8080/task/${taskId}/comments`);
  }
}
