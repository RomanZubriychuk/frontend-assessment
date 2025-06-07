import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Playlist } from '../../../shared/models/playlist.model';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PlaylistsComponent {
  @Input() playlists: Playlist[] = [];
}
