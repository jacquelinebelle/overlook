import RoomService from './RoomService';

class OrderHistory extends RoomService {
  constructor(date, roomServiceData, customerId) {
    super(date, roomServiceData);
    this.customerId = customerId;
  }

  checkForCustomerHistory() {
    return this.roomServiceData.roomServices.map(order => order.userID).includes(this.customerId);
  }

  getCustomerOrderHistory() {
    return this.roomServiceData.roomServices.filter(order => order.userID === this.customerId);
  }

  getFoodMoneyForDate() {
    let orders = this.getCustomerOrderHistory().filter(order => order.date === this.date);
    return parseFloat(orders.reduce((acc, order) => {
      return acc += order.totalCost
    }, 0).toFixed(2))
  }

  getFoodMoney() {
    return parseFloat(this.getCustomerOrderHistory().reduce((acc, order) => {
      return acc += order.totalCost
    }, 0).toFixed(2))
  }

  addOrder(foodChoice) {
    let foodChoiceSplit = foodChoice.split(' - ');
    return this.roomServiceData.roomServices.push({userID: this.customerId, date: this.date, food: foodChoiceSplit[0], totalCost: parseFloat(foodChoiceSplit[1])});
  }
}

export default OrderHistory;