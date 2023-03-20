import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable, shareReplay, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentService} from "../comment.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  newComment: FormGroup<{
    user: FormControl<string>
    comment: FormControl<string>
  }>;

  taskId$: Observable<string> = this.activatedRoute.params.pipe(tap(data => console.log(data)), map(path => path["taskId"]), shareReplay(1))

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService, private matSnackBar: MatSnackBar) {
    this.newComment = new FormGroup<{user: FormControl<string>; comment: FormControl<string>}>({
      user: new FormControl('', { nonNullable: true }),
      comment: new FormControl('', { nonNullable: true })
    });
  }

  ngOnInit(): void {
  }

  postComment(taskId: string): void {
    this.commentService.newComment(taskId, this.newComment.getRawValue()).subscribe(newId => {
      location.reload();
    })
  }

}
