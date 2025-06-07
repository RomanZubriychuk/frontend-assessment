import { Component, inject, OnInit } from '@angular/core';
import { PlaylistsFacade } from '../store/facade/playlists.facade';

@Component({
  selector: 'app-playlists-container',
  templateUrl: './playlists.container.html',
  styleUrl: './playlists.container.scss',
  standalone: false,
})
export class PlaylistsContainer implements OnInit {
  readonly playlistsFacade: PlaylistsFacade = inject(PlaylistsFacade);

  ngOnInit(): void {
    this.playlistsFacade.fetchPlaylists();
  }

  navigate(link: string): void {
    window.open(link, '_blank');
  }
}
