import { Component } from '@angular/core';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

@Component({
  selector: 'app-root',
  imports: [TicketBookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'irtc';
}
