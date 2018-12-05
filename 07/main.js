'use strict';

var array1 = [1, 2, 3, 4, 5];
var array2 = [9, 7, 3];

var result = reduce(array1);
console.log('result1:', result);
// expected result: 15

var result = reduce(array2);
console.log('result2:', result);
// expected result: 19

function reduce(array, result) {
    var result = array.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return result;
}
