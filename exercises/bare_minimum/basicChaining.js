/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseFunc = require('./promisification.js');

fs = Promise.promisifyAll(fs);
var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // return fs.readFile(readFilePath, 'utf-8', (err, file) => {
  // .then( get first line of file  = user ) {
  // return promiseFunc.getGitHubProfileAsync(user, cb)
  // }
  // .then () {
  // return fs.writeFile(writeFilePath, data, cb)
  //}
  // });
  return fs.readFileAsync(readFilePath, 'utf-8', (err, file) => {
    console.log(file);
  });
  // need to import pluckFirstLineFromFileAsync 
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};


// Promise.promisifyAll(db)

// var addNewUserToDatabaseAsync = function(user) {
//   // The outermost `return` lets us continue the chain
//   // after an invocation of `addNewUserToDatabaseAsync`
//   return db.findUserInDatabaseAsync(user)
//     .then(function(existingUser) {
//       if (existingUser) {
//         throw new Error('User already exists!') // Head straight to `catch`. Do not pass Go, do not collect $200
//       } else {
//         return user; // Return a synchronous value
//       }
//     })
//     .then(function(newUser) {
//       return db.hashPasswordAsync(newUser) // Return a promise
//     })
//     .then(function(securedUser) {
//       return db.createAndSaveUserAsync(securedUser) // Return another promise
//     })
// }