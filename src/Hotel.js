import Today from './Today';

class Hotel extends Today {
  constructor(date, room, roomService) {
    super(date);
    this.room = room;
    this.roomService = roomService;
  }
  calculateHotelMoney() {
    return this.room.calculateRoomRentalMoney() + this.roomService.calculateRoomServiceMoney();
  }
}

export default Hotel;