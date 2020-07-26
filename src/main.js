import { validateFileInput } from './utilities/inputValidator.utility';
import { readFileLines } from './services/file.service';
import { calculateDistance } from './services/distance.service';
import { intercomCoordinates } from './common/constants';

const inputFile = process.argv[2];
validateFileInput(inputFile);

const filePathArguments = inputFile.split('=');
const filePath = filePathArguments[1];

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
    console.log('sortedCustomers', sortedCustomers);
};

readFileLines(filePath, onReadFileLine, onFileClose);
