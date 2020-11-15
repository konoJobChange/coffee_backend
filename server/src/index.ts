import express from 'express';
import { Client } from 'pg';
// Constants
const PORT = process.env.PORT || 8080;

const client = new Client({
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
    app.listen(PORT, () => {
        console.log(`listen ${PORT} !`);
    });
})()