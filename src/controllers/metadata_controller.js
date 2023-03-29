const ExtractFacade = require('../services/extract_facade');


class MetadataController {
    async post(req, res) {
        try {
            const inputFile = req.file.path;
            const hexaId = req.body.hexaId === 'true';
            const common = req.body.common === 'true'; 
            const result = await ExtractFacade.getMetadata(inputFile, common, hexaId)
            res.send(result);
        } catch (error) {
            res.status(error.getStatus).json({
                error: error.message,
                errorCode: error.getErrorCode
            });
        }
    }
}

module.exports = MetadataController;
