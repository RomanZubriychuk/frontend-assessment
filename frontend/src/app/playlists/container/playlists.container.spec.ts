import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsContainer } from './playlists.container';

describe('PlaylistsContainer', () => {
  let component: PlaylistsContainer;
  let fixture: ComponentFixture<PlaylistsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
