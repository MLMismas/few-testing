import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<string>();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      item: ['', [Validators.required]]
    });
  }

  get item(): AbstractControl {
    return this.form.get('item');
  }

  submit(): void {
    if (this.form.valid) {
      this.itemAdded.emit(this.item.value);
      console.log('The Form', this.form.value);
    } else {
      console.log('The form isn\'t valid');
    }
  }
}
