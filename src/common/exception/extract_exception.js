class ExtractException extends Error {
    constructor(message, status, errorCode, type) {
        super(message);
        this.status = status;
        this.errorCode = errorCode;
        this.type = type;
    }

    get getStatus() {
        return this.status;
    }

    get getErrorCode() {
        return this.errorCode;
    }
    get getType() {
        return this.type;
    }
}

module.exports = ExtractException;
