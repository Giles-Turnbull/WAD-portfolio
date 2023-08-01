import { Component } from '@angular/core';
@Component({
  selector: 'app-todo-list',
  template: `
 <h2>Todo List</h2>
 <ul>
 <li *ngFor="let item of todoItems">{{ item }}</li>
 </ul>
 `,
})
export class TodoListComponent {
  static
  todoItems: string[] = ['Item 1', 'Item 2', 'Item 3'];
  
  get SumValue() {
    return TodoListComponent.todoItems;
  }
}
