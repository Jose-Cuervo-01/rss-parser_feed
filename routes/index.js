var express = require('express');
var router = express.Router();
const parser = require('rss-url-parser');

let Parser = require('rss-parser');
let par = new Parser();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
module.exports = router;

(async () => {
 
  let feed = await par.parseURL('http://feeds.soundcloud.com/users/soundcloud:users:801063742/sounds.rss');
  console.log(feed.title);
 
  feed.items.forEach(item => {
    console.log(feed);
  });
 
})();
//parser('http://feeds.soundcloud.com/users/soundcloud:users:293803449/sounds.rss').then((data) => console.log(data))
