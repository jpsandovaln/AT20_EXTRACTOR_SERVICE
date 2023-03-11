const express = require('express');
const router = express.Router();
const MetadataController = require('../controllers/metadata_controller');
const upload = require('../middlewares/multer_middleware');

const metadata = new MetadataController();

router.post('/', upload(), metadata.post);

module.exports = router;
