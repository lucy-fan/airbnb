import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User = new User();

  constructor(
    private navCtrl: NavController,
    private userService: UserService
    ) { 
      this.user = this.userService.getUser();
    }

  ngOnInit() {
  }

  navToListings() {
    this.navCtrl.navigateForward("listings");
  }

}
