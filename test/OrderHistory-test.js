import chai from 'chai'
const expect = chai.expect;
import OrderHistory from '../src/OrderHistory';
import roomServiceData from '../sampleData/roomService';

let mockDate = "27/08/2019";
let mockID = 11;

describe('OrderHistory', function() {
  let orderHistory;
  beforeEach(function() {
    orderHistory = new OrderHistory(mockDate, roomServiceData, mockID);
  });

  it('should have default properties', function() {
    expect(orderHistory.roomServiceData).to.deep.equal(roomServiceData);
    expect(orderHistory.date).to.equal(mockDate);
    expect(orderHistory.customerId).to.equal(mockID);
  });

  it('should check if customer has ordered food', function() {
    expect(orderHistory.checkForCustomerHistory()).to.equal(true);
  });

  it('should find a customer order history', function() {
    expect(orderHistory.getCustomerOrderHistory()).to.deep.equal([{
        "date": "27/08/2019",
        "food": "Intelligent Frozen Sandwich",
        "totalCost": 21.6,
        "userID": 11,
      }, {
      "userID": 11,
      "date": "28/08/2019",
      "food": "Good Food",
      "totalCost": 100.50
    }]);
  });

  it('should calculate total spent on food for date', function() {
    expect(orderHistory.getFoodMoneyForDate()).to.equal(21.60);
  });

  it('should calculate total spent on food', function() {
    expect(orderHistory.getFoodMoney()).to.equal(122.10);
  });

  it('should add new orders', function() {
    expect(orderHistory.roomServiceData.roomServices[orderHistory.roomServiceData.roomServices.length - 1]).to.deep.equal({
    userID: 20,
    date: "21/08/2019",
    food: "Rustic Frozen Sandwich",
    totalCost: 17.26});
    orderHistory.addOrder('Bread - 9.60');
    expect(orderHistory.roomServiceData.roomServices[orderHistory.roomServiceData.roomServices.length - 1]).to.deep.equal({"userID": 11, "date": "27/08/2019", "food": "Bread", totalCost: 9.60});
    orderHistory.roomServiceData.roomServices.pop();
  });
})