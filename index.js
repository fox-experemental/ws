'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let WebSocket  = require('ws');
let ws = new WebSocket('wss://node.csgohot.ru:7889/');

ws.on('open', () => {
  console.log('I\'m open');
});

ws.on('error', (err) => {
  console.log(err);
});

ws.on('message', (data, flags) => {
  console.log(JSON.parse(data));
  // console.log(flags);
});