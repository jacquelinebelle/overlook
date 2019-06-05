import domUpdates from './domUpdates';

class Occupancy {
  constructor(date, bookingData, roomData) {
    this.date = date;
    this.bookingData = bookingData;
    this.roomData = roomData;
  }

  getAvailableRooms() {
    let availability = this.bookingData.bookings.flat(1).reduce((acc, booking) => {
      if (booking.date !== this.date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, []);
    domUpdates.displayRoomsAvailable(availability.length);
    return availability;
  }

  getBookedRooms() {
    return this.bookingData.bookings.reduce((acc, booking) => {
      if (booking.date === this.date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, []);
  }

  calculateOccupancyPercentage() {
    return this.getBookedRooms().length / this.roomData.rooms.length * 100;
  }
}

export default Occupancy;