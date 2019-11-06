/*
 * two-numbers.js
 * Implement two-numbers.js, verifying that the user provides the right number of parameters (2) and in the right format (numbers).
 */

// Loading the file system library
const fs = require('fs');

// Check number of params
if (process.argv.length == 2){
  console.log('Number of params OK!');
}
else{
  console.log('Number of params NOT OK!');
}

