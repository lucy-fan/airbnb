import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  listings: Array<Listing> = [];
  listing: Listing;

  constructor(
    private navCtrl: NavController
  ) { }

  addListing(listing: Listing) {
    this.listings.push(listing);
    console.log(listing.title);
    console.log(this.listings.length);
  }

  setListing(listing: Listing) {
    this.listing = listing;
  }

  getListing(): Listing {
    return this.listing;
  }

  returnListings(){
    return this.listings;
    console.log(this.listings);
  }
}
