import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoEntryComponent } from './todo-entry.component';
import { FixtureElementUtils } from '../../../utils/testing';

describe('TodoEntryComponent', () => {
  let componentFixture: ComponentFixture<TodoEntryComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoEntryComponent],
      imports: [ReactiveFormsModule]
    });
    componentFixture = TestBed.createComponent(TodoEntryComponent);
    // componentFixture.componentInstance.ngOnInit();
    componentFixture.autoDetectChanges();
  });
  it('the form should not be valid until it is filled out', () => {
    expect(componentFixture.componentInstance.form.invalid).toBe(true);
    const errors = componentFixture.componentInstance.item.errors;
    expect(errors).toEqual({ required: true });
  });
  it('emits when the form is valid and submitted', () => {
    const util = new FixtureElementUtils(componentFixture.debugElement);
    const submitButton = util.getNativeElement<HTMLButtonElement>('[data-t-todo-submit]');
    componentFixture.componentInstance.item.setValue('Things');
    spyOn(componentFixture.componentInstance.itemAdded, 'emit');
    submitButton.click();
    // componentFixture.detectChanges();

    expect(componentFixture.componentInstance.form.valid).toBe(true);
    expect(componentFixture.componentInstance.itemAdded.emit).toHaveBeenCalledOnceWith('Things');
  });

  it('does not emit if the form is not valid', () => {
    const util = new FixtureElementUtils(componentFixture.debugElement);
    const submitButton = util.getNativeElement<HTMLButtonElement>('[data-t-todo-submit]');
    // componentFixture.componentInstance.item.setValue('Things');
    spyOn(componentFixture.componentInstance.itemAdded, 'emit');
    submitButton.click();
    // componentFixture.detectChanges();

    expect(componentFixture.componentInstance.form.invalid).toBe(true);
    expect(componentFixture.componentInstance.itemAdded.emit).not.toHaveBeenCalled();
  });
});
