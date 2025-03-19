import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';

@NgModule({
  declarations: [TicketBookingComponent],
  imports: [CommonModule, ReactiveFormsModule],  // <-- Add ReactiveFormsModule
})
export class TicketBookingModule {}


