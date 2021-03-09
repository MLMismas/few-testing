import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FakeNavComponent, FakeRouterComponent]
      // schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-nav',
  template: ''
}) class FakeNavComponent { }

@Component({
  selector: 'router-outlet',
  template: ''
}) class FakeRouterComponent { }

