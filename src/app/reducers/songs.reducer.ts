import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface SongEntity {
  id: string;
  title: string;
  artist?: string;
  album?: string;
}

export interface SongState extends EntityState<SongEntity> {
  sortBy: string;
}

export const adapter = createEntityAdapter<SongEntity>();

// const initialState = adapter.getInitialState();

const initialState: SongState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Sweet Jane', artist: 'Lou Reed' },
    2: { id: '2', title: 'Ballroom Blitz' }
  },
  sortBy: 'title'
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: SongState = initialState, action: Action) {
  return reducerFunction(state, action);
}



