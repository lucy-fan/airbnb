import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../../app/models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  listings: Array<Listing>;

  constructor(
    private http: HttpClient
  ) { }

  getListings(): Array<Listing> {
    this.listings = [];
    this.http.get('http://localhost:5000/api/listings/').subscribe((response) => {
      Object.values(response).forEach( (listing) => {
        this.listings.push(listing);
      })
    })
    console.log(this.listings);
    return this.listings;
  }

}