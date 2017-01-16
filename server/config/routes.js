var animeController = require('../anime/animeController.js')

module.exports = function (app, express) {
    app.get('/anime', animeController.get)

}