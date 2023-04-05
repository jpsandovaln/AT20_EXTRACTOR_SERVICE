class Parameter {
    constructor() {
    }

    get getFilePath() {
        return this.filePath;
    }

    get getType() {
        return this.type
    }

    set setType(type) {
        this.type = type;
    }

    set setFilePath(filePath) {
        this.filePath = filePath;
    }

    get getWithHexadecimalId() {
        return this.withHexadecimalId;
    }

    set setWithHexadecimalId(withHexadecimalId) {
        this.withHexadecimalId = withHexadecimalId;
    }

    get getOnlyCommonFiled() {
        return this.onlyCommonFiled;
    }

    set setOnlyCommonFiled(onlyCommonFiled) {
        this.onlyCommonFiled = onlyCommonFiled;
    }

    get getLang() {
        return this.lang;
    }

    set setLang(lang) {
        this.lang = lang;
    }
}

module.exports = Parameter;

