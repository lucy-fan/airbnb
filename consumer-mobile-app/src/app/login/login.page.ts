import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  public email: string;
  public password: string;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    public alertCtrl: AlertController
    ) { 
  }

  ngOnInit() {
  }

  checkLogin() {

    this.user.email = this.email;
    this.user.password = this.password;
    this.userService.authenticate(this.user).subscribe((response) => {
      console.log(response);
      if (response == false) {
        this.presentAlert();
      }
      else {
        this.userService.setUser(response[0]);
        this.navCtrl.navigateForward("listings");
        }
    })
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Incorrect email/password entered',
      message: 'Please check your login information and try again.',
      buttons: ['OK']
    });

    await alert.present();
  }


  navToHome() {
    this.navCtrl.navigateForward("listings");
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }
}
