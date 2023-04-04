const BuilderParameter = require("./builder_parameter");
const Parameter = require("./parameter");

class TextParameter extends BuilderParameter {
    constructor() {
        super();
        this.parameter = new Parameter();
        this.parameter.setLang = "eng";
    }

    withFile(file) {
        this.parameter.setFilePath = file;
        return this;
    }

    withLang(lang) {
        this.parameter.setLang = lang;
        return this;
    }

    build() {
        return this.parameter;
    }
}

module.exports = TextParameter;
