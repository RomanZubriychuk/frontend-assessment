import { PlaylistsFacade } from './playlists.facade';
import { signal } from '@angular/core';
import { PlaylistSelectors } from '../selectors/playlist.selectors';
import { TestBed } from '@angular/core/testing';
import { playlistsState, PlaylistsStore } from '../playlists.store';
import { Playlist } from '../../../shared/models/playlist.model';

describe('PlaylistsFacade', () => {
  let facade: PlaylistsFacade;
  let storeSpy: jasmine.SpyObj<playlistsState>;

  const mockPlaylists = signal([{ id: '1', name: 'Test Playlist' }]);
  const mockLoading = signal(false);

  const mockSelectors: PlaylistSelectors = {
    playlists: mockPlaylists,
    loading: mockLoading,
  } as unknown as PlaylistSelectors;

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('PlaylistsStore', ['fetchPlaylists']);

    TestBed.configureTestingModule({
      providers: [
        PlaylistsFacade,
        { provide: PlaylistsStore, useValue: storeSpy },
        { provide: PlaylistSelectors, useValue: mockSelectors },
      ],
    });

    facade = TestBed.inject(PlaylistsFacade);
  });

  it('should expose playlists from selectors', () => {
    expect(facade.playlists()).toEqual([
      { id: '1', name: 'Test Playlist' },
    ] as Playlist[]);
  });

  it('should expose loading from selectors', () => {
    expect(facade.loading()).toBeFalse();

    mockLoading.set(true);
    expect(facade.loading()).toBeTrue();
  });
});
