const bookings = require("../models/booking-model");

module.exports = class BookingService {
    
    constructor() {}

    // returns all bookings
    findBookings()
    {        
        return new Promise((resolve, reject) => {   
            bookings.findAllBookings((res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // returns listing by listing id and status
    findBookingByListingIdAndStatus(id, status)
    {        
        return new Promise((resolve, reject) => { 
            bookings.findBookingByListingIdAndStatus(id, status, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // returns listing by user id and status
    findBookingByUserIdAndStatus(id, status)
    {        
        return new Promise((resolve, reject) => {    
            bookings.findBookingByUserIdAndStatus(id, status, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    findBookingByDates(start, end)
    {        
        return new Promise((resolve, reject) => {    
            bookings.findBookingByDates(start, end, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // creates new booking
    addBooking(bookingReq) 
    {
        return new Promise((resolve, reject) => {
            bookings.findBookingByIdAndDates(bookingReq.listingId, bookingReq.dateStart, bookingReq.dateEnd, (err, res) => { // check if booking exists
              if (err) {
                reject(err);
              }
              if (res.length < 1) { // create booking
                bookings.createBooking(bookingReq, (err, res) => {
                  if (err) {
                    reject(err);
                  }
                    resolve(res);
                });
              }
              else {
                reject("booking already exists for those dates");
              }
            })
          });
    }

    updateBooking(booking) 
    {
        return new Promise((resolve, reject) => {
            bookings.findBookingById(booking.id, (err, res) => { // check if booking exists
              if (err) {
                reject(err);
              }
              if (res.length < 1) { // no booking found
                reject("booking does not exist");
              }
              else { // found booking, now update
                bookings.updateBookingById(res[0].id, booking, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                      resolve(res);
                });
              }
            })
        });
    }

    deleteBooking(id) 
    {
        return new Promise((resolve, reject) => {  
            bookings.findBookingById(id, (err, res) => { // check if booking exists
                if (err) {
                  reject(err);
                }
                if (res.length < 1) { // booking is not in db
                  reject("booking does not exist");
                }
                else {
                    bookings.removeBooking(id, (res, err) => {
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
    }
}