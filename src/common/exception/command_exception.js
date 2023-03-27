class CommandException extends Error {
    constructor(message, status, errorCode) {
        super(message);
        this.status = status;
        this.errorCode = errorCode;
    }

    get getStatus() {
        return this.status;
    }

    get getErrorCode() {
        return this.errorCode;
    }
}

module.exports = CommandException;
