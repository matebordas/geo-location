const validateFileInput = (fileInput) => {
    if (!fileInput) {
        throw new Error('You must pass an input=[path] argument with the path');
    }

    const filePathArguments = fileInput.split('=');
    const argumentName = filePathArguments[0];
    const invalidFormatError = 'The input file format must be input=[path]';

    if (filePathArguments.length !== 2) {
        throw new Error(invalidFormatError);
    }

    const argumentValue = filePathArguments[1];
    if (!argumentValue.length) {
        throw new Error(invalidFormatError);
    }

    if (argumentName !== 'input') {
        throw new Error(invalidFormatError);
    }
};

export {
    validateFileInput,
};
