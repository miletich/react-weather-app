const axios = require('axios');

const APIXU_URL = 'https://api.apixu.com/v1/current.json?key=874fcf641633493892b53718172401';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = APIXU_URL + '&q=' + encodedLocation;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.error) {
        throw new Error(res.data.error.message);
      } else {
        return res.data.current.temp_c;
      }
    }, function (res) {
      throw new Error(res.data.error.message);
    });
  }
}
