import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Booking } from '../models/booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  booking: Booking = new Booking();
  bookings: Array<Booking> = [];
  showButtons: string = "pending";

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingService
    ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.bookings = this.bookingService.returnBookingsByListing()
  }

  navToDetails() {
    this.navCtrl.navigateForward("listing-details");
  }

  acceptButton(booking: Booking) {
    this.bookingService.setBooking(booking);
    this.bookingService.acceptBooking();
  }

  rejectButton(booking: Booking) {
    this.bookingService.setBooking(booking);
    this.bookingService.rejectBooking();
  }

}
