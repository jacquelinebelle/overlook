import chai from 'chai'
const expect = chai.expect;
import Room from '../src/Room';
import bookingData from '../sampleData/booking'
import roomData from '../sampleData/room';

let mockDate = "27/08/2019";

describe('Room', function() {
  let room;
  beforeEach(function() {
    room = new Room(mockDate, bookingData, roomData);
  });

  it('should have default properties', function() {
    expect(room.date).to.equal(mockDate);
    expect(room.bookingData).to.deep.equal(bookingData);
    expect(room.roomsData).to.deep.equal(roomData);
  });

  it('should find available rooms given a date', function() {
    expect(room.findAvailableRooms(mockDate)).to.deep.equal([
      {
        "bedSize": "twin",
        "bidet": false,
        "costPerNight": 344.58,
        "numBeds": 2,
        "number": 1,
        "roomType": "residential suite"
      },
      {
        "bedSize": "twin",
        "bidet": true,
        "costPerNight": 462.7,
        "numBeds": 2,
        "number": 2,
        "roomType": "single room"
      },
      {
        "bedSize": "queen",
        "bidet": false,
        "costPerNight": 344.89,
        "numBeds": 1,
        "number": 3,
        "roomType": "single room"
      },
      {
        "bedSize": "twin",
        "bidet": false,
        "costPerNight": 192.48,
        "numBeds": 1,
        "number": 4,
        "roomType": "junior suite"
      },
      {
        "bedSize": "king",
        "bidet": false,
        "costPerNight": 269.65,
        "numBeds": 1,
        "number": 5,
        "roomType": "junior suite"
      },
      {
        "bedSize": "twin",
        "bidet": false,
        "costPerNight": 426.45,
        "numBeds": 1,
        "number": 6,
        "roomType": "residential suite"
      },
      {
        "bedSize": "twin",
        "bidet": true,
        "costPerNight": 441.66,
        "numBeds": 1,
        "number": 7,
        "roomType": "residential suite"
      },
      {
        "bedSize": "king",
        "bidet": false,
        "costPerNight": 254.9,
        "numBeds": 1,
        "number": 8,
        "roomType": "single room"
      },
      {
        "bedSize": "queen",
        "bidet": true,
        "costPerNight": 405.85,
        "numBeds": 2,
        "number": 9,
        "roomType": "single room"
      },
      {
        "bedSize": "king",
        "bidet": false,
        "costPerNight": 275.32,
        "numBeds": 1,
        "number": 10,
        "roomType": "junior suite"
      },
      {
        "bedSize": "king",
        "bidet": true,
        "costPerNight": 417.08,
        "numBeds": 1,
        "number": 13,
        "roomType": "residential suite"
      },
      {
        "bedSize": "full",
        "bidet": false,
        "costPerNight": 159.65,
        "numBeds": 1,
        "number": 15,
        "roomType": "residential suite"
      },
      {
        "bedSize": "king",
        "bidet": false,
        "costPerNight": 239.54,
        "numBeds": 2,
        "number": 16,
        "roomType": "junior suite"
      },
      {
        "bedSize": "queen",
        "bidet": false,
        "costPerNight": 259.06,
        "numBeds": 1,
        "number": 17,
        "roomType": "junior suite"
      },
      {
        "bedSize": "queen",
        "bidet": false,
        "costPerNight": 444.27,
        "numBeds": 1,
        "number": 18,
        "roomType": "suite",
      },
      {
        "bedSize": "queen",
        "bidet": true,
        "costPerNight": 229.67,
        "numBeds": 1,
        "number": 19,
        "roomType": "junior suite"
      },
      {
        "bedSize": "queen",
        "bidet": true,
        "costPerNight": 200.67,
        "numBeds": 1,
        "number": 20,
        "roomType": "junior suite"
      }])
  });

  it('should find available rooms given a type', function() {
    expect(room.findAvailableRoomType("single room")).to.deep.equal([
      {
        "bedSize": "twin",
        "bidet": true,
        "costPerNight": 462.7,
        "numBeds": 2,
        "number": 2,
        "roomType": "single room"
      },
      {
        "bedSize": "queen",
        "bidet": false,
        "costPerNight": 344.89,
        "numBeds": 1,
        "number": 3,
        "roomType": "single room"
      },
      {
        "bedSize": "king",
        "bidet": false,
        "costPerNight": 254.9,
        "numBeds": 1,
        "number": 8,
        "roomType": "single room"
      },
      {
        "bedSize": "queen",
        "bidet": true,
        "costPerNight": 405.85,
        "numBeds": 2,
        "number": 9,
        "roomType": "single room"
      }]
    );
  });

  it('should return available rooms that do not include a specified room type', function() {
    expect(room.findAvailableFallbacks("junior suite")).to.deep.equal([
      {
        "bedSize": "twin",
        "bidet": false,
        "costPerNight": 344.58,
        "numBeds": 2,
        "number": 1,
        "roomType": "residential suite"
      },
      {
        "bedSize": "twin",
        "bidet": true,
        "costPerNight": 462.7,
        "numBeds": 2,
        "number": 2,
        "roomType": "single room"
      },
      {
        "bedSize": "queen",
        "bidet": false,
        "costPerNight": 344.89,
        "numBeds": 1,
        "number": 3,
        "roomType": "single room"
      },
      {
        "bedSize": "twin",
        "bidet": false,
        "costPerNight": 426.45,
        "numBeds": 1,
        "number": 6,
        "roomType": "residential suite"
      },
      {
        "bedSize": "twin",
        "bidet": true,
        "costPerNight": 441.66,
        "numBeds": 1,
        "number": 7,
        "roomType": "residential suite"
      },
      {
        "bedSize": "king",
        "bidet": false,
        "costPerNight": 254.9,
        "numBeds": 1,
        "number": 8,
        "roomType": "single room"
      },
      {
        "bedSize": "queen",
        "bidet": true,
        "costPerNight": 405.85,
        "numBeds": 2,
        "number": 9,
        "roomType": "single room"
      },
      {
        "bedSize": "king",
        "bidet": true,
        "costPerNight": 417.08,
        "numBeds": 1,
        "number": 13,
        "roomType": "residential suite"
      },
      {
        "bedSize": "full",
        "bidet": false,
        "costPerNight": 159.65,
        "numBeds": 1,
        "number": 15,
        "roomType": "residential suite"
      },
      {
        "bedSize": "queen",
        "bidet": false,
        "costPerNight": 444.27,
        "numBeds": 1,
        "number": 18,
        "roomType": "suite"
      }]
    );
  });
})