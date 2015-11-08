var UI = require('ui');
var ajax = require('ajax');

// create a Card with title and subtitle
var card = new UI.Card({
  title: 'Say Something Smart!',
  subtitle: 'Loading...'
});

// display the Card
card.show();

// construct URL
var URL = 'https://say-something-smart.herokuapp.com';

// make the request
ajax({
    url: URL,
    type: 'json'
  },
  function(data) {
    console.log('Successfully fetched data!');

    // extract data
    var message = data.message;

    // show to user
    card.title('');
    card.subtitle("Say: ");
    card.body(message);
  },
  function(error) {
    console.log('Failed fetching weather data: ' + error);

    // show error to user
    card.subtitle("Error!");
    card.body(error);
  }
);
