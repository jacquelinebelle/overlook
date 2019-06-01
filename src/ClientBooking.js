class ClientBooking extends Booking {
  constructor(bookingData, date, customerId) {
    super(bookingData, date);
    this.customerID = customerId;
  }

  checkCustomerBooking() {

  }
}

export default ClientBooking;