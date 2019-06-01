import $ from 'jquery';
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// let customerData;
// fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (dataset) {
//     userData = dataset;
//   });

// let roomData;
// fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (dataset) {
//     roomData = dataset.data;
//   });

// let bookingData;
// fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (dataset) {
//     bookingData = dataset.data;
//   });

// let roomServiceData;
// fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (dataset) {
//     roomServiceData = dataset.data;
//   });

$('.tab').click(function() {
  $('.tab').removeClass('shown');
  $('.tab-content').removeClass('shown');
  $('.tab-content').addClass('hidden');


  $(this).addClass('shown');
  $(`#${$(this).attr('data-tab')}`).removeClass('hidden');
  $(`#${$(this).attr('data-tab')}`).addClass('shown');
});




