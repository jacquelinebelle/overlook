import Booking from './Booking';

class Room extends Booking {
  constructor(date, bookingData, roomsData) {
    super(date, bookingData);
    this.roomsData = roomsData;
  }

  findAvailableRooms(date) {
    let bookedRooms = this.bookingData.bookings.filter(booking => booking.date === date).map(booking => booking.roomNumber);
    return this.roomsData.rooms.filter(room => !bookedRooms.includes(room.number));
  }

  findAvailableRoomType(roomType) {
    return this.findAvailableRooms(this.date).filter(room => room.roomType === roomType);
  }

  findAvailableFallbacks(roomType) {
    return this.findAvailableRooms(this.date).filter(room => room.roomType !== roomType);
  }
}

export default Room;