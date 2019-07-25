import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service'
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Booking } from '../models/booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {

  listing: Listing = new Listing();
  user: User = new User();
  booking: Booking = new Booking();

  public status: string;
  public dateStart: string;
  public dateEnd: string;

  constructor(
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    private listingService: ListingService,
    private userService: UserService,
    private bookingService: BookingService
  ) 
  {      
    this.user = this.userService.getUser();
    console.log("user id is: " + this.user.id);
    this.listing = this.listingService.getListing();
    console.log("listing id is: " + this.listing.id);

   }

  ngOnInit() {
  }

  createBooking() {
    this.booking.listingId = this.listingService.getListing().id;
    this.booking.userId = this.userService.getUser().id;
    this.booking.status = "pending";
    this.booking.dateStart = this.dateStart;
    this.booking.dateEnd = this.dateEnd;

    this.bookingService.addBooking(this.booking).subscribe((response) => {
      if (response == false) {
        this.presentExistingAlert();
      }

      else {
        this.presentSuccessAlert();
        console.log("booking added");
        this.navCtrl.navigateForward('listings');
      }
    })
  }

  async presentExistingAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Dates Unavailable',
      message: 'Please choose a new start date and/or end date and try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentSuccessAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Booking has been successfully made.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
