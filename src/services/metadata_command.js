const CommandException = require("../common/exception/command_exception");
const Command = require("./command");

class MetadataCommand extends Command {
    constructor(filePath, withHexadecimalId, onlyCommonFiled) {
        super();
        this.exiftool = 'D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/exiftool.exe ';
        this.filePath = filePath;
        this.hexadecimalId  = withHexadecimalId ? " -H " : "";
        this.commondField = onlyCommonFiled ? " -common " : "";
    }

    build() {
        try {
            return this.exiftool + this.hexadecimalId + this.commondField + this.filePath;
        } catch(error) {
            throw new CommandException(error.message, 401, "AT20-100");
        }
    }
}

module.exports = MetadataCommand;
