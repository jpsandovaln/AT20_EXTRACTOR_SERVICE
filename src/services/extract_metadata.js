const Execute = require("./execute");
const MetadataCommand = require("./metadata_command");
const Extractor = require('./extractor');

class ExtractMetadata extends Extractor{
    extract(parameter) {
        const command = new MetadataCommand(parameter.getFilePath, parameter.getWithHexadecimalId, parameter.getOnlyCommonFiled);
        const execute = new Execute();
        return execute.run(command.build());
    }
}

module.exports = ExtractMetadata;
