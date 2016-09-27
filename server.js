// server.js
var jsonServer = require('json-server')

var express = require("express");

var server = jsonServer.create();
 
var middlewares = jsonServer.defaults()

server.use(middlewares)

server.use('/examples', express.static('examples', { maxAge: -1 }));

server.listen(3000, function (err) {
    if (!err) {
         console.log('Server is running  at 3000')
    }
})