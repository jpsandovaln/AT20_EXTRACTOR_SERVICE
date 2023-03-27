const tesseract = require("node-tesseract-ocr");
const ExtractException = require("../common/exception/extract_exception");
const Extractor = require("./extractor");

class ExtractText extends Extractor {
    async extract(parameter) {
        const config = {
            lang: parameter.getLang,
            binary: "D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/Tesseract-OCR/tesseract",
            "tessdata-dir": "D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/Tesseract-OCR/tessdata"
        };
        try {
           const result = await tesseract.recognize(parameter.getFilePath, config);
           return result;
        } catch(error) {
            throw new ExtractException(error.message, 405, "AT20-301", "external library")
        }
    }
}

module.exports = ExtractText;
