import { PlaylistSelectors } from './playlist.selectors';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaylistsStore } from '../playlists.store';
import { Playlist } from '../../../shared/models/playlist.model';

describe('PlaylistsSelectors', () => {
  let selectors: PlaylistSelectors;

  const mockPlaylists = [
    { id: 1, name: 'Chill' },
    { id: 2, name: 'Focus' },
  ] as unknown as Playlist[];
  const mockStore = {
    playlists: signal(mockPlaylists),
    loading: signal(false),
  };

  beforeEach(() => {
    TestBed.overrideProvider(PlaylistsStore, { useValue: mockStore });

    TestBed.configureTestingModule({
      providers: [PlaylistSelectors],
    });

    selectors = TestBed.inject(PlaylistSelectors);
  });

  it('should return playlists', () => {
    expect(selectors.playlists()).toEqual(mockPlaylists);
  });

  it('should return loading state', () => {
    expect(selectors.loading()).toBe(false);
  });
});
