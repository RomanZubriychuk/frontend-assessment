import { TestBed } from '@angular/core/testing';
import { PlaylistsService } from './playlists.service';
import { Playlist } from '../models/playlist.model';
import { fakeAsync, tick } from '@angular/core/testing';
import { featuredPlaylists } from '../../../../data/mock-database';

describe('PlaylistsService', () => {
  let service: PlaylistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistsService],
    });
    service = TestBed.inject(PlaylistsService);
  });

  it('should return playlists after a 2s delay', fakeAsync(() => {
    let result: Playlist[] | undefined;

    service.fetchPlaylist().subscribe((data) => {
      result = data;
    });

    // Before delay
    expect(result).toBeUndefined();

    tick(2000); // simulate 2s passing

    expect(result).toEqual(featuredPlaylists.content as Playlist[]);
  }));
});
