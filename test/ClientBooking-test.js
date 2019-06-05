import chai from 'chai'
const expect = chai.expect;
import ClientBooking from '../src/ClientBooking';
import bookingData from '../sampleData/booking';

let mockDate = "27/08/2019";
let mockID = 11;

describe('ClientBooking', function() {
  let clientBooking;
  beforeEach(function() {
    clientBooking = new ClientBooking(mockDate, bookingData, mockID);
  });

  it('should have default properties', function() {
    expect(clientBooking.date).to.equal(mockDate);
    expect(clientBooking.bookingData).to.deep.equal(bookingData);
    expect(clientBooking.customerID).to.equal(11);
  });

  it('should find customer booking history', function() {
    expect(clientBooking.findBookingHistory()).to.deep.equal([
      {
        "date": "27/08/2019",
        "roomNumber": 11,
        "userID": 11
      },
      {
        "date": "28/08/2019",
        "roomNumber": 11,
        "userID": 11
      }
      ]);
  });  

  it('should find customer booking for today if any', function() {
    expect(clientBooking.findCurrentBooking()).to.deep.equal({"date": "27/08/2019", "roomNumber": 11, "userID": 11});
  });

  it('should create a new booking for a customer given a room number', function() {
    expect(clientBooking.bookingData.bookings[clientBooking.bookingData.bookings.length - 1]).to.deep.equal({"userID": 20, "date": "21/08/2019", "roomNumber": 20});
    clientBooking.createBooking(88)
    expect(clientBooking.bookingData.bookings[clientBooking.bookingData.bookings.length - 1]).to.deep.equal({"userID": 11, "date": "27/08/2019", "roomNumber": 88});
    clientBooking.bookingData.bookings.pop()
  });
})