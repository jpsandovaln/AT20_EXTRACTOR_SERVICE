const ExtractMetadata = require('../services/extract_metadata');
const Parameter = require('../services/parameter');

class MetadataController {
    async post(req, res) {
        try {
            const inputFile = req.file.path;
            const hexaId = req.body.hexaId === 'true';
            const common = req.body.common === 'true'; 

            const metadata = new ExtractMetadata();
            const parameter = new Parameter();
            parameter.setFilePath = inputFile;
            parameter.setOnlyCommonFiled = common;
            parameter.setWithHexadecimalId = hexaId
            const result = await metadata.extract(parameter);
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
