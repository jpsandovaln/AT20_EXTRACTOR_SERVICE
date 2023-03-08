const express = require('express');
const dotenv = require('dotenv');
const metadata = require('./src/routes/metadata_route');

const app  = express();

dotenv.config();

app.use('/api/v1/extract', metadata);

const port = process.env.PORT || 9090;

app.listen(port, () => {
    console.info('server running...');
});
