import { Playlist } from '../../shared/models/playlist.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { PlaylistsService } from '../../shared/services/playlists.service';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export type playlistsState = {
  playlists: Playlist[];
  loading: boolean;
};

const initialState: playlistsState = {
  playlists: [],
  loading: false,
};

export const PlaylistsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, playlistsService = inject(PlaylistsService)) => ({
    fetchPlaylists: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() =>
          playlistsService.fetchPlaylist().pipe(
            tapResponse({
              next: (playlists) => patchState(store, { playlists }),
              error: console.error,
              finalize: () => patchState(store, { loading: false }),
            }),
          ),
        ),
      ),
    ),
  })),
);
