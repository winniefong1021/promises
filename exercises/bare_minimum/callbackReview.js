/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var $ = require('jquery');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      cb(err);
    } else {
      var dataArr = data.split('\n');
      cb(null, dataArr[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
