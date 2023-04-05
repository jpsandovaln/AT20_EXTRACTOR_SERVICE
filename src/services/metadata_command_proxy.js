const CommandException = require("../common/exception/command_exception");
const Command = require("./command");
const MetadataCommand = require("./metadata_command");

class MetadataCommandProxy extends Command {
    constructor(filePath, withHexadecimalId, onlyCommonFiled) {
        super();
        this.metadataComand = new MetadataCommand(filePath, withHexadecimalId, onlyCommonFiled);
    }

    build() {
        if (this.checkAccess()) {
            return this.metadataComand.build();
        } else {
            throw new CommandException('Access denied', 405, "at20-511");
        }
    }

    checkAccess() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        return hours <= 17;
    }
}

module.exports = MetadataCommandProxy;
