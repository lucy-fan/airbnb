import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../app/models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Array<Booking>;

  constructor(private http: HttpClient) { }

  // sends get request to api that gets all bookings in db
  getBookings(): Array<Booking> {
    this.bookings = [];
    this.http.get('http://localhost:5000/api/bookings/').subscribe((response) => {
      // push each booking into bookings array
      Object.values(response).forEach( (booking) => {
        this.bookings.push(booking);
      })
    })
    return this.bookings;
  }

}