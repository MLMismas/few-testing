import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { SongEntity } from 'src/app/reducers/songs.reducer';
import { environment } from 'src/environments/environment';

@Injectable()
export class SongsDataService {
  readonly baseUrl = environment.baseUrl + 'songs';

  addSong$(song: { title: string, artist?: string, album?: string }): Observable<SongEntity> {
    return this.client.post<SongEntity>(this.baseUrl, song);
  }

  getSongs$(): Observable<SongEntity[]> {
    return this.client.get<GetSongsResponse>(this.baseUrl)
      .pipe(
        map(getDataFrom),
        map(songs => {
          return songs.map(makeAnEntityOutOf);
        })
      );
  }
  constructor(private client: HttpClient) { }
}

export function getDataFrom(thing: GetSongsResponse): SongResponseItem[] {
  return thing.data;
}
export function makeAnEntityOutOf(song: SongResponseItem): SongEntity {
  return {
    id: song.id,
    title: song.title,
    album: song.album,
    artist: song.artist?.name
  } as SongEntity;
}
interface GetSongsResponse {
  data: SongResponseItem[];
}
interface SongResponseItem {
  id: string;
  title: string;
  artist?: {
    name: string
  };
  album?: string;
}
