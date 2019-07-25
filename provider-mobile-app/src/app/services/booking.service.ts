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

  showButtons: string = "pending";

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private listingService: ListingService
  ) 
  { 
    this.user = this.userService.getUser();
    this.listing = this.listingService.getListing();
  }

  ngOnInit() {
  }

  setBooking(booking: Booking) {
    this.booking = booking;
  }

  getBooking(): Booking {
    return this.booking;
  }

  getStatus(): string {
    return this.booking.status;
  }

  addBooking(booking: Booking) {
    return this.http.post('http://localhost:5000/api/bookings/add', booking);
  }

  returnBookingsByListing(){
    this.bookings = [];
    var id = this.listingService.getListing().id;
    this.http.get('http://localhost:5000/api/bookings/listing/'+id).subscribe((response) => {
      Object.values(response).forEach( (booking) => {
        this.bookings.push(booking);
      })
    })
    return this.bookings;
  }

  acceptBooking(){
    this.booking.status = "accepted";
    this.http.post('http://localhost:5000/api/bookings/update', this.booking).subscribe((response) => {
    })
  }

  rejectBooking(){
    this.booking.status = "rejected";
    this.http.post('http://localhost:5000/api/bookings/update', this.booking).subscribe((response) => {
    })
  }

}
