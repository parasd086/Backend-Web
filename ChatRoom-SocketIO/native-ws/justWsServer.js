const http = require('http')
const websocket = require('ws')

const server = http.createServer((req,res) => {
    res.end("I am connected")
})


//Docs- https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketserveroptions-callback
const wss = new websocket.WebSocketServer({server})

// wss.on('headers',(headers, req)=>{
//     console.log(headers);
// })

wss.on('connection',(ws,req)=>{
    // console.log(ws);
    ws.send('Welcome to the websocket server!!!');
    ws.on('message',(data)=>{
        console.log(data.toString());
    })
})

server.listen(8000)