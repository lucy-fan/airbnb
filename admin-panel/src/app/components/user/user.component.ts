import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  
  constructor(private userService: UserService) {
    // gets all users
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

}