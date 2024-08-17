const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

io.on('connection', function(socket) {
    console.log('new user connected!');

    socket.on('new message', function(msg) {
        console.log(msg);
    });
});

server.listen(4000);