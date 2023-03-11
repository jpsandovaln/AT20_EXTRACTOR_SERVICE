const { exec } = require('child_process');
const { stdout, stderr } = require('process');

class ExifToolExtract {
    constructor() {}
    run(inputFile) {
        const command = 'D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/exiftool.exe ' + inputFile;
        return new Promise((resolve, reject) => {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    console.info('error: ' + err);
                } else {
                    resolve(stdout);
                }
            });
        });
    }
}

module.exports = ExifToolExtract;
