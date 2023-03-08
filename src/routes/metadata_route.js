const express = require('express');
const router = express.Router();
const MetadataController = require('../controllers/metadata_controller');

const metadata = new MetadataController();

router.get('/', metadata.get);

module.exports = router;
