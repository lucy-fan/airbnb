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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navToDetails() {
    this.navCtrl.navigateForward("listing-details");
  }

}
