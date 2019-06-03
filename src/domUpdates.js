import $ from 'jquery';

export default {
  displayDate(today) {
  $('#date').text(today.date);
  },

  displayRoomsAvailable(availability) {
    $('#roomsAvailable').text(availability);
  }
}