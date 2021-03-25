import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  newTask = new Task(0, '');
  @Output() addTask = new EventEmitter<Task>();
  submitTask() {
    this.addTask.emit({ ...this.newTask });
  }
  constructor() {}

  ngOnInit(): void {}
}
