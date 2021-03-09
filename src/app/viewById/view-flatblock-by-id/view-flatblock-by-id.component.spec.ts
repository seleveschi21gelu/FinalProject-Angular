import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlatblockByIdComponent } from './view-flatblock-by-id.component';

describe('ViewFlatblockByIdComponent', () => {
  let component: ViewFlatblockByIdComponent;
  let fixture: ComponentFixture<ViewFlatblockByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlatblockByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlatblockByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
