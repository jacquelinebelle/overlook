class RoomType extends Booking {
  constructor(date, bookingsData, roomsData) {
    super(date, bookingsData);
    this.roomsData = roomsData;
  }
}

export default RoomType;