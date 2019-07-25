const express = require('express');
const router = express.Router();

const BookingService = require('../services/booking-service');
const bookingServer = new BookingService();

// get all 
router.get('/', (req,res) => {
    // asynchronous function call structure 
    bookingServer.findBookings().then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by listing id and status
router.get('/listing/:listingId/:status', (req,res) => {
    bookingServer.findBookingByListingIdAndStatus(req.params.listingId, req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by listing id
router.get('/listing/:listingId', (req,res) => {
    bookingServer.findBookingByListingId(req.params.listingId).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by user id
router.get('/user/:userId', (req,res) => {
    bookingServer.findBookingByUserId(req.params.userId).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by user id and status
router.get('/user/:userId/:status', (req,res) => {
    bookingServer.findBookingByUserIdAndStatus(req.params.userId, req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by dates
router.get('/date/:startDate/:endDate', (req,res) => {
    bookingServer.findBookingByDates(req.params.startDate, req.params.endDate).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// create
router.post('/add', (req,res) => {
    bookingServer.addBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

//update
router.post('/update', (req,res) => {
    bookingServer.updateBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// delete
router.delete('/delete/:id', (req,res) => {
    bookingServer.deleteBooking(req.params.id).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;