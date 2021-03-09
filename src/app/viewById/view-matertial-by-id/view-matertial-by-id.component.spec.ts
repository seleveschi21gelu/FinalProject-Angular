import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatertialByIdComponent } from './view-matertial-by-id.component';

describe('ViewMatertialByIdComponent', () => {
  let component: ViewMatertialByIdComponent;
  let fixture: ComponentFixture<ViewMatertialByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatertialByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatertialByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
