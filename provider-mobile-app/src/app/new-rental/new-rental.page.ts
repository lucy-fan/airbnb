import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental } from '../models/rental';
import { RentalService } from '../services/rental.service'


@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.page.html',
  styleUrls: ['./new-rental.page.scss'],
})
export class NewRentalPage implements OnInit {

  rental: Rental = new Rental();

  name: string;
  location: string;
  price: number;


  constructor(
    private navCtrl: NavController,
    private rentalService: RentalService
    ) { }

  ngOnInit() {
  }

  createRental() {
    this.rental.name = this.name;
    this.rental.location = this.location;
    this.rental.price = this.price;
    
    this.rentalService.addRental(this.rental);
    this.navCtrl.navigateForward("tabs/tabs/tab2");
  }
}
