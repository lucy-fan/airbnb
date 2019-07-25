import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listings',
  templateUrl: 'listings.page.html',
  styleUrls: ['listings.page.scss']
})
export class ListingsPage {
  listings: Listing[];
  listing: Listing = new Listing();
  user: User = new User();

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private userService: UserService
    ) {}

    ngOnInit() {
      this.user = this.userService.getUser();
      this.listings = this.listingService.returnListings(this.user);
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
    this.listingService.setListing(listing);
    this.navCtrl.navigateForward("listing-details");
  }
}
