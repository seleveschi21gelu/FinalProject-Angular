import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistrationFlatblockComponent } from './view-registration-flatblock.component';

describe('ViewRegistrationFlatblockComponent', () => {
  let component: ViewRegistrationFlatblockComponent;
  let fixture: ComponentFixture<ViewRegistrationFlatblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegistrationFlatblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegistrationFlatblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
