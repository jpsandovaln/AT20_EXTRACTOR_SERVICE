const Execute = require("./execute");
const MetadataCommand = require("./metadata_command");
const Extractor = require('./extractor');
const WMicCommand = require("./wmic_command");
const Command = require("./command");
const MetadataCommandProxy = require("./metadata_command_proxy");

class ExtractMetadata extends Extractor{
    extract(parameter) {
        let command  = null;
        if (parameter.getType === 'exiftool') {
            command = new MetadataCommand(parameter.getFilePath, parameter.getWithHexadecimalId, parameter.getOnlyCommonFiled);
        }
        if (parameter.getType === 'wmic') {
            command = new WMicCommand(parameter.getFilePath, parameter.getWithHexadecimalId, parameter.getOnlyCommonFiled);
        }
        if (parameter.getType === 'proxy') {
            command = new MetadataCommandProxy(parameter.getFilePath, parameter.getWithHexadecimalId, parameter.getOnlyCommonFiled);
        }
        


        const execute = new Execute();
        return execute.run(command.build());
    }
}

module.exports = ExtractMetadata;
