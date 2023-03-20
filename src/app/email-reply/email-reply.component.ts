import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmailService} from "../email.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit {

  protected mockReplyEmail: FormGroup<{
    user: FormControl<string>,
    emailId: FormControl<string>
    message: FormControl<string>
  }>

  constructor(private emailService: EmailService, private matSnackBar: MatSnackBar) {
    this.mockReplyEmail = new FormGroup<{user: FormControl<string>; emailId: FormControl<string>; message: FormControl<string>}>({
      user: new FormControl<string>('', { nonNullable: true}),
      emailId: new FormControl<string>('', { nonNullable: true}),
      message: new FormControl<string>('', { nonNullable: true})
    })
  }

  ngOnInit(): void {
  }

  sendReply(): void {
    const emailData = this.mockReplyEmail.getRawValue();
    this.emailService.replyEmail(emailData.user, emailData.emailId, emailData.message).subscribe(emailDto => {
      location.reload();
    })
  }

}
