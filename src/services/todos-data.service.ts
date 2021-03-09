import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoListItem } from 'src/app/models/todos';
import { environment } from '../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TodosDataService {
  // 1. need a url (http://localhost:3000/todos)
  readonly baseUrl = environment.baseUrl + 'todos';
  // 2. private copy of the list in memory
  private data: TodoListItem[] = [];
  private dataSubject = new BehaviorSubject<TodoListItem[]>(this.data);

  constructor(private http: HttpClient) { }
  // 3. expos that as a subject that the component can observe.
  getData$(): Observable<TodoListItem[]> {
    return this.dataSubject.asObservable();
  }
  // 4. LoadData();
  // 4. loadData();
  loadData(): void {
    this.http.get<{ data: TodoListItem[] }>(this.baseUrl)
      .pipe(
        map(r => r.data),
        tap(items => {
          this.data = items;
          this.dataSubject.next(this.data);
        })
      ).subscribe();
  }
  // 5. to add one.
  addTodo(item: { description: string }): void {
    this.http.post<TodoListItem>(this.baseUrl, item)
      .pipe(
        tap(response => {
          this.data = [response, ...this.data];
          this.dataSubject.next(this.data);
        })
      ).subscribe();
  }
}
