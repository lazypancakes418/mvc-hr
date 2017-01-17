var animeController = require('../anime/animeController.js')
//var userCtr = require('/users/userCtr.js')

module.exports = function (app, express) {
    app.get('/anime', animeController.get)
    //app.get('/users'. userCtr.get)
}