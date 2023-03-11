const ExifToolExtract = require('../services/exiftool_extract');

class MetadataController {
    async post(req, res) {
        const inputFile = req.file.path;
        const extract = new ExifToolExtract();
        const result = await extract.run(inputFile);
        res.send(result);
    }
}

module.exports = MetadataController;
