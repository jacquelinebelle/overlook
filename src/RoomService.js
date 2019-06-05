import Today from './Today';

class RoomService extends Today {
  constructor(date, roomServiceData) {
    super(date);
    this.roomServiceData = roomServiceData;
  }

  getOrdersForDate(date) {
    return this.roomServiceData.roomServices.filter(order => order.date === date);
  }

  getMenu() {
    return this.roomServiceData.roomServices.reduce((acc, option) => {
      if (!acc[option.food]) {
        acc[option.food] = parseFloat(option.totalCost.toFixed(2));
      }
      return acc;
    }, {})
  }
}

export default RoomService;