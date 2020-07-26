const validateFileInput = (filePath) => {
    if (!filePath) {
        throw new Error('You must pass an input=[path] argument with the path');
    }

    const filePathArguments = filePath.split('=');
    const argumentName = filePathArguments[0];
    const invalidFormatError = 'The input file format must be input=[path]';

    if (filePathArguments.length !== 2) {
        throw new Error(invalidFormatError);
    }

    if (argumentName !== 'input') {
        throw new Error(invalidFormatError);
    }
};

export {
    validateFileInput,
};
