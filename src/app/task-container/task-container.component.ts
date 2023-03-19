import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable, shareReplay, tap} from "rxjs";

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  taskId$: Observable<string> = this.activatedRoute.params.pipe(tap(data => console.log(data)), map(path => path["taskId"]), shareReplay(1))

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
