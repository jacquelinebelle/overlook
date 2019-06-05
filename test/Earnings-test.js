import chai from 'chai'
const expect = chai.expect;
import Earnings from '../src/Earnings';
import Room from '../src/Room';
import RoomService from '../src/RoomService';
import Booking from '../src/Booking';
import bookingData from '../sampleData/booking';
import customerData from '../sampleData/customer';
import roomData from '../sampleData/room';
import roomServiceData from '../sampleData/roomService';

let mockDate = "27/08/2019";
let mockRoom = new Room(mockDate, roomData);
let mockService = new RoomService(mockDate, roomServiceData);
let mockBooking = new Booking(mockDate, bookingData);

describe('Earnings', function() {
  let Earnings;
  beforeEach(function() {
    earnings = new Earnings(mockDate, mockRoom, mockService, mockBooking);
  });

  it('should have default properties', function() {
    expect(earnings.room).to.equal(mockRoom);
    expect(earnings.service).to.equal(mockService);
    expect(earnings.booking).to.equal(mockBooking);
  });

  it('should calculate money earned from renting rooms', function() {
    expect(earnings.calculateRoomRentalMoney().to.equal(0));
  });

  it('should calculate money earned from room service', function() {
    expect(earnings.calculateRoomServiceMoney().to.equal(0));
  });

  it('should calculate total money earned', function() {
    expect(earnings.calculateEarnings().to.equal(0));
  });
});