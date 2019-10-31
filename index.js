var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: '', // ใส่คีย์ตรงนี้เลย
  consumer_secret: '', // ใส่คีย์ตรงนี้เลย
  access_token_key: '', // ใส่คีย์ตรงนี้เลย
  access_token_secret: '' // ใส่คีย์ตรงนี้เลย
});


client.stream('statuses/filter', {track: 'รีวิวเซเว่น'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});