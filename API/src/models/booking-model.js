const mySqlConn = require('../database/database');

Booking = function(booking) {
    this.listingId = booking.listingId;
    this.userId = booking.userId;
    this.status = booking.status;
    this.dateStart = booking.dateStart;
    this.dateEnd = booking.dateEnd;
}

// returns all bookings
Booking.findAllBookings = (result) => {
    mySqlConn.query("select * from booking", (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            console.log(res);
            result(res, null);
        }
    })
};

// finds booking by id
Booking.findBookingById = (bookingId, result) => {
    mySqlConn.query("select * from booking where id = ?", bookingId, (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

// finds booking(s) by listing id
Booking.findBookingByListingId = (listingId, result) => {
    mySqlConn.query("select * from booking where listingId = ?", listingId, (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

// finds booking(s) by user id
Booking.findBookingByUserId = (userId, result) => {
    mySqlConn.query("select * from booking where userId = ?", userId, (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

// find booking(s) by listing id and status
Booking.findBookingByListingIdAndStatus = (id, status, result) => {
    mySqlConn.query("select * from booking where (listingId = ? AND status = ?)", [id, status], (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

// find booking(s) by user id and status
Booking.findBookingByUserIdAndStatus = (id, status, result) => {
    mySqlConn.query("select * from booking where (userId = ? AND status = ?)", [id, status], (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

// find booking(s) by start and end dates
Booking.findBookingByDates = (start, end, result) => {
    mySqlConn.query("select * from booking where (dateStart = ? AND dateEnd = ?)", [start, end], (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

// find booking(s) by listing id and dates
Booking.findBookingByIdAndDates = (id, start, end, result) => {
    mySqlConn.query("select * from booking where (listingId = ? AND dateStart = ? AND dateEnd = ?)", [id, start, end], (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

// creates new booking
Booking.createBooking = (newBooking, result) => {
    mySqlConn.query("INSERT INTO booking set ?", newBooking, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// updates booking by id
Booking.updateBookingById = (bookingId, booking, result) => {
    mySqlConn.query(
      "UPDATE booking SET ? WHERE id = ?",
      [booking, bookingId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  };

// deletes booking
Booking.removeBooking = (bookingId, result) => {
    mySqlConn.query("DELETE FROM booking WHERE id = ?", bookingId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

module.exports = Booking;