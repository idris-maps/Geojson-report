##Geojson-report

For quick analysis of geojson files. 

###How to use



####Download this repository

```
	
```



####Download dependencies

There is only one: [underscore](http://underscorejs.org/).

```
	npm install	
```



####Open run.js

Require **'lib/report'** and your geojson. Choose the type of report.

It works like this:

```
report(<collection>, <query>, callback)	
```

```<collection>``` is the 'FeatureCollection' of your geojson file

```<query>``` is the kind of report (geo, props or key) you are looking for (see below)

The result is a callback so you can choose if you want to save it to a file or just log it



####Examples

These are examples from an OSM file converted with [osmtogeojson](https://github.com/tyrasd/osmtogeojson)



#####For a list of geometry types:

```
report(collection, 'geo', function(response) {
	console.log(response)
})
```

returns:

```
{ nb: 4,
  types: 
   [ { type: 'Polygon', count: 10348 },
     { type: 'MultiPolygon', count: 3 },
     { type: 'LineString', count: 8059 },
     { type: 'Point', count: 11577 } ] }
```

```nb``` is the number of geometry types in your document

Then you have the number of features by type



#####For a list of all the properties:

```
report(collection, 'props', function(response) {
	console.log(response)
})
```

returns

```
[ '3dr:type',
  '3dr_dormer',
  '3dr_type',
  'CEMT',
  'FIXME',
  'Geek_Quotient',
  'TMC:cid_58:tabcd_1:Class',
  'TMC:cid_58:tabcd_1:Direction',
  'TMC:cid_58:tabcd_1:LCLversion',
  'TMC:cid_58:tabcd_1:LocationCode',
  'TMC:cid_58:tabcd_1:NextLocationCode',
  'TMC:cid_58:tabcd_1:PrevLocationCode',
  '^roof:shape',
  'abandoned:railway',
  'access',
  'access:condition',
  'access:conditional',
  'access:customer',
  'access:lanes',
  'access:lanes:backward',
  'access:lanes:forward',
  'access:vehicle',

	[...]

  'wifi:limit',
  'wikidata',
  'wikimedia_commons',
  'wikipedia',
  'wikipedia_1',
  'wires',
  'workrules',
  'xmas:day_date',
  'xmas:feature',
  'xmas:lastcheck',
  'xmas:location',
  'xmas:name',
  'xmas:note',
  'xmas:opening_hours',
  'xmas:url',
  'year',
  'year_of_construction' ]
```

I truncated the output, OSM files have a lot of properties.



#####For a report on one property ('highway' in this case):

```
report(collection, 'key highway', function(response) {
	console.log(response)
})
```

returns

```
{ type: [ 'undefined', 'string' ],
  min: 'bridleway',
  max: undefined,
  values: 
   [ { val: 'bridleway', count: 1 },
     { val: 'yes', count: 1 },
     { val: 'speed_camera', count: 2 },
     { val: 'mini_roundabout', count: 3 },
     { val: 'planed', count: 4 },
     { val: 'secondary_link', count: 6 },
     { val: 'tertiary_link', count: 6 },
     { val: 'stop', count: 7 },
     { val: 'living_street', count: 11 },
     { val: 'track', count: 14 },
     { val: 'construction', count: 20 },
     { val: 'turning_circle', count: 28 },
     { val: 'platform', count: 31 },
     { val: 'street_lamp', count: 34 },
     { val: 'proposed', count: 35 },
     { val: 'elevator', count: 60 },
     { val: 'path', count: 65 },
     { val: 'cycleway', count: 80 },
     { val: 'bus_stop', count: 170 },
     { val: 'primary', count: 222 },
     { val: 'crossing', count: 270 },
     { val: 'tertiary', count: 279 },
     { val: 'residential', count: 378 },
     { val: 'pedestrian', count: 416 },
     { val: 'secondary', count: 466 },
     { val: 'traffic_signals', count: 502 },
     { val: 'unclassified', count: 507 },
     { val: 'steps', count: 708 },
     { val: 'service', count: 981 },
     { val: 'footway', count: 2673 },
     { val: undefined, count: 22007 } ] }
```

```type``` is the type(s) of data (string, number, boolean...)

```min``` and ```max``` may not be very useful in this case as the key is not a number

Then you have the number of features by value 
