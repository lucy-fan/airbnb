import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;

  constructor(
    private navCtrl: NavController,
    private userService: UserService
    ) { 
  }

  ngOnInit() {
  }

  checkLogin() {
    var i = 0;
    var length = this.userService.users.length;
    for (i = 0; i < length; i++) {
      if (this.email == this.userService.users[i].email) {
        if (this.password == this.userService.users[i].password) {
          this.navCtrl.navigateForward("tabs/tabs/tab1");
          return;
        }
      }
    }
    console.log("login failed");
  }


  navToHome() {
    this.navCtrl.navigateForward("tabs/tabs/tab1");
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }
}
