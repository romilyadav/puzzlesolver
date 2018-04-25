const express = require('express')
    , bodyParser = require('body-parser')
    , path = require('path');

const http = require('http');
const port = 3000;

const app = express();

const api = require('./local_server/solver-api');

//Parset for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use('', api);

//Catch all routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

app.set('port', port);

//Create HTTP Server
const server = http.createServer(app);

/**
 * 
 * Listen on port 3000
 */

 server.listen(port, () => console.log(`API running on localhost:${port}`));
