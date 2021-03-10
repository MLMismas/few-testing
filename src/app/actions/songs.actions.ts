import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

// Initiator -> Success -> Failure
export const loadSongData = createAction(
  '[songs] load song data'
);

export const loadSongsSucceeded = createAction(
  '[songs] load songs succeeded',
  props<{ payload: SongEntity[] }>()
);

export const loadSongsFailed = createAction(
  '[songs] loading songs failed',
  props<{ reason: string }>()
);
