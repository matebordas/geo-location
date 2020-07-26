/* eslint-disable no-undef */
import { validateFileInput } from './inputValidator.utility';

const { expect } = require('chai');

describe('validateFileInput', () => {
    it('should throw an error if no file input is passed', () => {
        const expectedMessage = 'You must pass an input=[path] argument with the path';

        const functionWrapper = () => validateFileInput();
        expect(functionWrapper).to.throw(expectedMessage);
    });

    it('should throw an error if the argument does not include a =', () => {
        const expectedMessage = 'The input file format must be input=[path]';

        const functionWrapper = () => validateFileInput('input:path/file');
        expect(functionWrapper).to.throw(expectedMessage);
    });

    it('should throw an error when the argument if there is a missing file path', () => {
        const expectedMessage = 'The input file format must be input=[path]';

        const functionWrapper = () => validateFileInput('input=');
        expect(functionWrapper).to.throw(expectedMessage);
    });

    it('should throw an error when the argument if the argument name is not input', () => {
        const expectedMessage = 'The input file format must be input=[path]';

        const functionWrapper = () => validateFileInput('file=path/file');
        expect(functionWrapper).to.throw(expectedMessage);
    });

    it('should not throw an error for valid input formats', () => {
        const functionWrapper = () => validateFileInput('input=path/file');
        expect(functionWrapper).to.not.throw();
    });
});
