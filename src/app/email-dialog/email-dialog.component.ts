import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.scss']
})
export class EmailDialogComponent implements OnInit {
  protected emailDialog: FormGroup<{
    input: FormControl<string>
  }>;

  constructor(public dialogRef: MatDialogRef<EmailDialogComponent>) {
    this.emailDialog = new FormGroup<{input: FormControl<string>}>({
      input: new FormControl<string>('', { nonNullable: true })
    })
  }

  closeDialog() {
    this.dialogRef.close(this.emailDialog.getRawValue().input);
  }
  ngOnInit(): void {
  }

}
