import { Injectable } from '@angular/core';
import { TodoItem, TodoStatus } from './models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: TodoItem[] = [];
  constructor() {}

  // Метод для добавления новой записи в to-do лист
  addTodoItem(
    title: string,
    description: string,
    status: TodoStatus = TodoStatus.Normal
  ): void {
    const id = this.todoList.length + 1; // Просто увеличиваем длину массива на 1 для уникального ID
    const newItem = new TodoItem(id, title, description, status);
    this.todoList.push(newItem);
  }

  // Метод для удаления записи из to-do листа по ID
  deleteTodoItem(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }

  // Метод для изменения статуса существующей записи по ID
  changeTodoItemStatus(id: number, newStatus: TodoStatus): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.status = newStatus;
    }
  }

  // Получить весь список to-do записей
  getTodoList(): TodoItem[] {
    return this.todoList;
  }
}
