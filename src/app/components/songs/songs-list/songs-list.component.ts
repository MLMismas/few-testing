import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SongListItem } from 'src/app/models/songs';
import { AppState, selectSortedSongListItems } from 'src/app/reducers';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  songs$: Observable<SongListItem[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.songs$ = this.store.select(selectSortedSongListItems);
  }

}
