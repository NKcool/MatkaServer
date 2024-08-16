require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const PORT = process.env.PORT || 4000;

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route


app.get('/number', (req, res) => {
    const url = 'https://dpbossss.services/';
    console.log(`in /number`);
    request(url, (error, response, body) => {
        if (error) {
            return res.status(500).json({ error: 'Error in proxy request' });
        }
        res.send(body);
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
