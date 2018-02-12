const http = require('http');
const path = require('path');

const express = require('express');
const socketIO = require('socket.io');

// region EXPRESS
const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 8080);
const port = app.get('port');

app.use('/js', express.static(path.join(__dirname, 'javascript')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// endregion EXPRESS

// region SOCKET.IO

const io = socketIO(server);

io.on('connection', socket => {
    console.log('A user connected');
});

// endregion SOCKET.IO

server.listen(port, () => console.log(`Listening on port ${port}`));
