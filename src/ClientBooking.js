import Booking from './Booking';

class ClientBooking extends Booking {
  constructor(date, bookingData, customerId) {
    super(date, bookingData);
    this.customerID = customerId;
  }

  findBookingHistory() {
    return this.bookingData.bookings.filter(booking => (booking.userID === this.customerID))
  }

  findCurrentBooking() {
    return this.findBookingHistory().find(booking => (booking.date === this.date));
  }

  createBooking(number) {
    return this.bookingData.bookings.push({userID: this.customerID, date: this.date, roomNumber: number});
  }
}

export default ClientBooking;