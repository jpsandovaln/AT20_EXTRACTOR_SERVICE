const ExtractMetadata = require('../services/extract_metadata');

class MetadataController {
    async post(req, res) {
        const inputFile = req.file.path;
        const hexaId = req.body.hexaId === 'true';
        const common = req.body.common === 'true'; 

        const metadata = new ExtractMetadata();
        const result = await metadata.extract(inputFile, hexaId, common);
        res.send(result);
    }
}

module.exports = MetadataController;
