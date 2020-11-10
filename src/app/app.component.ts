import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogResult } from './task-dialog/task-dialog.component';
import { Task } from './task/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-angular-app';
  todo: Task[] = [
    {title: "buy milk", description:"Go to the store and buy milk" },
    {title: "buy water", description:"Go to the store and buy water" },
    {title: "buy meat", description:"Go to the store and buy meat" },
    {title: "buy beer", description:"Go to the store and buy beer" }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog){}

  drop(event: CdkDragDrop<Task[]>): void{
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);;
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  edit(list: string, task:Task): void{

  }
  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task:{}
      }
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult ) => this.todo.push(result.task))
  }
}
