const UserService = require('./user-service');
const userServer = new UserService();
const fs = require("fs");

module.exports = class AuthService {
    constructor() {}

    login(user) {
        return new Promise((resolve, reject) => { 
            userServer.authenticateUser(user.email, user.password).then(user => {
                resolve(user); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

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