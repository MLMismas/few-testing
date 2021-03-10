import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { SongEntity } from 'src/app/reducers/songs.reducer';
import { environment } from 'src/environments/environment';

@Injectable()
export class SongsDataService {
  readonly baseUrl = environment + 'songs';

  getSongs$(): Observable<SongEntity[]> {
    return this.client.get<GetSongsResponse>(this.baseUrl)
      .pipe(
        map(response => response.data),
        map(songs => {
          return songs.map(song => {
            return {
              id: song.id,
              title: song.title,
              album: song.album,
              artist: song.artist?.name
            } as SongEntity;
          });
        })
      );
  }
  constructor(private client: HttpClient) { }
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
