import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideobannerComponent } from './videobanner.component';

describe('VideobannerComponent', () => {
  let component: VideobannerComponent;
  let fixture: ComponentFixture<VideobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
