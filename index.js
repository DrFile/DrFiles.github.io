document.addEventListener('DOMContentLoaded', function () {
  // Get the current day (0-6, where 0 is Sunday and 6 is Saturday)
  var currentDay = new Date().getDay();

  // Define an array of logo URLs for each day of the week
  var logos = [
    '..dr.icon/letter-d.png',
    'logo-monday.png',
    'logo-tuesday.png',
    'logo-wednesday.png',
    'logo-thursday.png',
    'logo-friday.png',
    'logo-saturday.png'
  ];

  // Set the logo based on the current day
  var dailyLogo = document.getElementById('dailyLogo');
  dailyLogo.src = logos[currentDay];
  dailyLogo.alt = 'GitHub Logo';
});