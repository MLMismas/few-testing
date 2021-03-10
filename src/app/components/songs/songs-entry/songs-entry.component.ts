import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { songAdded } from 'src/app/actions/songs.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-songs-entry',
  templateUrl: './songs-entry.component.html',
  styleUrls: ['./songs-entry.component.scss']
})
export class SongsEntryComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      artist: [''],
      album: ['']
    });
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(songAdded(this.form.value));
    }
  }

}
