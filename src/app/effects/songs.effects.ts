import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SongsDataService } from 'src/services/songs-data.service';
import * as actions from '../actions/songs.actions';

@Injectable()
export class SongEffects {

  addSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.songAdded),
      switchMap(original => this.service.addSong$({
        title: original.payload.title,
        artist: original.payload.artist,
        album: original.payload.album
      }).pipe(
        map(response => actions.songAddedSuccessfully({ payload: response, oldId: original.payload.id })),
        catchError(err => of(actions.songAddedFailure({ payload: original.payload, reason: 'Blammo!' })))
      ))
    ), { dispatch: true }
  );

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSongData),
      switchMap(() => this.service.getSongs$()
        .pipe(
          map(payload => actions.loadSongsSucceeded({ payload })),
          catchError((err) => of(actions.loadSongsFailed({ reason: 'Bad things happened' })))
        )
      )
    )
  );

  constructor(private service: SongsDataService, private actions$: Actions) { }
}
