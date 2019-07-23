const express = require('express');
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

// get all 
router.get('/', (req,res) => {
    listingServer.findListings().then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

router.get('/:hostId', (req,res) => {
    listingServer.findListingByHostId(req.params.hostId).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// get by id
// router.get('/:id', (req,res) => {
//     // asynchronous function call structure 
//     listingServer.findListingById(req.params.id).then(listing => {
//         res.json(listing);
//     }).catch(err => {
//         res.json(err);
//     });
// });

// create
router.post('/create', (req,res) => {
    listingServer.createListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

//update
router.post('/update', (req,res) => {
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// delete
router.delete('/delete/:id', (req,res) => {
    listingServer.deleteListing(req.params.id).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;