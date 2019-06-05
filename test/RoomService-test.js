import chai from 'chai'
const expect = chai.expect;
import RoomService from '../src/RoomService';
import roomServiceData from '../sampleData/roomService';

let mockDate = "27/08/2019";

describe('RoomService', function() {
  let roomService;
  beforeEach(function() {
    roomService = new RoomService(mockDate, roomServiceData);
  });

it('should have default properties', function() {
    expect(roomService.date).to.equal(mockDate);
    expect(roomService.roomServiceData).to.equal(roomServiceData);
  });

it('should return all orders given a date', function() {
    expect(roomService.getOrdersForDate("27/08/2019")).to.deep.equal([{
         "date": "27/08/2019",
         "food": "Intelligent Frozen Sandwich",
         "totalCost": 21.6,
         "userID": 11
       },
       {
         "date": "27/08/2019",
         "food": "Intelligent Metal Sandwich",
         "totalCost": 23.02,
         "userID": 12
       },
       {
         "date": "27/08/2019",
         "food": "Handmade Steel Sandwich",
         "totalCost": 11.16,
         "userID": 14
       }
    ]);
  });

it('should create an object with food names for keys and prices for values', function() {
    expect(roomService.getMenu()).to.deep.equal({
      "Ergonomic Fresh Sandwich": 19.16,
      "Generic Plastic Sandwich": 9.48,
      "Generic Soft Sandwich": 24.24,
      "Good Food": 100.50,
      "Handmade Cotton Sandwich": 17.39,
      "Handmade Frozen Sandwich": 22.69,
      "Handmade Steel Sandwich": 11.16,
      "Incredible Fresh Sandwich": 8.20,
      "Intelligent Frozen Sandwich": 21.60,
      "Intelligent Metal Sandwich": 7.57,
      "Refined Granite Sandwich": 8.19,
      "Rustic Frozen Sandwich": 17.26,
      "Rustic Soft Sandwich": 18.63,
      "Rustic Wooden Sandwich": 5.86,
      "Sleek Concrete Sandwich": 15.97,
      "Sleek Metal Sandwich": 9.38,
      "Tasty Fresh Sandwich": 13.07,
      "Tasty Granite Sandwich": 5.70,
      "Unbranded Plastic Sandwich": 9.60,
      "Unbranded Wooden Sandwich": 8.70});
  });
})