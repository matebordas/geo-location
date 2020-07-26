import { validateFileInput } from './utilities/inputValidator.utility';
import { getCustomersWithin100km } from './services/customer.service';

const inputFile = process.argv[2];
validateFileInput(inputFile);

const filePathArguments = inputFile.split('=');
const filePath = filePathArguments[1];

(async () => {
    const sortedCustomersWithin100km = await getCustomersWithin100km(filePath);
    sortedCustomersWithin100km.forEach((customer) => console.log(customer));
})();
