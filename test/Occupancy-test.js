import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Occupancy from '../src/Occupancy.js';
import bookingData from '../sampleData/booking';
import roomData from '../sampleData/room';
import domUpdates from '../src/domUpdates';
chai.spy.on(domUpdates, 'displayRoomsAvailable', () => true);

let mockDate = "27/08/2019";

describe('Occupancy', function() {
  let occupancy;
  beforeEach(function() {
    occupancy = new Occupancy(mockDate, bookingData, roomData);
  });

  it('should have default properties', function() {
    expect(occupancy.bookingData).to.equal(bookingData);
  });

  it('should count how many rooms are available', function() {
    expect(occupancy.getAvailableRooms()).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16,
         17, 18, 19, 20]);
  });

  it('should count how many rooms are booked', function() {
    expect(occupancy.getBookedRooms()).to.deep.equal([ 11, 12, 14 ]);
  });

  it('should calculate the percentage of rooms that are booked', function() {
    expect(occupancy.calculateOccupancyPercentage()).to.equal(15);
  });
})