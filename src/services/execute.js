class Execute {
    run(command) {
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

module.exports = Execute;
