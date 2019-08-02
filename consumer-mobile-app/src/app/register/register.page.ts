import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  firstName: string;
  lastName: string;
  email: string;
  password: string;

  is_added: Boolean;


  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    public alertCtrl: AlertController,
    ) { }

  ngOnInit() { }

  // register user
  navToListings() {
    // every field must be filled out, or alert will show
    if (!this.firstName ||
        !this.lastName||
        !this.email ||
        !this.password) {
          this.presentMissingAlert();
          return;
    }

    else {
      // set input to the user instance
      this.user.name = this.firstName;
      this.user.surname = this.lastName;
      this.user.email = this.email;
      this.user.password = this.password;
      this.user.role = "user";

      // add user to db
      this.userService.addUser(this.user).subscribe((response) => {
      if (response == false) {
        // if email is already used for existing account, present alert
        this.presentExistingAlert();
      }

      else {
        // set current user and nav to listings
        this.userService.setUser(this.user);
        this.navCtrl.navigateForward("login");
      }
    })
    }
  }

  // alert for missing fields
  async presentMissingAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Missing fields',
      message: 'Please fill in missing fields and try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

  // alert for email associated with account already
  async presentExistingAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Account Already Exists',
      message: 'This email is already associated with an existing account. Please login or create an account with another email.',
      buttons: ['OK']
    });

    await alert.present();
  }

  // nav to login 
  navBackToLogin() {
    this.navCtrl.navigateForward("login");
  }
}
