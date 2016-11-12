const request = require('request');

const clientID = 'NjE5MjIyNnwxNDc4OTcyNDUw'
const secret = ''
const url = 'https://' + clientID + ':' + secret + '@api.seatgeek.com/2/events/739515'

request.get(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});