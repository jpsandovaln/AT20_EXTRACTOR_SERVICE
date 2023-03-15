const tesseract = require("node-tesseract-ocr");
const Extractor = require("./extractor");

class ExtractText extends Extractor {
    async extract(filePath, lang) {
        const config = {
            lang,
            binary: "D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/Tesseract-OCR/tesseract",
            "tessdata-dir": "D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/Tesseract-OCR/tessdata"
        };
        const result = await tesseract.recognize(filePath, config);
        return result;
    }
}

module.exports = ExtractText;
