var dgram = require('dgram')
var socket = dgram.createSocket('udp4')

socket.on('message', function(msg) {
  console.log(msg.toString())
})

socket.bind(8080, '127.0.0.1')