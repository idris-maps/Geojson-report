var report = require('./lib/report')
var data = require() // <-- path to geojson file

/* 
	// EXAMPLE 1: geometry types

report(data, 'key highway', function(response) {
	console.log(response)
})
*/

/* 
	// EXAMPLE 2: list of properties

report(data, 'props', function(response) {
	console.log(response)
})
*/

/* 
	// EXAMPLE 3: one property 
	// Replace 'highway' with whatever property you want to look at

report(data, 'key highway', function(response) {
	console.log(response)
})
*/

