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
            'b4d1fa26-e73e-4d7a-bfd1-6b635ce8feb5',
            '7d0405b4-8187-4dd8-b3c7-8b8924885b1e'
        ],
        expiry: new Date(new Date().getTime() + 300 * 1000)
    }).then(function(result){
        console.log(result);
        res.render('lead', {
            title: 'Lead Dashboard',
            key: result.id,
            token: result.token
        });

    });

});

module.exports = router;
