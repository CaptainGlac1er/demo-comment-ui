import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Comment} from "../types";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {
  @Input()
  taskId!: string;

  comments: Comment[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskComments(this.taskId).subscribe(comments => this.comments = comments);
  }

}
