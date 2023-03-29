const ExtractMetadata = require('./extract_metadata');
const ExtractText = require('./extract_text');
const Parameter = require('./parameter');

class ExtractFacade {
    static getMetadata(inputFile, common, hexaId) {
        const metadata = new ExtractMetadata();
        const parameter = new Parameter();
        parameter.setFilePath = inputFile;
        parameter.setOnlyCommonFiled = common;
        parameter.setWithHexadecimalId = hexaId
        return metadata.extract(parameter);
    }

    static getText(inputFile, lang) {
        const test = new ExtractText();
        const parameter = new Parameter();
        parameter.setFilePath = inputFile;
        parameter.setLang = lang;
        const result = test.extract(parameter);
    }
}

module.exports = ExtractFacade;