const users = require("../models/user-model");

module.exports = class UserService {
    
    constructor() {}

    // returns all users
    findUsers()
    {        
        return new Promise((resolve, reject) => {    
            users.findAllUsers((res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // returns user by id
    findUserById(id)
    {        
        return new Promise((resolve, reject) => {    
            users.findUserById(id, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // returns user by email
    findUserByEmail(email)
    {        
        return new Promise((resolve, reject) => {    
            users.findUserByEmail(email, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // authenticates user
    authenticateUser(email, password)
    {        
        return new Promise((resolve, reject) => {    
            users.authenticate(email, password, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("success");
                }
            });              
        });
    }

    createUser(userReq) 
    {
        return new Promise((resolve, reject) => {
          users.findUserByEmail(userReq.email, (err, res) => { // check if user exists
            if (err) {
              reject(err);
            }
            if (res.length < 1) { // create user
              users.createUser(userReq, (err, res) => {
                if (err) {
                  reject(err);
                }
                  resolve(res);
              });
            }
            else {
              reject("user already exists");
            }
          })
        });
    }

    updateUser(user) 
    {
        return new Promise((resolve, reject) => {
            users.findUserById(user.id, (err, res) => { // check if user exists
              if (err) {
                reject(err);
              }
              if (res.length < 1) { // no user found
                reject("user does not exist");
              }
              else { // found user, now update
                users.updateUserById(res[0].id, user, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                      resolve(res);
                });
              }
            })
        });
    }

    deleteUser(id) 
    {
        return new Promise((resolve, reject) => {  
            users.findUserById(id, (err, res) => { // check if user exists
                if (err) {
                  console.log("error");
                  reject(err);
                }
                if (res.length < 1) { // create user
                  reject("user does not exist");
                }
                else {
                    console.log("we found it");
                    console.log(id);
                    users.removeUser(id, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });         
                }
              })       
        });

        console.log("Wtf");
    }
}