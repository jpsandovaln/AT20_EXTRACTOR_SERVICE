const CommandException = require("../../src/common/exception/command_exception");
const MetadataCommand = require("../../src/services/metadata_command");

describe("Test Metadata command", () => {
    test("build command success", () => {
        const command = new MetadataCommand("d:/image.jpg", false, false);
        console.info(command.build());
        const expected = "D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/exiftool.exe d:/image.jpg";
        expect(expected).toEqual(command.build());
    });

    test("build command error", () => {
        expect(() => {
            const command = new MetadataCommand(null, false, false);
            console.info(command.build());
            command.build();
        }).toThrow(CommandException);
    });
});