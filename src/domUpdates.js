import $ from 'jquery';
// import Hotel from './Hotel';

export default {
  displayDate(today) {
  $('#date').text(today.date);
  },

  displayRoomsAvailable(availability) {
    $('#roomsAvailable').text(availability);
  },

  displayHotelEarnings(earnings) {
    $('#earnings').text(earnings.calculateEarnings().toFixed(2));
  },

  displayOccupancyPercentage(occupancy) {
    $('#occupiedRooms').text(occupancy.calculateOccupancyPercentage());
  },

  selectCustomer(customer) {
    let customerInfo = Object.values(customer);
    $('.customer-id').text(customerInfo[0]);
    $('.customer-name').text(customerInfo[1]);
    $('.customer-inputs').val('');
  },

  displayCustomerSearchResults(customer) {
    if (customer) {
      $('.customer-forms').addClass('hidden');
      $('.search-results').removeClass('hidden');
      $('#select-customer-btn').removeClass('hidden');
    } else {
      $('.customer-forms').addClass('hidden');
      $('.customer-not-found').removeClass('hidden');
      $('#error-btn').removeClass('hidden');
    }
  },

  displayForms() {
    $('.customer-forms').removeClass('hidden');
    $('.search-results').addClass('hidden');
    $('#select-customer-btn').addClass('hidden');
    $('#error-btn').addClass('hidden');
    $('.customer-not-found').addClass('hidden');
  },

  displaySelectedCustomer() {
    $('.selected-customer').removeClass('hidden');
  },

  displayAllOrders(date, orders) {
    $('.order').remove();
    orders.getOrdersForDate(date).forEach(order => {
      $('.room-service-orders').append(`<p class="order">${order.date}: $${order.totalCost.toFixed(2)}</p>`)
    });
  },

  hideGenericInfo() {
    // $('.customer-order-history').removeClass('hidden');
    $('.order-date').addClass('hidden');
    $('.room-service-orders').html('');
    $('.general-booking').addClass('hidden');
    $('.customer-booking-history').removeClass('hidden');
    // $('#rooms div').html('');
  },

  displayCustomerOrderHistory(orderHistory) {
    console.log(orderHistory.checkForCustomerHistory())
    console.log(orderHistory.getCustomerOrderHistory())

    $('.order').remove();
    $('.customer-order-history').append('<h6 class="order">Customer order history:</h6>');
    if (orderHistory.checkForCustomerHistory()) {
      $('.customer-order-history').append(`<h6 class="order">Total spent on room service today:</h6><p class="order">$${orderHistory.getFoodMoneyForDate()}</p>`);
      $('.customer-order-history').append(`<h6 class="order">Total spent on room service for all time:</h6><p class="order">$${orderHistory.getFoodMoney()}</p>`);
      orderHistory.getCustomerOrderHistory().forEach(order => {
        $('.customer-order-history').append(`<p class="order">${order.date}: $${order.totalCost.toFixed(2)}</p>`);
      });
    } else {
      $('.customer-order-history').append('<p class="order">Customer seems to not have ordered any room service.</p>');
    }
  },

  displayPopularityInfo(booking) {
    $('.general-booking-info').append(`<p class="generic-booking">${booking.findPopularDate()} has the least availability.</p>`);
    $('.general-booking-info').append(`<p class="generic-booking">${booking.findUnpopularDate()} has the most availability.</p>`);
  },

  displayAvailableRooms(date, room) {
    $('.general-booking-info').append(`<h6 class="generic-booking">The following rooms are available:</h6>`);
    room.findAvailableRooms(date).forEach(room => {
      $('.general-booking-info').append(`<p class="generic-booking">Room ${room.number}</p>`);
    });
  },

  // hideRooms() {
  //   $('#rooms div').html('');
  // },

  displayCustomerBookingHistory(clientBooking) {
    // $('.general-booking-info').addClass('hidden');
    // $('.customer-booking-history').removeClass('hidden');
    $('.customer-booking-info').append(`<h6 class="current-booking">Booking for today:</h6>`)
    if (clientBooking.findCurrentBooking()) {
      $('.customer-booking-info').append(`<p class="current-booking current-booking-info">${clientBooking.findCurrentBooking().date}: Room ${clientBooking.findCurrentBooking().roomNumber}</p>`)
      $('#add-service-btn').removeClass('hidden');
    } else {
      $('.customer-booking-info').append(`<p class="current-booking">No booking for today.</p>`)
      $('#book-room-btn').removeClass('hidden');
    }
    if (clientBooking.findBookingHistory().length > 0) {
      $('.customer-booking-history').append(`<h6 class="booking-history">Past bookings:</h6>`)
      clientBooking.findBookingHistory().forEach(booking => {
        $('.customer-booking-history').append(`<p class="booking-history">${booking.date}: Room ${booking.roomNumber}</p>`)
      })
    } else {

      $('.customer-booking-history').append(`<p class="booking-history">No booking history on file.</p>`)
    }
  },

  displayBookingProcess(room) {
    $('.customer-booking-history, .customer-booking-info, #book-room-btn').addClass('hidden');
    $('.dropdown').removeClass('hidden');
  },

  displayAvailableRoomsByType(room, type) {
    if (room.findAvailableRoomType(type)) {
      room.findAvailableRoomType(type).forEach(room => {
        $('.filtered-rooms').append(`<div class="room-info"><h6>Room <span id="room-number">${room.number}</span></h6>
          <p>Type: ${room.roomType}</p>
          <p>Number of beds: ${room.numBeds}</p>
          <p>Bed size: ${room.bedSize}</p>
          <p>Bidet: ${room.bidet}</p></div>`)
      })
    } else {
      $('.filtered-rooms').append(`<h6>We currently do not have any ${type} rooms available. Please browse our other options.</h6>`)
      room.findAvailableFallbacks(type).forEach(room => {
        $('.filtered-rooms').append(`<div class="room-info"><h6>Room <span id="room-number">${room.number}</span></h6>
          <p>Type: ${room.roomType}</p>
          <p>Number of beds: ${room.numBeds}</p>
          <p>Bed size: ${room.bedSize}</p>
          <p>Bidet: ${room.bidet}</p></div>`)
      })
    }
  },

  displayBookRoom(e) {
    if ($(e.target).is('div')) {
      $(e.target).after('<button id="cancel-btn">Cancel</button>')
      $(e.target).after('<button id="added-book-room-btn">Book room?</button>')
    } else {
      $(e.target).parent().after('<button id="cancel-btn">Cancel</button>')
      $(e.target).parent().after('<button id="added-book-room-btn">Book room?</button>')
    }
  },

  hideBookRoom() {
    $('#added-book-room-btn').addClass('hidden');
    $('#cancel-btn').addClass('hidden');
  },

  hideBookingProcess() {
    $('.current-booking, .booking-history').remove();
    // $('.booking-history').remove();
    $('.customer-booking-history, .customer-booking-info').removeClass('hidden');
    $('.dropdown').addClass('hidden');
    $('.room-info').remove();
    this.hideBookRoom()
  },

  displayMenu(roomService) {
    $('.current-booking, .booking-history, #add-service-btn').addClass('hidden')
    $('.menu').removeClass('hidden');
    $('.menu').append('<h6 class="food">Menu for Today</h6>')
    Object.keys(roomService.getMenu()).forEach(foodName => {
      $('.menu').append(`<p class="food">${foodName} - ${roomService.getMenu()[foodName]}</p>`);
    });
  },

  hideMenu(food) {
    $('.current-booking, .booking-history').removeClass('hidden')
    $('.food').remove();
    $('.current-booking-info').after(`<p>Enjoy your ${food.split(' - ')[0]}.</p>`)
  }
}