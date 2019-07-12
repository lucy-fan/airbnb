import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental } from '../models/rental';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  rentals: Rental[];

  constructor(
    private navCtrl: NavController,
    private rentalService: RentalService
    ) {
      this.rentals = rentalService.returnRental();
    }

  id: number;
  name: string;
  location: string;
  price: number;

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }
}
