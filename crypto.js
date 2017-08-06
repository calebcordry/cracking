// var Gdax = require('gdax');
// var orderbookSync = new Gdax.OrderbookSync(['BTC-USD', 'ETH-USD']);

// console.log(orderbookSync.book['ETH-USD'].state());

var Gdax = require('gdax');
var websocket = new Gdax.WebsocketClient(['BTC-USD', 'ETH-USD']);
websocket.on('message', function(data) { console.log(data); });
