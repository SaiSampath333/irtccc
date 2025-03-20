import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookingComponent1 } from './ticket-booking.component';

describe('TicketBookingComponent', () => {
  let component: TicketBookingComponent1;
  let fixture: ComponentFixture<TicketBookingComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketBookingComponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketBookingComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
