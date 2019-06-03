class ClientBooking extends Booking {
  constructor(date, bookingData, customerId) {
    super(date, bookingData);
    this.customerID = customerId;
  }

  checkCustomerBooking() {

  }
}

export default ClientBooking;