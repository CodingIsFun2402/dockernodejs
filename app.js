'use strict';
// Module aus Node laden
const http = require('http');
const path = require('path');

// Module über NPM laden
const express = require('express');

// Module lokal laden
// Eine Middleware, diese hier übernimmt das Loggen in die Konsole
const logger = require('./logger');

const clientDirectory = path.join(__dirname, 'client');
const app = express();

app.use(logger({ level: 'warn' }));

// Eine Middleware, diese hier liefert statische Seiten aus
app.use('/', express.static(clientDirectory));

//Zugriff auf URL Parameter 
app.get('/depot/:nr', (req, res) => {
    //Zugriff auf Query ?format=
    if(req.query.format === 'html') {
        // http://localhost:3002/depot/1?format=html
        res.send(`<h1>Anzeige Depot ${req.params.nr}</h1>`);
        return;
    } else if (req.query.format === 'json') {
        //  http://localhost:3002/depot/1?format=json
        const depot = { nr: `${req.params.nr}` };
        depot
        res.send(depot);
        return;
    }
    res.send("Depot Nr: " + `${req.params.nr}`);
});

const httpServer = http.createServer(app);

httpServer.listen(3002, () => {
    console.log('HTTP Server is listen on port 3002')
});