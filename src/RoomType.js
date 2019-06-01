class RoomType extends Booking {
  constructor(bookingsData, date, roomsData) {
    super(bookingsData, date);
    this.roomsData = roomsData;
  }
}

export default RoomType;