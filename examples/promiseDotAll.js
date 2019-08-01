var Promise = require('bluebird');
var asyncLib = require('../lib/asyncLib.js');

Promise.all([
  asyncLib.getValueA(),
  asyncLib.getValueB(),
  asyncLib.getValueC(),
  asyncLib.getValueD()
])
.then(asyncLib.logResolvedValues)
.then(asyncLib.filterValuesFromCollection)
.then(asyncLib.doMoreAsyncWorkWithFilteredValues)
.catch(console.log.bind(console));