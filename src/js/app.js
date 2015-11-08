var UI = require('ui');
var ajax = require('ajax');
var Vibe = require('ui/vibe');

var card = new UI.Card({
  body: 'Loading...'
});

card.show();
callApi();

card.on('click', function(e) {
  callApi();
});

function callApi() {
  ajax({
      url: 'https://say-something-smart.herokuapp.com',
      type: 'json'
    },
    function(data) {
      card.body(data.message);
      Vibe.vibrate('short');
    },
    function(error) {
      card.subtitle("Error!");
      card.body(error);
    }
  );
}
