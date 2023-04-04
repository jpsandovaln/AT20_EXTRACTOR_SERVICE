const ExtractMetadata = require('./extract_metadata');
const ExtractText = require('./extract_text');
const MetadataParameter = require('./metadata_parameter');
const TextParameter = require('./text_parameter');
const Parameter = require('./parameter');

class ExtractFacade {
    static getMetadata(inputFile, common, hexaId) {
        const metadata = new ExtractMetadata();
        const builder = new MetadataParameter();
        const parameter = builder.withFile(inputFile).withCommon(common).withHexa(hexaId).build();
        return metadata.extract(parameter);
    }

    static getText(inputFile, lang) {
        const test = new ExtractText();
        const builder = new TextParameter();
        const parameter = builder.withFile(inputFile).withLang(lang).build();
        return test.extract(parameter);
    }
}

module.exports = ExtractFacade;