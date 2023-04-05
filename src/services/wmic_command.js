const Command = require("./command");

class WMicCommand extends Command {
    constructor(filePath, withHexadecimalId, onlyCommonFiled) {
        super();
        this.wmic = 'wmic datafile where name="';
        this.filePath = filePath;
    }

    build() {
        try {
            return this.wmic + this.filePath.replaceAll('\\', '\\\\') + '"';
        } catch(error) {
            throw new CommandException(error.message, 401, "AT20-100");
        }
    }
}

module.exports = WMicCommand;
