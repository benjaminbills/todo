import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [new Task(1, 'wash laundry'), new Task(2, 'Read a book')];

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  addNewTask(task: Task) {
    let taskLength = this.tasks.length;
    task.id = taskLength + 1;
    this.tasks.unshift(task);
  }
  constructor() {}

  ngOnInit(): void {}
}
