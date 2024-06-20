console.log("Hello World from nodemon");

console.log("Welcome to CBC!");

const {format} = require('date-fns')

console.log(format(new Date(), 'yyyy-MM-dd \t HH:mm:ss'));

//const {v4:uuid} = require('uuid');
//console.log(uuid());

//const {v6} = require ('uuid');
//console.log(uuid());

//const uuid= require('uuid');
//console.log(uuid.v4());

const {version} = require("os");
console.log(version());