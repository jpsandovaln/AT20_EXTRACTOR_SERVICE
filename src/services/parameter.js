class Parameter {
    constructor() {
    }

    get getFilePath() {
        return this.filePath;
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

