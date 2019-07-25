import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor(private http: HttpClient) { }

  // sends get request to api that gets all users in db
  getUsers(): Array<User> {
    this.users = [];
    this.http.get('http://localhost:5000/api/users/').subscribe((response) => {
      // push each user into users array
      Object.values(response).forEach((user) => {
        this.users.push(user);
      })
    })
    return this.users;
  }

}