const ExifToolExtract = require('../services/exiftool_extract');

class MetadataController {
    async get(req, res) {
        // const inputFile = req.file.path;
        const extract = new ExifToolExtract();
        const result = await extract.run();
        res.send(result);
    }
}

module.exports = MetadataController;
