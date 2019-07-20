const mySqlConn = require('../database/database');

Booking = function(booking) {
    this.listingId = booking.listingId;
    this.userId = booking.userId;
    this.status = booking.status;
    this.dateStart = booking.dateStart;
    this.dateEnd = booking.dateEnd;
}

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

Booking.findBookingByIdAndDates = (id, start, end, result) => {
    mySqlConn.query("select * from booking where (listingId = ? AND dateStart = ? AND dateEnd = ?)", [id, start, end], (res, err) => {
        if (err) {
            console.log("errr??");
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

Booking.createBooking = (newBooking, result) => {
    console.log(newBooking);
    mySqlConn.query("INSERT INTO booking set ?", newBooking, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

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