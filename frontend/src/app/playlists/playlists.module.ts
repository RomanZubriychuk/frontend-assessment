import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsContainer } from './container/playlists.container';
import { MatCardModule } from '@angular/material/card';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { MatIconModule } from '@angular/material/icon';

export const routes: Routes = [
  {
    path: '',
    component: PlaylistsContainer,
  },
];

@NgModule({
  declarations: [PlaylistsContainer, PlaylistsComponent, PlaylistItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
  ],
})
export class PlaylistsModule {}
