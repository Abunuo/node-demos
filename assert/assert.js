var assert = require('assert')
var obj1 = {
  a: {
    b: 1
  }
}, obj2 = {
  a: {
    b:3
  }
}
console.log(assert.deepEqual(obj1, obj2));  //不通过， 通过不抛出东西
