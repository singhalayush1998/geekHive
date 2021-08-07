const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const {addUser, removeUser, getUser, getUserInRoom} = require("./user")

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(cors());
app.use(router);


io.on('connect', (socket) => {
    console.log("a new user has connected")
    
    socket.on('join', ({ name, room }, callback) => {
      const {error, user} = addUser({id: socket.id, name, room})

      if(error) return callback(error)
      //admin generated message
      socket.join(user.room)
      socket.emit('message', {user: 'admin', text: `${user.name}, Welcome to ${user.room} group`})

      socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined.`})


      io.to(user.room).emit('roomData', {room: user.room, users: getUserInRoom(user.room)})

      callback()
    });
    //User Generated Message
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);

      io.to(user.room).emit('message', {user: user.name, text: message})
      
      callback()
      
    })  
    socket.on('disconnect', () => {
      const user = removeUser(socket.id)
      if(user){
        io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left`})
        io.to(user.name).emit('roomData', {room: user.room, users: getUserInRoom(user.room)})
      }
      console.log("disconnected")
    })
});


const port = 2244
server.listen(port, () => console.log(`Server is Listening to port ${port}`))