const Execute = require("./execute");
const MetadataCommand = require("./metadata_command");
const Extractor = require('./extractor');

class ExtractMetadata extends Extractor{
    extract(filePath, withHexadecimalId, onlyCommonFiled) {
        const command = new MetadataCommand(filePath, withHexadecimalId, onlyCommonFiled);
        const execute = new Execute();
        return execute.run(command.build());
    }
}

module.exports = ExtractMetadata;
