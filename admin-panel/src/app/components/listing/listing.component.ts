import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/listing.model';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingsComponent implements OnInit {

  listings: Array<Listing>;
  
  constructor(
    private listingService: ListingService,
  ) {
    this.listings = this.listingService.getListings();
  }

  ngOnInit() {
  }

}