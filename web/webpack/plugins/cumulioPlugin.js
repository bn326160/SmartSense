const Cumulio = require('cumulio');
var client = new Cumulio({
    api_key: '6dbfe568-3490-4bbd-88d7-1f7e467eef3f',
    api_token: 'n8and0tLhHItOmvszoW0SX0h2EWX4JyoKS6sG7ld8XdrFx1obH1UhAhn6S9j0BXfUFu5aockW9fom6U1yJDFTX2yvlgEiDKXBwDmPODE9BNxxYRbBy3XIOfCel75FDNUxBCFldYu5kU9K7B4fsWVCU'
});

let promise = client.create('authorization', {
    type: 'temporary',
    securables: [
        '444a1557-3185-4e10-b93e-2e50f6368122'/*,add the datasets necessary*/
    ],
    expiry: new Date(new Date().getTime() + 300 * 1000)
});

promise.then(function(result){
    console.log(result);
    process.exit();
})
.catch(error => {
    console.log(error);
    process.exit();
})

.module.exports = function () {
    console.log("hello");
    process.exit();
}
