import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { TodoListItem } from 'src/app/models/todos';
import { TodosDataService } from 'src/services/todos-data.service';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let serviceSpy: jasmine.SpyObj<TodosDataService>;
  let todoComponent: TodosComponent;
  let todoFixture: ComponentFixture<TodosComponent>;
  let listComponent: TodoListComponent;
  let entryComponent: TodoEntryComponentStub;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj<TodosDataService>(
      'todos-data', ['getData$', 'loadData', 'addTodo']
    );
    serviceSpy.getData$.and.returnValue(of([{ id: '1', description: 'Stuff' }]));
    TestBed.configureTestingModule({
      declarations: [TodosComponent, TodoEntryComponentStub, TodoListComponentStub],
      providers: [{ provide: TodosDataService, useValue: serviceSpy }]
    });

    todoFixture = TestBed.createComponent(TodosComponent);
    todoComponent = todoFixture.componentInstance;

    entryComponent = todoFixture.debugElement.queryAll(By.directive(TodoEntryComponentStub))
      .map(el => el.componentInstance)[0];
    listComponent = todoFixture.debugElement.queryAll(By.directive(TodoListComponentStub))
      .map(el => el.componentInstance)[0];
  });

  it('should call load data on ngOnInit', () => {
    expect(serviceSpy.loadData).not.toHaveBeenCalled();
    todoComponent.ngOnInit();
    expect(serviceSpy.loadData).toHaveBeenCalled();
  });
  it('should give the data to the list component', fakeAsync(() => {
    todoComponent.ngOnInit();
    tick();
    todoFixture.detectChanges();
    expect(listComponent.todoItems).toEqual([{ id: '1', description: 'Stuff' }]);
  }));
  it('adds the item to the service when the entry emits', () => {
    entryComponent.doIt('BEER');
    expect(serviceSpy.addTodo).toHaveBeenCalledWith({ description: 'BEER' });
  });
});

@Component({
  selector: 'app-todo-entry',
  template: ''
})
class TodoEntryComponentStub {
  @Output() itemAdded = new EventEmitter<string>();
  doIt(what: string) {
    this.itemAdded.emit(what);
  }
}

@Component({
  selector: 'app-todo-list',
  template: ''
})
class TodoListComponentStub {
  @Input() todoItems: TodoListItem[];
}
