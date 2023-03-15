class Extractor {
    constructor() {
        if (this.constructor === Extractor) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    extract() {
        throw new Error("Method build must be implemented");
    }
}

module.exports = Extractor;
