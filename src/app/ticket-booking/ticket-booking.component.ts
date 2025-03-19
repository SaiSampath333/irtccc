import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Ensure required modules are imported
  templateUrl: './ticket-booking.component.html',
})
export class TicketBookingComponent {
  ticketForm: FormGroup;
  stations: string[] = ['Station 1', 'Station 2', 'Station 3']; // Dummy data
  classes: string[] = ['Economy', 'Business', 'First Class']; // Dummy data
  categories: string[] = ['Adult', 'Child', 'Senior']; // Dummy data
  minDate: string = new Date().toISOString().split('T')[0]; // Set today's date as the minimum

  constructor(private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      departureStation: [''],
      arrivalStation: [''],
      date: [''],
      class: [''],
      category: [''],
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.ticketForm.value);
  }
}


