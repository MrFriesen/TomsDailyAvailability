const toggleSwitch = document.querySelector('.toggle-switch');
const body = document.querySelector('body');
const bookingStatus = document.querySelector('#booking-status');
const jobOffers = document.querySelector('#job-offers');

// Check if switch is on or off in local storage
if (localStorage.getItem('switch-enabled')) {
  body.classList.add('switch-on');
  toggleSwitch.checked = true;
  bookingStatus.textContent = 'Tom is Available for Booking';
  bookingStatus.style.backgroundColor = '#4CAF50';
  jobOffers.textContent = 'Text Job Offers to 519-465-9115';
} else {
  body.classList.add('switch-off');
  bookingStatus.textContent = 'Tom is Unavailable for Booking';
  bookingStatus.style.backgroundColor = '#FF5733';
}

// Listen for the toggle switch change event
toggleSwitch.addEventListener('change', function() {
  // Only toggle the switch class on the body element if the toggle switch is enabled
