const UserService = require('./user-service');
const userServer = new UserService();
const fs = require("fs");

module.exports = class AuthService {
    constructor() {}

    login(email, password) {
        return new Promise((resolve, reject) => { 
            console.log("Start");
            userServer.authenticateUser(email, password).then(user => {
                console.log("login success");
                resolve("login successful"); // resolve promise to return value
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