import Today from './Today';

class Earnings extends Today {
  constructor(date, room, roomService, booking, occupancy) {
    super(date);
    this.room = room;
    this.roomService = roomService;
    this.booking = booking;
    this.occupancy = occupancy;
  }

  calculateRoomRentalMoney() {
    return this.occupancy.getBookedRooms().reduce((acc, roomNum) => {
      this.room.roomsData.rooms.forEach(room => {
        if (roomNum === room.number) {
          acc += room.costPerNight;
        }
      });
      return acc;
    }, 0);
  }

  calculateRoomServiceMoney() {
    return this.roomService.roomServiceData.roomServices.reduce((acc, order) => {
      if (order.date === this.date) {
        acc += order.totalCost;
      }
      return acc;
    }, 0);
  }

  calculateEarnings() {
    return this.calculateRoomRentalMoney() + this.calculateRoomServiceMoney();
  }
}

export default Earnings;