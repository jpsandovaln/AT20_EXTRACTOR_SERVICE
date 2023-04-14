class Generator {

    constructor(file) {
        this.file = file;
        this.exiftool = 'D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/exiftool.exe ';
    }

    set setHexa(hexa) {
        this.hexa = hexa ? " -H " : "";
    }

    set setCommon(common) {
        this.common =  common ? " -common " : "";
    }

    create() {
        return this.exiftool + this.hexa + this.common + this.file;
    }

}

module.exports = Generator;
