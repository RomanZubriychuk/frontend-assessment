import { computed, inject, Injectable } from '@angular/core';
import { PlaylistsStore } from '../playlists.store';

@Injectable({
  providedIn: 'root',
})
export class PlaylistSelectors {
  private store = inject(PlaylistsStore);

  playlists = computed(this.store.playlists);
  loading = computed(this.store.loading);
}
