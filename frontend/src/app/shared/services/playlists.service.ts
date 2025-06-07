import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Playlist } from '../models/playlist.model';
import { featuredPlaylists } from '../../../../data/mock-database';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  fetchPlaylist(): Observable<Playlist[]> {
    return of(featuredPlaylists.content as Playlist[]).pipe(delay(2000));
  }
}
