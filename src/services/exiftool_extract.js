const { exec } = require('child_process');
const { stdout, stderr } = require('process');

class ExifToolExtract {
    constructor() {}

    execute() {
        const command = 'D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/exiftool.exe d:/cbba.jpg';
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.info('error: ' + err);
            }
            console.info('stdout: ' + stdout)
            console.info('stderr: ' + stderr)
        })
    }

    run() {
        const command = 'D:/AT20/AT20_EXTRACTOR_SERVICE/thirdparties/win/exiftool.exe d:/cbba.jpg';
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
