const ExtractText = require("../services/extract_text");
const Parameter = require("../services/parameter");

class TextController {
    async post(req, res) {
        try {
        const inputFile = req.file.path;
        const lang = req.body.lang;
        const test = new ExtractText();
        const parameter = new Parameter();
        parameter.setFilePath = inputFile;
        parameter.setLang = lang;
        const result = await test.extract(parameter);
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

