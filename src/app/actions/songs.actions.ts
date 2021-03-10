import { createAction, props } from '@ngrx/store';
import { SongListItem } from '../models/songs';
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

// adding songs
let id = 1;
export const songAdded = createAction(
  '[app] songs song added',
  ({ title, artist, album }: { title: string, artist?: string, album?: string }) => ({
    payload: {
      title, artist, album,
      id: 'TEMP' + id++
    } as SongEntity
  })
);

export const songAddedSuccessfully = createAction(
  '[songs] song added successfully',
  props<{ payload: SongEntity, oldId: string }>()
);

export const songAddedFailure = createAction(
  '[songs] song added failure',
  props<{ payload: SongEntity, reason: string }>()
);
