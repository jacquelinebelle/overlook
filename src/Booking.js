import Today from './Today';
import domUpdates from './domUpdates';

class Booking extends Today {
  constructor(date, bookingData) {
    super(date);
    this.bookingData = bookingData;
  }

  countBookingsForDates() {
    return this.bookingData.bookings.reduce((acc, booking) => {
      if (!acc.hasOwnProperty(booking.date)) {
        acc[booking.date] = 1;
      } else {
        acc[booking.date]++;
      }
      return acc;
    }, {});
  }

  findPopularDate() {
    var bigDay = Math.max(...Object.values(this.countBookingsForDates()));
    return Object.keys(this.countBookingsForDates()).find(date => this.countBookingsForDates()[date] === bigDay);
  }

  findUnpopularDate() {
    var smallDay = Math.min(...Object.values(this.countBookingsForDates()));
    return Object.keys(this.countBookingsForDates()).find(date => this.countBookingsForDates()[date] === smallDay);
  }

  findBookingsForDate(date) {
    return this.bookingData.bookings.reduce((acc, booking) => {
      if (booking.date === date) {
        acc.push(booking);
      }
      return acc;
    }, []);
  }
}

export default Booking;