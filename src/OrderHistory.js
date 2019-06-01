class OrderHistory extends RoomService {
  constructor(roomServiceData, date, customerId) {
    super(roomServiceData, date);
    this.customerId = customerId;
  }

  
}

export default OrderHistory;