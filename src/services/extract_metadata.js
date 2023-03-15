const Execute = require("./execute");
const MetadataCommand = require("./metadata_command");

class ExtractMetadata {
    extract(filePath, withHexadecimalId, onlyCommonFiled) {
        const command = new MetadataCommand(filePath, withHexadecimalId, onlyCommonFiled);
        const execute = new Execute();
        return execute.run(command.build());
    }
}

module.exports = ExtractMetadata;
