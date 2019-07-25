const UserService = require('./user-service');
const userServer = new UserService();
const fs = require("fs");

module.exports = class AuthService {
    constructor() {}

    // takes in a user with the inputted email and password
    // returns false if no match found in db, else returns the existing user
    login(user) {
        return new Promise((resolve, reject) => { 
            userServer.authenticateUser(user.email, user.password).then(user => {
                resolve(user); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

    // takes in a user and adds it to the database
    register(user) {
        return new Promise((resolve, reject) => { 
            userServer.createUser(user).then(userReturned => {
                resolve(userReturned); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

}