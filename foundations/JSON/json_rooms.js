var request = require('request');
var Promise = require('bluebird');
var stringify = require("json-stringify-pretty-compact");

var token = "10L5vdpS5Na9ji0Utd3YLk6jt5ShAgcEujdhzJJr";

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
                var rooms = (body);
                resolve(rooms)

            }
            if (response.statusCode != 200 || response.statusCode === null) {
                reject("\nrooms status code ERROR:  " + error + "\n")
            }

        })
    })} ;


exports.Rooms().then(function(hipchat_rooms){
   var empire_rooms = hipchat_rooms;
   console.log(stringify(empire_rooms));

    // FOR LOOP

    // ORGANIZE DATA


    // SAVE TO DATABASE




});
