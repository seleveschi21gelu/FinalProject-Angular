import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatblockComponent } from './flatblock.component';

describe('FlatblockComponent', () => {
  let component: FlatblockComponent;
  let fixture: ComponentFixture<FlatblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
