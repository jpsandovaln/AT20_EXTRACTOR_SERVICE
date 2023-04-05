const BuilderParameter = require("./builder_parameter");
const Parameter = require("./parameter");

class MetadataParameter extends BuilderParameter {
    constructor() {
        super();
        this.parameter = new Parameter();
        this.parameter.setOnlyCommonFiled = false;
        this.parameter.setWithHexadecimalId = false;
    }

    withFile(file) {
        this.parameter.setFilePath = file;
        return this;
    }

    withType(type) {
        this.parameter.setType = type;
        return this;
    }

    withCommon(common) {
        this.parameter.setOnlyCommonFiled = common;
        return this;
    }

    withHexa(hexa) {
        this.parameter.setWithHexadecimalId = hexa;
        return this;
    }

    build() {
        return this.parameter;
    }
}

module.exports = MetadataParameter;
