const ExtractFacade = require('../services/extract_facade');

class TextController {
    async post(req, res) {
        try {
        const inputFile = req.file.path;
        const lang = req.body.lang;
        const result = await ExtractFacade.getText(inputFile, lang);
        res.send(result);
        } catch(error) {
            console.info(error);
            res.status(error.getStatus).json({
                error: error.message,
                errorCode: error.getErrorCode
            });
        }
    }
}

module.exports = TextController;

