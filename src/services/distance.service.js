const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

const calculateDistance = (latDegrees1, lonDegrees1, latDegrees2, lonDegrees2) => {
    if (!latDegrees1 || !lonDegrees1 || !latDegrees2 || !lonDegrees2) {
        throw new Error('You are missing one or more arguments');
    }

    const latitude1 = degreesToRadians(latDegrees1);
    const latitude2 = degreesToRadians(latDegrees2);
    const longitude1 = degreesToRadians(lonDegrees1);
    const longitude2 = degreesToRadians(lonDegrees2);

    const deltaLatitude = latitude2 - latitude1;
    const deltaLongitude = longitude2 - longitude1;

    const a = Math.sin(deltaLatitude / 2) ** 2
        + Math.cos(latitude1) * Math.cos(latitude2)
        * Math.sin(deltaLongitude / 2) ** 2;

    const distance = 2 * Math.asin(Math.sqrt(a));
    const earthRadiusInKilometers = 6371;

    const distanceInKilometers = distance * earthRadiusInKilometers;
    const formattedFloat = distanceInKilometers.toFixed(2);
    return Number.parseInt(formattedFloat, 10);
};

export {
    calculateDistance,
};
