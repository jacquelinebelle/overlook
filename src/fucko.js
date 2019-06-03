const customerData = async () => {
    let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users');
    let data = await response.json();
    return data;
}

const roomServiceData = async () => {
    let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices');
    let data = await response.json();
    return data;
}

const bookingData = async () => {
    let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings');
    let data = await response.json();
    return data;
}

const roomData = async () => {
    let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms');
    let data = await response.json();
    return data;
}