// var db = require('../db')

// module.exports = {
//     get: function (req, res, next) {
//         var user = req.body.user;
//         var password = req.body.password;
//         db.query(`Select password from users where user = ${user}`,
//         function(err, results) {
//             if(!results || error) {
//                next( new Error ('User does not exist or something wrong with the request made'))
//             } else {
//                 if(results.password === password) {
//                     res.redirect('details')
//                 }
//             }
//         })
//     }
// }