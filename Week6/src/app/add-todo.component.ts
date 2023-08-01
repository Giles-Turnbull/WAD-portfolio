import { Component } from '@angular/core';
import { TodoListComponent} from './todo-list.component';

@Component({
  selector: 'app-add-todo',
  template: `
 <h2>Add Todo</h2>
 <input type="text" [(ngModel)]="newTodo">
 <button (click)="addTodo()">Add</button>
 `,
})
export class AddTodoComponent {
  newTodo: string = '';
  addTodo() {
    if (this.newTodo) {
      //get the todo list from the parent component
      let todoList = TodoListComponent.todoItems;
      todoList.push(this.newTodo);
      //clear the input
      this.newTodo = '';
    }
  }
}
