// import required packages
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AddTodoComponent } from './app/add-todo.component';

// describe component
@Component({
  selector: 'app-root', // component name used in markup
  standalone: true, // component is self-contained
  // the component's markup
  template: `
 <div style="text-align:center">
 <h1>Welcome to the Todo List App!</h1>
 <app-add-todo></app-add-todo>
 <app-todo-list></app-todo-list>
 </div>
 `,
})

// export component
export class AppComponent {}

bootstrapApplication(AppComponent);
