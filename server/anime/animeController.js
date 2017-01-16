var db = require('../db')

module.exports = {
    get: function (req, res, next) {
        console.log('here')
        db.query(`Select * from atitles`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                res.send(results);
            }
        })
    }
}