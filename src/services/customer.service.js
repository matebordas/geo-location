import { calculateDistance } from './distance.service';
import { intercomCoordinates } from '../common/constants';
import { readFileLines } from './file.service';

const customersWithin100km = [];

const onReadFileLine = (line) => {
    const customer = JSON.parse(line);
    const customerLatitude = Number.parseFloat(customer.latitude);
    const customerLongitude = Number.parseFloat(customer.longitude);

    const distance = calculateDistance(
        intercomCoordinates.latitude,
        intercomCoordinates.longitude,
        customerLatitude,
        customerLongitude,
    );

    const isCustomerWithin100km = distance <= 100;
    if (!isCustomerWithin100km) { return; }

    customersWithin100km.push({
        name: customer.name,
        user_id: customer.user_id,
    });
};

const onFileClose = () => {
    const sortByUserId = (customer1, customer2) => customer1.user_id - customer2.user_id;
    const sortedCustomers = customersWithin100km.sort(sortByUserId);
    return sortedCustomers;
};

const getCustomersWithin100km = async (filePath) => {
    const sortedCustomers = await readFileLines(filePath, onReadFileLine, onFileClose);
    return sortedCustomers;
};

export {
    getCustomersWithin100km,
};
