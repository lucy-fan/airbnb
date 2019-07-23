const listings = require("../models/listing-model");

module.exports = class ListingService {
    
    constructor() {}

    // returns all listings
    findListings()
    {        
        return new Promise((resolve, reject) => {    
            listings.findAllListings((res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // returns listings by host id
    findListingByHostId(hostId)
    {        
        return new Promise((resolve, reject) => {    
            listings.findListingByHostId(hostId, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            });              
        });
    }

    // returns listing by id
    findListingById(id)
    {        
        return new Promise((resolve, reject) => {    
            listings.findListingById(id, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });              
        });
    }

    // creates new listing
    createListing(listingReq) 
    {
        return new Promise((resolve, reject) => {
          listings.findListingByHostId(listingReq.hostId, (err, res) => { // check if listing exists
            if (err) {
              reject(err);
            }
            if (res.length < 1) { // create listing
              listings.createListing(listingReq, (err, res) => {
                if (err) {
                  reject(err);
                }
                  resolve(res);
              });
            }
            else {
                var isDuplicate = false;

                res.forEach(listing => {
                    if(listing.title == listingReq.title) {
                        isDuplicate = !isDuplicate;
                        reject("Listing already exists");
                    }
                });

                if (isDuplicate) {
                    reject("Listing already exists");
                }

                listings.createListing(listingReq, (res, err) => {
                    if (err) {
                        reject(err);
                    }
                        resolve(res);
                });
            }
          })
        });
    }

    updateListing(listing) 
    {
        return new Promise((resolve, reject) => {
            listings.findListingById(listing.id, (err, res) => { // check if listingexists
              if (err) {
                reject(err);
              }
              if (res.length < 1) { // no listing found
                reject("listing does not exist");
              }
              else { // found listing, now update
                listings.updateListingById(res[0].id, listing, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                      resolve(res);
                });
              }
            })
        });
    }

    deleteListing(id) 
    {
        return new Promise((resolve, reject) => {  
            listings.findListingById(id, (err, res) => { // check if listing exists
                if (err) {
                  reject(err);
                }
                if (res.length < 1) { // listing is not in db
                  reject("listing does not exist");
                }
                else {
                    listings.removeListing(id, (res, err) => {
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