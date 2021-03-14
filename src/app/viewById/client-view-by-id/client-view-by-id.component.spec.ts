import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewByIdComponent } from './client-view-by-id.component';

describe('ClientViewByIdComponent', () => {
  let component: ClientViewByIdComponent;
  let fixture: ComponentFixture<ClientViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientViewByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
