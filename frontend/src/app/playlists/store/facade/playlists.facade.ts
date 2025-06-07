import { inject, Injectable } from '@angular/core';
import { PlaylistsStore } from '../playlists.store';
import { PlaylistSelectors } from '../selectors/playlist.selectors';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsFacade {
  private store = inject(PlaylistsStore);
  private selectors = inject(PlaylistSelectors);

  playlists = this.selectors.playlists;
  loading = this.selectors.loading;

  fetchPlaylists() {
    this.store.fetchPlaylists();
  }
}
