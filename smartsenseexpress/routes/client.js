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
            'dd840415-aef7-4e90-9b8e-e8220dbba7eb',
            '4bad0d7e-7bb4-43db-ab4c-9920689b7b6d'
        ],
        expiry: new Date(new Date().getTime() + 300 * 1000)
    }).then(function(result){
        console.log(result);
        res.render('client', {
            title: 'Client center',
            key: result.id,
            token: result.token
        });

    });

});

module.exports = router;
