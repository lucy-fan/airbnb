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

  addListing(listing: Listing) {
    this.http.post('http://localhost:5000/api/listings/create', listing).subscribe((response) => {
      this.listings.push(listing);
    })
  }

  setListing(listing: Listing) {
    this.listing = listing;
  }

  getListing(): Listing {
    return this.listing;
  }

  updateListing(listing: Listing) {
    this.http.post('http://localhost:5000/api/listings/update', listing).subscribe((response) => {
    })
  }

  returnListings(user: User){
    this.listings = [];
    this.http.get('http://localhost:5000/api/listings/user.id').subscribe((response) => {
      Object.values(response).forEach( (listing) => {
        this.listings.push(listing);
      })
    })
    return this.listings;
  }
}
