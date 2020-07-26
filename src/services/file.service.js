const readline = require('readline');
const fs = require('fs');

const readFileLines = (filePath, onReadLine, onClose) => {
    const fileStream = fs.createReadStream(filePath);
    const readLineInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    readLineInterface.on('line', (line) => {
        onReadLine(line);
    });

    readLineInterface.on('close', () => {
        onClose();
    });
};

export {
    readFileLines
};
