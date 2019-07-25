import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service'
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  bookings: Array<Booking> = [];
  booking: Booking = new Booking();
  listing: Listing = new Listing();
  user: User = new User();

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private listingService: ListingService
  ) 
  { 
    this.user = this.userService.getUser();
    console.log("user id is: " + this.user.id);
    this.listing = this.listingService.getListing();
    console.log("listing id is: " + this.listing.id);
  }

  setBooking(booking: Booking) {
    this.booking = booking;
  }

  getBooking(): Booking {
    return this.booking;
  }

  addBooking(booking: Booking) {
    return this.http.post('http://localhost:5000/api/bookings/add', booking);
  }
}
