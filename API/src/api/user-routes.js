const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');
const userServer = new UserService();

// get all users
router.get('/', (req,res) => {
    userServer.findUsers().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

// get user by id
router.get('/:id', (req,res) => {
    userServer.findUserById(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// get user by role
router.get('/role/:role', (req,res) => {
    userServer.findUserByRole(req.params.role).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// create new user
router.post('/create', (req,res) => {
    userServer.createUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// update user
router.post('/update', (req,res) => {
    userServer.updateUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// delete user
router.delete('/delete/:id', (req,res) => {
    userServer.deleteUser(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;