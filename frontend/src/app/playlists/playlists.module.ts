import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistContainer } from './container/playlist.container';

export const routes: Routes = [
  {
    path: '',
    component: PlaylistContainer,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlaylistsModule {}
