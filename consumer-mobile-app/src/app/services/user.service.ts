import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [];
  user: User;

  constructor(
    private http: HttpClient
    ) { }

  addUser(user: User) {
    return this.http.post('http://localhost:5000/api/auth/register', user);
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  // check if user login info is correct
  authenticate(user: User) {
    return this.http.post('http://localhost:5000/api/auth/login', user);
  }

}
