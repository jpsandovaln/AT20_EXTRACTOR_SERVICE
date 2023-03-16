const ExtractText = require("../services/extract_text");

class TextController {
    async post(req, res) {
        const inputFile = req.file.path;
        const lang = req.body.lang;
        const test = new ExtractText();
        const result = await test.extract(inputFile, lang);
        res.send(result);
    }
}

module.exports = TextController;

