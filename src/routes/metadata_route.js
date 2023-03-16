const express = require('express');
const router = express.Router();
const MetadataController = require('../controllers/metadata_controller');
const TextController = require('../controllers/text_controller');
const upload = require('../middlewares/multer_middleware');

const metadata = new MetadataController();
const text = new TextController();

router.post('/metadata', upload(), metadata.post);
router.post('/text', upload(), text.post);

module.exports = router;
