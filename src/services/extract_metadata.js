const Execute = require("./execute");
const Extractor = require('./extractor');
const CommandFactory = require('./command_factory');

class ExtractMetadata extends Extractor{
    extract(parameter) {
        const command  = CommandFactory.getInstance(
            parameter.getType,
            parameter.getFilePath,
            parameter.getWithHexadecimalId,
            parameter.getOnlyCommonFiled
        );
        const execute = new Execute();
        return execute.run(command.build());
    }
}

module.exports = ExtractMetadata;
