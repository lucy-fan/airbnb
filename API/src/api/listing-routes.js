const express = require('express');
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();

// get all listings
router.get('/', (req,res) => {
    listingServer.findListings().then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// get listing by host id
router.get('/:hostId', (req,res) => {
    listingServer.findListingByHostId(req.params.hostId).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// create new listing
router.post('/create', (req,res) => {
    listingServer.createListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// update listing
router.post('/update', (req,res) => {
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// delete listing by id
router.delete('/delete/:id', (req,res) => {
    listingServer.deleteListing(req.params.id).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;