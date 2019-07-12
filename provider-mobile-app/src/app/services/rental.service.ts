import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentals: Array<Rental> = [];
  rental: Rental;

  constructor(
    private navCtrl: NavController
  ) { }

  addRental(rental: Rental) {
    this.rentals.push(rental);
    console.log(rental.name);
    console.log(this.rentals.length);
  }

  setRental(rental: Rental) {
    this.rental = rental;
  }

  returnRental(){
    return this.rentals;
  }
}
