import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input()
  commentId: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
