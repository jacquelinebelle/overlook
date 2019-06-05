import chai from 'chai'
const expect = chai.expect;
import Booking from '../src/Booking';
import bookingData from '../sampleData/booking'

let mockDate = "27/08/2019";

describe('Booking', function() {
  let booking;
  beforeEach(function() {
    booking = new Booking(mockDate, bookingData);
  });

  it('should have default properties', function() {
    expect(booking.date).to.equal(mockDate);
    expect(booking.bookingData).to.equal(bookingData);
  });

  it('should create an object that tallies how many bookings there are for each date', function() {
    expect(booking.countBookingsForDates()).to.deep.equal({
      "21/08/2019": 3,
      "22/08/2019": 2,
      "23/08/2019": 2,
      "24/08/2019": 3,
      "25/08/2019": 4,
      "26/08/2019": 2,
      "27/08/2019": 3,
      "28/08/2019": 1,
      "28/09/2019": 1
      });
  });

  it('should find the day with the most bookings', function() {
    expect(booking.findPopularDate()).to.equal('25/08/2019');
  });

  it('should find the day with the least bookings', function() {
    expect(booking.findUnpopularDate()).to.equal('28/08/2019');
  });

  it('should find all bookings given a date', function() {
    expect(booking.findBookingsForDate(mockDate)).to.deep.equal([
      {
        "date": "27/08/2019",
        "roomNumber": 11,
        "userID": 11
      },
      {
        "date": "27/08/2019",
        "roomNumber": 12,
        "userID": 12
      },
      {
        "date": "27/08/2019",
        "roomNumber": 14,
        "userID": 14
      }
       ]);
  });
})