import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { SongsDataService } from 'src/services/songs-data.service';
import * as actions from '../actions/songs.actions';

@Injectable()
export class SongEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSongData),
      switchMap(() => this.service.getSongs$()
        .pipe(
          map(payload => actions.loadSongsSucceeded({ payload }))
        )
      )
    )
  );

  constructor(private service: SongsDataService, private actions$: Actions) { }
}
