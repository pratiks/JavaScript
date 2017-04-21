var request = require('request');
var Promise = require('bluebird');
var token = "";

exports.Rooms = function () {
    var options = ({
        url: 'https://api.hipchat.com' + '/v2/room',
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer ' + token
        }

    });

    return new Promise(function (resolve, reject)
    {
        request(options, function (error, response, body) {
            if (response.statusCode == 200) {

                body = (JSON.parse(body));
                var rooms = (body.items[0]);
                resolve(rooms)

            }
            if (response.statusCode != 200 || response.statusCode === null) {
                reject("\nrooms status code ERROR:  " + error + "\n")
            }

        })
    })} ;


exports.Rooms().then(function(hipchat_rooms){
   var current_rooms = hipchat_rooms;
   console.log(current_rooms);




});
