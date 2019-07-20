import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service'


@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.page.html',
  styleUrls: ['./new-listing.page.scss'],
})
export class NewListingPage implements OnInit {

  listing: Listing = new Listing();

  public title: string;
  public location: string;
  public description: string;
  public numberOfPeople: number;
  public pricePerNight: number;


  constructor(
    private navCtrl: NavController,
    private listingService: ListingService
    ) { }

  ngOnInit() {
  }

  createListing() {
    this.listing.title = this.title;
    this.listing.location = this.location;
    this.listing.description = this.description;
    this.listing.numberOfPeople = this.numberOfPeople;
    this.listing.pricePerNight = this.pricePerNight;
    
    this.listingService.addListing(this.listing);
    this.navCtrl.navigateForward("listings");
  }
}
