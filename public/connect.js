var socket = io();

function send_msg() {
    let obj = document.getElementById("ip");
    socket.emit('new message', obj.value);
}