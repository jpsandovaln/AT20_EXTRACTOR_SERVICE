const Generator = require("./generator");
const Command = require("./command");

class AdapterCommand extends Command {
    constructor(filePath, withHexadecimalId, onlyCommonFiled) {
        super();
        this.generator = new Generator(filePath);
        this.generator.setHexa = withHexadecimalId;
        this.generator.setCommon = onlyCommonFiled;
    }

    build() {
        try {
            return this.generator.create();
        } catch(error) {
            throw new CommandException(error.message, 401, "AT20-100");
        }
    }
}

module.exports = AdapterCommand;
