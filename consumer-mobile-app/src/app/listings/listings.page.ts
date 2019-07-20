import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: 'listings.page.html',
  styleUrls: ['listings.page.scss']
})
export class ListingsPage {
  listings: Listing[];

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService
    ) {}

    ngOnInit() {
      this.listings = this.listingService.returnListings();
      console.log("returned");
    }

    public title: string;
    public location: string;

  navToNewListing() {
    this.navCtrl.navigateForward("new-listing");
  }

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }

  navigateToViewDetails(index,listing) {
    console.log(index); // use this to find position in array to know which array element to update
    //this.items[index] should view viewed / updated for AirBnb provider app
    this.listingService.setListing(listing);
    this.navCtrl.navigateForward("listing-details");
  }
}
