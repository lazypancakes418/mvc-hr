var axios = require('axios');
var animeController = require('./anime/animeController.js');
var db = require('./db')

var config = {
    'Ocp-Apim-Subscription-Key' : window.BING_API_KEY
}

module.exports =  {
    setImage: function () {
         db.query(`Select * from atitles`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                var one = results.pop()
                console.log(one)
                one = one.split(' ').join('+')
                console.log(one)
                axios.get(`https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${one}`, config).then()
                // results.forEach(function (obj) {
                //     setTimeout(function () {
                //         axios.post
                //     },6000)
                // } )
            }

         })
    }
}