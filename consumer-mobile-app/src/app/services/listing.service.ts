import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../models/listing';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  listings: Array<Listing> = [];
  listing: Listing;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ) { }

  setListing(listing: Listing) {
    this.listing = listing;
  }

  getListing(): Listing {
    return this.listing;
  }

  returnListings(user: User){
    this.listings = [];
    this.http.get('http://localhost:5000/api/listings/').subscribe((response) => {
      Object.values(response).forEach( (listing) => {
        this.listings.push(listing);
      })
    })
    return this.listings;
  }
}
