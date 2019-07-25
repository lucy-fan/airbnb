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

  ngOnInit() {
    // get current listing
    this.listing = this.listingService.getListing();
  }

  // navigate back to listings page
  navToListings() {
    this.navCtrl.navigateForward("listings");
  }

  // nav to book now page
  navToBookings() {
    this.navCtrl.navigateForward("book-now");
  }

}
