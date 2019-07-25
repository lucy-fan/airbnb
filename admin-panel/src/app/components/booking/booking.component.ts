import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookings: Array<Booking>;
  
  constructor(
    private bookingService: BookingService,
  ) {
    this.bookings = this.bookingService.getBookings();
  }

  ngOnInit() {
  }

}