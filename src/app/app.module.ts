import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [TodoItemComponent, AppComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
