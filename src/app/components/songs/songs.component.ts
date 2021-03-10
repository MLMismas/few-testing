import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSongData } from 'src/app/actions/songs.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    store.dispatch(loadSongData());
  }

  ngOnInit(): void {
  }

}
