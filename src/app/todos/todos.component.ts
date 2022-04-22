import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todoItem = ''
  todos: string[] = [];

  constructor() {}

  addToDo() {
    if(this.todoItem.length === 0) {
      this.todos
    } else {
      this.todos.push(this.todoItem);
      this.todoItem = '';
    }
  }
}

