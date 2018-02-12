const http = require('http');
const path = require('path');

const express = require('express');

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 8080);
const port = app.get('port');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
