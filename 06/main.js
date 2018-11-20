var array1 = [123, "string", true, {value: 321}, null],
	array2 = ["first", "second", "last"],
	result = [];

// write code here

'use strict'

{let array1 = [123, "string", true, {value: 321}, null];
let array2 = ["first", "second", "last"];
let result = [];}

Array.prototype.push.apply(array1,array2);
result = JSON.parse(JSON.stringify(array1));

console.log("result: ", result);     