'use strict';

const express = require('express');
const pg = require('pg');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const client = new pg.Client({
    database: 'coffee',
    user: 'root',
    password: 'root',
    host: 'db',
    port: 5432,
})

// App
const app = express();

app.get('/api/coffee', async (req, res) => {
    const result = await client.query('SELECT * FROM coffees');
    res.json(result.rows);
});

(async () => {
    await client.connect();
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
})()