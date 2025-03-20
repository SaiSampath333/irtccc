import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Import ReactiveFormsModule and FormBuilder
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ticket-booking',
  standalone: true,
  imports: [
    ReactiveFormsModule, // Add this for form handling
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent {
  // Define the bookingForm property
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with controls
    this.bookingForm = this.fb.group({
      from: ['', Validators.required], // Add required validation
      to: ['', Validators.required],   // Add required validation
      travelDate: [new Date(2025, 2, 18)], // Default date: 18/03/2025 (months are 0-based in JavaScript)
      travelClass: ['ALL Classes'],
      quota: [],
      disabilityConcession: [false],
      flexibleDate: [false],
      availableBerth: [false],
      railwayPass: [false]
    });
  }

  // Define the onSearch method for form submission
  onSearch() {
    if (this.bookingForm.valid) {
      console.log('Form submitted:', this.bookingForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Define the onDateChange method for date input changes
  onDateChange(event: any) {
    const selectedDate = event.value;
    console.log('Selected date:', selectedDate);
    this.bookingForm.patchValue({ travelDate: selectedDate });
  }

  // Optional: Add a method to swap 'from' and 'to' fields
  swapStations() {
    const from = this.bookingForm.get('from')?.value;
    const to = this.bookingForm.get('to')?.value;
    this.bookingForm.patchValue({
      from: to,
      to: from
    });
  }
}


