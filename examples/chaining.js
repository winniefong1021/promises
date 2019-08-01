var Promise = require('bluebird');
var db = Promise.promisifyAll(require('../lib/db'));

var addNewUserToDatabaseAsync = function(user) {
  return db.findUserInDatabaseAsync(user)
    .then(function(existingUser) {
      if (existingUser) {
        throw new Error('User already exists!');
      } else {
        return user;
      }
    })
    .then(function(newUser) {
      return db.hashPasswordAsync(newUser);
    })
    .then(function(securedUser) {
      return db.createAndSaveUserAsync(securedUser);
    });
};

addNewUserToDatabaseAsync({ name: 'Dan', password: 'chickennuggets' })
  .then(function(savedUser) {
    console.log('All done!');
  })
  .catch(function(err) {
    console.log('Oops, caught an error: ', err.message);
  });
