import {Component, Input, OnInit} from '@angular/core';
import {EmailService} from "../email.service";
import {Email} from "../types";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input()
  commentId!: number;

  email: Email | null = null;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmail(this.commentId.toString()).subscribe(email => this.email = email)
  }

}
