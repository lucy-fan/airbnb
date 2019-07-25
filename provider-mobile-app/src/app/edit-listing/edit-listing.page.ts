import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service'
import { Listing } from '../models/listing'

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.page.html',
  styleUrls: ['./edit-listing.page.scss'],
})
export class EditListingPage implements OnInit {

  listing: Listing = new Listing();

  public title: string;
  public location: string;
  public description: string;
  public numberOfPeople: number;
  public pricePerNight: number;


  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private cdRef:ChangeDetectorRef
    ) { 
    }

  ngOnInit() {
    this.listing = this.listingService.getListing();
    this.title = this.listing.title;
    this.location = this.listing.location;
    this.description = this.listing.description;
    this.numberOfPeople = this.listing.numberOfPeople;
    this.pricePerNight = this.listing.pricePerNight;
    this.cdRef.detectChanges();
  }

  editListing() {
    this.listing.title = this.title;
    this.listing.location = this.location;
    this.listing.description = this.description;
    this.listing.numberOfPeople = this.numberOfPeople;
    this.listing.pricePerNight = this.pricePerNight;
  
    this.listingService.updateListing(this.listing);
    this.navCtrl.navigateForward("listing-details");
  }


}
