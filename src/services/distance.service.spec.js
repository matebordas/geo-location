/* eslint-disable no-undef */
import { calculateDistance } from './distance.service';
import { intercomCoordinates } from '../common/constants';

const { expect } = require('chai');

describe('calculateDistance', () => {
    it('should return 41.76 as the distance for latitude: 52.986375 and longitude: -6.043701', () => {
        const mockCustomer = { latitude: 52.986375, longitude: -6.043701 };

        const distance = calculateDistance(
            intercomCoordinates.latitude,
            intercomCoordinates.longitude,
            mockCustomer.latitude,
            mockCustomer.longitude,
        );
        expect(distance).to.equal(41);
    });

    it('should return 0 as the distance for the same latitude longitude', () => {
        const distance = calculateDistance(
            intercomCoordinates.latitude,
            intercomCoordinates.longitude,
            intercomCoordinates.latitude,
            intercomCoordinates.longitude,
        );
        expect(distance).to.equal(0);
    });

    it('should throw an error if the number of arguments is not correct', () => {
        const expectedMessage = 'You are missing one or more arguments';

        const functionWrapper = () => calculateDistance();
        expect(functionWrapper).to.throw(expectedMessage);
    });
});
