var axios = require('axios');
var animeController = require('./anime/animeController.js');
var db = require('./db')

var config = {
    'Ocp-Apim-Subscription-Key': 'b097ab36007e49169cbf5cf1fa38a35f'
}
// var link = [
//     'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Kurau_Phantom_Memory.jpg/230px-Kurau_Phantom_Memory.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/a/a6/Kanon_second_anime_Funimation_box_set.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/7/79/Please_Teacher_Vol_1_DVD.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/5/5d/AKIRA_(1988_poster).jpg',
//     'http://vignette2.wikia.nocookie.net/doblaje/images/9/98/Love_hina.jpg/revision/latest?cb=20101128193919&path-prefix=es',
//     'https://s-media-cache-ak0.pinimg.com/originals/c0/1f/82/c01f82029206714ff7f2aeab24254e73.jpg',
//     'http://img1.ak.crunchyroll.com/i/spire4/30eb07003c901066a9db027399c77ad41420598162_full.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/f/fe/FLCL_image.jpg',
//     'https://myanimelist.cdn-dena.com/images/anime/9/20134.jpg',
//     'http://static.tvtropes.org/pmwiki/pub/images/rsz_capa.jpg'
// ]

module.exports = {
    setImage: function () {
        db.query(`Select * from atitles limit 10`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                var timer = 5000
                results.forEach(function (obj , index) {
                //     var title
                    
                //     if(obj.japtitle) {
                //       title = obj.japtitle.split(' ').join('+')+'+anime'
                //     } else {
                //         title = obj.entitle.split(' ').join('+')+'+anime'
                //     }
                     
                //     if(obj.link !== 'null') {
                //         setTimeout(function () {
                //         var id = obj.aid
                        
                //         axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] = "b097ab36007e49169cbf5cf1fa38a35f";
                //         axios.get(`https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${title}`, config).then(function (resp) {
                //             db.query(`UPDATE atitles  set link = "${resp.data.value.pop().contentUrl}" where aid = ${id}`, function (err, result) {
                //                 if (err) {
                //                     console.log(err)
                //                 }
                //             })
                //         }).catch(function (error) {
                //             console.log(error)
                //         })
                //     }, timer)
                // }
                // timer+= 5000
                })
            }
        })
    }
}