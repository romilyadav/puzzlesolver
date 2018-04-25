import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeResolverComponent } from './maze-resolver.component';

describe('MazeResolverComponent', () => {
  let component: MazeResolverComponent;
  let fixture: ComponentFixture<MazeResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
