import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
