import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
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


  constructor(
    private navCtrl: NavController,
    private userService: UserService
    ) { }

  ngOnInit() {
  }

  navToLogin() {
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.password = this.password;

    this.userService.addUser(this.user);
    this.navCtrl.navigateForward("login");
  }
}
