import Today from './Today';
import domUpdates from './domUpdates';

class Booking extends Today {
  constructor(date, bookingData) {
    super(date);
    this.bookingData = bookingData;
  }

  getAvailableRooms() {
    let availability = this.bookingData.bookings.flat(1).reduce((acc, booking) => {
      if (booking.date !== this.date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, []);
    domUpdates.displayRoomsAvailable(availability.length)
  }

  getTodaysEarnings() {

  }
}

export default Booking;