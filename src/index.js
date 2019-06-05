import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates';
import Today from './Today';
import Booking from './Booking';
import Room from './Room';
import RoomService from './RoomService';
import Earnings from './Earnings';
import Occupancy from './Occupancy';
import Customer from './Customer';
import OrderHistory from './OrderHistory';
import ClientBooking from './ClientBooking';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

let customer;
let customerData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    customerData = dataset;
  });

let room;
let roomData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    roomData = dataset;
  });

let booking;
let bookingData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    bookingData = dataset;
  });

let roomService;
let roomServiceData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    roomServiceData = dataset;
  });

  let today;
  let occupancy;
  let earnings;
  let orderHistory;
  let clientBooking;

$('#welcome-btn').click(function() {
  $('.welcome').addClass('hidden');
  $('.dim').addClass('hidden');
  $('main, header').removeClass('hidden')
  today = new Today();
  today.getToday();
  customer = new Customer(today.date, customerData);
  booking = new Booking(today.date, bookingData);
  room = new Room(today.date, bookingData, roomData);
  roomService = new RoomService(today.date, roomServiceData);
  occupancy = new Occupancy(today.date, bookingData, roomData);
  earnings = new Earnings(today.date, room, roomService, booking, occupancy);
  occupancy.getAvailableRooms();
  domUpdates.displayDate(today);
  domUpdates.displayHotelEarnings(earnings);
  domUpdates.displayOccupancyPercentage(occupancy);
  domUpdates.displayAllOrders(today.date, roomService);
  domUpdates.displayPopularityInfo(booking);
});

$('.tab').click(function() {
  $('.tab').removeClass('shown');
  $('.tab-content').removeClass('shown');
  $('.tab-content').addClass('hidden');
  $(this).addClass('shown');
  $(`#${$(this).attr('data-tab')}`).removeClass('hidden');
  $(`#${$(this).attr('data-tab')}`).addClass('shown');
});

$('#search-customer-btn').click(function(e) {
  e.preventDefault();
  customer.findCustomer($('#search-customer-input').val())
});

$('#select-customer-btn, #create-btn').click(function() {
  domUpdates.displayForms();
  domUpdates.displaySelectedCustomer();
  orderHistory = new OrderHistory(today.date, roomServiceData, parseInt($('.customer-id').text()));
  clientBooking = new ClientBooking(today.date, bookingData, parseInt($('.customer-id').text()) || customerData.users.map(user => user.id).pop() + 1);
  domUpdates.hideGenericInfo()
  domUpdates.displayCustomerOrderHistory(orderHistory);
  domUpdates.displayCustomerBookingHistory(clientBooking);
});

$('#error-btn').click(function() {
  domUpdates.hideForms();
});

$('#create-btn').click(function(e) {
  e.preventDefault();
  customer.createCustomer($('#create-input').val());
});

$('#choose-order-date-btn').click(function() {
  let dateInput = $('#choose-order-date').val().split('-').reverse().join('/');
  domUpdates.displayAllOrders(dateInput, roomService);
});

$('#choose-booking-date-btn').click(function() {
  let dateInput = $('#choose-booking-date').val().split('-').reverse().join('/');
  domUpdates.displayAvailableRooms(dateInput, room);
});

$('#book-room-btn').click(function() {
  domUpdates.displayBookingProcess(room)
});

$('.room-type').click(function(e) {
  domUpdates.displayAvailableRoomsByType(room, $(e.target).text())
});

$(document).on('click', '.room-info', function(e) {
  domUpdates.displayBookRoom(e);
});

$(document).on('click', '#added-book-room-btn', function(e) {
  clientBooking.createBooking(parseInt($(e.target).prev().first().text().split(' ')[1]))
  domUpdates.hideBookingProcess();
  domUpdates.displayCustomerBookingHistory(clientBooking);
});

$(document).on('click', '#cancel-btn', function() {
  domUpdates.hideBookRoom();
});

$('#add-service-btn').click(function(e) {
  domUpdates.displayMenu(roomService);
});

$(document).on('click', '.menu p', function(e) {
  console.log($(e.target).text())
  orderHistory.addOrder($(e.target).text())
  domUpdates.hideMenu($(e.target).text());
  domUpdates.displayCustomerOrderHistory(orderHistory);
});
