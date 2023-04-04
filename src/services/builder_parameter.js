class BuilderParameter {
    constructor() {
        if (this.constructor === BuilderParameter) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    build() {
        throw new Error("Method build must be implemented");
    }
}

module.exports = BuilderParameter;
