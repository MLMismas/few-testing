import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  items: TodoListItem[] = [
    { id: '1', description: 'Create a Service For This' },
    { id: '2', description: 'Call the Drs Office' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onItemAdded(item: string): void {
    console.log('Got an item', item);
  }
}
