import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongListItem } from 'src/app/models/songs';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  songs$: Observable<SongListItem[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
