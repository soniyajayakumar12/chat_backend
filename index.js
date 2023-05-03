const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
  }
});
const cors = require('cors');

app.use(cors());

// socket.io code goes here
io.on("connection",(socket)=>{
    console.log(socket.id)
    socket.on("message",(msg)=>{
        console.log(msg)
        socket.broadcast.emit("receivedMsg",msg)
    })
})


server.listen(5000, () => {
  console.log('Server listening on port 5000');
});
