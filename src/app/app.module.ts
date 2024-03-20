import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';

@NgModule({
  declarations: [TodoItemComponent, AppComponent, TodoListComponent, TodoAddComponent, TodoSearchComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
