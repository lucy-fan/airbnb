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
  addButtonClicked: Boolean = false;

  user: User = new User();
  fname: string;
  lname: string;
  email: string;
  cell: number;

  constructor(
    private userService: UserService,
  ) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

  isAddUserClicked() {
    this.addButtonClicked = !this.addButtonClicked;
  }

  isAddClicked() {
    this.addButtonClicked = !this.addButtonClicked;
    this.user.name = this.fname;
    this.user.lastName = this.lname;
    this.user.email = this.email;
    this.user.cellPhone = this.cell;
    this.userService.addUser(this.user);
  }

}