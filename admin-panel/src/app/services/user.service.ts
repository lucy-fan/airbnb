import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Array<User> {
    this.users = [];
    this.http.get('http://localhost:5000/api/users/').subscribe((response) => {
      Object.values(response).forEach( (User) => {
        this.users.push(User);
      })
    })
    console.log(this.users);
    return this.users;
  }

}