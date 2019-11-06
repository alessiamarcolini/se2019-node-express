/*
 * freq.js
 * Create a frequency table from an input file containing on word per line.
 */

// Loading the file system library
const fs = require('fs');

// File name from the common line params
const fileName = process.argv[2];

// Accessing the content of the file asynchnously

let data = fs.readFileSync(fileName, 'utf8');

var splitted = data.split('\n');
var frequencies = {}

for (let i = 0; i < splitted.length; i++){
    //console.log(splitted[i]);
    var tag = splitted[i];
    if (!(tag in frequencies)){
        frequencies[tag] = 1;
    }
    else{
        frequencies[tag] = frequencies[tag]+1;
    }
} 
console.log('Tag\tFrequency');

for (let tag in frequencies){
    console.log(tag + '\t' + frequencies[tag]);
}

