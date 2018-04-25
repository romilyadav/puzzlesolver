import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeCreatorComponent } from './maze-creator.component';

describe('MazeCreatorComponent', () => {
  let component: MazeCreatorComponent;
  let fixture: ComponentFixture<MazeCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
