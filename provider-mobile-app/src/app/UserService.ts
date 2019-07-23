import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../app/models/user';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: Array<User>;
  user: User;
  constructor(private navCtrl: NavController) { }
  addUser(user: User) {
    this.users.push(user);
  }
  setUser(user: User) {
    this.user = user;
  }
  getUser(user: User) {
    return this.user;
  }
}