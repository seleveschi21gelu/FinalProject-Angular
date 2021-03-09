import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProviderByIdComponent } from './view-provider-by-id.component';

describe('ViewProviderByIdComponent', () => {
  let component: ViewProviderByIdComponent;
  let fixture: ComponentFixture<ViewProviderByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProviderByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProviderByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
