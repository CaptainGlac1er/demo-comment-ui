import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../types";
import {CommentService} from "../comment.service";
import {EmailService} from "../email.service";
import {MatDialog} from "@angular/material/dialog";
import {EmailDialogComponent} from "../email-dialog/email-dialog.component";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  comment!: Comment;
  replies: Comment[] = [];

  constructor(private commentService: CommentService, private emailService: EmailService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showReplies(comment: Comment) {
    this.commentService.getReplies(comment.id).subscribe(comments => {
      this.replies = comments;
    })
  }

  emailComment(comment: Comment) {
    let emailDialog = this.dialog.open(EmailDialogComponent);
    emailDialog.afterClosed().subscribe(result => {
      if(result) {
        this.emailService.sendEmail('system', comment.id.toString(), JSON.parse(result)).subscribe(() => {
          location.reload();
        })

      }
    })
  }
}
