var express = require('express');
var router = express.Router();
const Cumulio = require('cumulio');

var client = new Cumulio({
    api_key: 'aecd3530-e666-4bda-877a-c97ee6439725',
    api_token: 'UdrbjQ5bpb18C8Bc0CXXpJY41dVYt3YIUCTsvBlYgrk8lu3jPak86SqmyFHcOTWecw3hOdJG8rUDZSccoOiawuvtIxnO4EIG1vpFjivMB27a8YscBbBX0KhDV3z2JLTV7tbCVpVKaXlszuu9Ms00sl'
});

/* GET home page. */
router.get('/', function(req, res, next) {

    client.create('authorization', {
        type: 'temporary',
        securables: [
            '6c57306d-aae5-43ad-b790-3cb941d0a3af',
            '134be29b-63ff-4b1d-8c0c-9950c0642ccb'
        ],
        expiry: new Date(new Date().getTime() + 300 * 1000)
    }).then(function(result){
        console.log(result);
        res.render('dashboard', {
            title: 'Dashboard',
            key: result.id,
            token: result.token
        });

    });

});

module.exports = router;
