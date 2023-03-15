class Command {
    constructor() {
        if (this.constructor === Command) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    build() {
        throw new Error("Method build must be implemented");
    }
}

module.exports = Command;
