import * as http from 'http';
import * as path from 'path';

import * as express from 'express';
import * as socketIO from 'socket.io';

import { webpackMiddleware } from '~server/webpack';

// region EXPRESS
const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 8080);
const port = app.get('port');

if (process.env.NODE_ENV !== 'production') {
    app.use(require('morgan')('dev'));
    webpackMiddleware(app);
}

app.use('/public/', express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});
// endregion EXPRESS

// region SOCKET.IO
const io = socketIO(server);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
// endregion SOCKET.IO

server.listen(port, () => console.log(`Listening on port ${port}`));
