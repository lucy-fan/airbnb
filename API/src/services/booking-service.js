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

    // returns listing by user id
    findBookingByUserId(id)
    {        
        return new Promise((resolve, reject) => { 
            bookings.findBookingByUserId(id, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // returns listing by listing id
    findBookingByListingId(id)
    {        
        return new Promise((resolve, reject) => { 
            bookings.findBookingByListingId(id, (res, err) => {
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

    // finds booking by its start and end dates
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

              if (res.length < 1) { 
                // no booking exists with the same listing id and dates
                // add booking to database
                bookings.createBooking(bookingReq, (err, res) => {
                  if (err) {
                    reject(err);
                  }
                    resolve(res);
                });
              }
              else { // booking already exists for this date, reject booking request
                reject(false);
              }
            })
          });
    }

    // updates booking
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

    // deletes booking
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
                else { // booking found in db, delete it
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