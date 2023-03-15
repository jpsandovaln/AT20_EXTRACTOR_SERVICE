const Command = require("./command")

class MetadataCommand extends Command {
    constructor(filePath, withHexadecimalId, onlyCommonFiled) {
        super();
        this.exiftool = 'D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/exiftool.exe ';
        this.filePath = filePath;
        this.hexadecimalId  = withHexadecimalId ? " -H " : "";
        this.commondField = onlyCommonFiled ? " -common " : "";
    }

    build() {
        return this.exiftool + this.hexadecimalId + this.commondField + this.filePath;
    }
}

module.exports = MetadataCommand;
