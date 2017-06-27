var util = require('util');
console.log(new Date());
console.log(typeof new Date());
console.log(util.isDate(new Date()));
console.log('------------');
  // true
console.log(Date());
console.log(typeof Date());
console.log(util.isDate(Date()));
console.log('------------');
  // false (without 'new' returns a String)
console.log(util.isDate({}));
