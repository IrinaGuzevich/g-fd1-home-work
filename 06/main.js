var array1 = [123, "string", true, {value: 321}, null],
	array2 = ["first", "second", "last"],
	result = [];

// write code here

(function () {
	var array1 = [123, "string", true, {value: 321}, null],
	array2 = ["first", "second", "last"],
	result = [];

	for (var index = 0; index < array1.length; index++) {
	result[result.length] = array1[index];
	}

	for (var index = - 0; index < array2.length; index++) {
	result[result.length] = array1[index];
	}

	console.log("result: ", result);     
})();



