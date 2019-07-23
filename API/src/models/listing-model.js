const mySqlConn = require('../database/database');

Listing = function(listing) {
    this.title = listing.title;
    this.location = listing.location
    this.description = listing.description;
    this.numberOfPeople = listing.numberOfPeople;
    this.pricePerNight = listing.pricePerNight;
    this.hostId = listing.hostId;
}

Listing.findAllListings = (result) => {
    mySqlConn.query("select * from listing", (res, err) => {
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

Listing.findListingById = (listingId, result) => {
    mySqlConn.query("select * from listing where id = ?", listingId, (res, err) => {
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

Listing.findListingByHostId = (hostId, result) => {
  console.log("hostId in model is: " + hostId);
    mySqlConn.query("select * from listing where hostId = ?", hostId, (res, err) => {
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

Listing.createListing = (newListing, result) => {
    console.log(newListing);
    mySqlConn.query("INSERT INTO listing set ?", newListing, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Listing.updateListingById = (listingId, listing, result) => {
    mySqlConn.query(
      "UPDATE listing SET ? WHERE id = ?",
      [listing, listingId],
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

Listing.removeListing = (listingId, result) => {
    mySqlConn.query("DELETE FROM listing WHERE id = ?", listingId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

module.exports = Listing;