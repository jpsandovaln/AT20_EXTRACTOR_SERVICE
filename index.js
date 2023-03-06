const express = require('express');
const dotenv = require('dotenv');
const ExifToolExtract = require('./src/services/exiftool_extract');

const app  = express();

dotenv.config();

app.get('/api/v1/extract', async (req, res) => {
    const extract = new ExifToolExtract();
    const result = await extract.run();
    res.send(result);
});

const port = process.env.PORT || 9090;

app.listen(port, () => {
    console.info('server running...');
});
