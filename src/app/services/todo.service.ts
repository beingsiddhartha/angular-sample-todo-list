import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav = [];
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Interview R1',
      isCompleted: false,
      isFavorite: false,
      date: new Date('9-9-2023')
    },
    {
      id: 2,
      title: 'Interview R2',
      isCompleted: false,
      isFavorite: false,
      date: new Date('9-18-2023')
    },
    {
      id: 3,
      title: 'Interview L',
      isCompleted: false,
      isFavorite: false,
      date: new Date('9-20-2023')
    }
  ];

  constructor(private deletePopup: ToastrService) { }

  deleteTodo(item) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);

    // this.deletePopup.success(`Todo ${item.id} Deleted!`);
  }

  addTodo(title) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);
  }

  updateFav(){
    this.fav = JSON.parse(localStorage.getItem('favorite'));
  }
}
