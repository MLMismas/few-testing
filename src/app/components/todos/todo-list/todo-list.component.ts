import { Component, Input, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoItems: TodoListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
