import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Playlist } from '../../../shared/models/playlist.model';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrl: './playlist-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PlaylistItemComponent {
  @Input() playlist: Playlist | null = null;
}
