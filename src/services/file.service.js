const readline = require('readline');
const fs = require('fs');

const readFileLines = (filePath, onReadLine, onClose) => {
    const fileStream = fs.createReadStream(filePath);
    const readLineInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    return new Promise((resolve, reject) => {
        try {
            readLineInterface.on('line', (line) => {
                onReadLine(line);
            });

            readLineInterface.on('close', () => {
                const result = onClose();
                resolve(result);
            });
        } catch (error) {
            reject(error);
        }
    });
};

export {
    readFileLines
};
