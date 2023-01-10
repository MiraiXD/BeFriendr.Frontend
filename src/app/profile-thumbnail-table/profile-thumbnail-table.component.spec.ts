import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileThumbnailTableComponent } from './profile-thumbnail-table.component';

describe('ProfileThumbnailTableComponent', () => {
  let component: ProfileThumbnailTableComponent;
  let fixture: ComponentFixture<ProfileThumbnailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileThumbnailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileThumbnailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
