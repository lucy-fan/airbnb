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
            listings.createListing(listingReq, (err, res) => {
                if (err) {
                  reject(err);
                }
                else {
                  resolve(res);
                }
            });
        });
    }

    // updates listing
    updateListing(listing) 
    {
        return new Promise((resolve, reject) => {
            listings.findListingById(listing.id, (err, res) => { // check if listingexists
              if (err) {
                reject(err);
              }
              if (res.length < 1) { // no listing found
                reject(false);
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

    // deletes listing
    deleteListing(id) 
    {
        return new Promise((resolve, reject) => {  
            listings.findListingById(id, (err, res) => { // check if listing exists
                if (err) {
                  reject(err);
                }
                if (res.length < 1) { // listing is not in db
                  reject(false);
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