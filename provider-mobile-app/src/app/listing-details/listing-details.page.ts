import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service'
import { Listing } from '../models/listing'

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {

  listing: Listing = new Listing();

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService
    )  { }

    ngOnInit() {}

  ionViewWillEnter() {
    this.listing = this.listingService.getListing();
  }

  navToListings() {
    this.navCtrl.navigateForward("listings");
  }

  navToEdit() {
    this.navCtrl.navigateForward("edit-listing");
  }

  navToBookings() {
    this.listingService.setListing(this.listing);
    this.navCtrl.navigateForward("bookings");
  }

}
