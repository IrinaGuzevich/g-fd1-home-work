'use strict';

var array1 = [1, 2, 3, 4, 5];
var array2 = [9, 7, 3];

var result1 = reduce1(array1);
var result2 = reduce2(array2);

console.log('result1:', result1);
// expected result: 15

console.log('result2:', result2);
// expected result: 19

function reduce1(array) {
var result1 = array1.reduce(function(sum1, current1) {
	return sum1 + current1;;
}, 0);
    return result1;
}

function reduce2(array) {
var result2 = array2.reduce(function(sum2, current2) {
	return sum2 + current2;
}, 0);
    return result2;
}