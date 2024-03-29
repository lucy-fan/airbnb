import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  bookings: Array<Booking> = [];
  booking: Booking = new Booking();

  constructor(private http: HttpClient) { }

  setBooking(booking: Booking) {
    this.booking = booking;
  }

  getBooking(): Booking {
    return this.booking;
  }

  // add booking to db
  addBooking(booking: Booking) {
    return this.http.post('http://localhost:5000/api/bookings/add', booking);
  }
}
