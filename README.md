# is-valid-coordinates

verifies if a given longitude and latitude are valid


----
<a href="https://nodei.co/npm/is-valid-coordinates/"><img src="https://nodei.co/npm/is-valid-coordinates.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/is-valid-coordinates)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/is-valid-coordinates/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/is-valid-coordinates/blob/master/package.json#L39)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const isValidCoordinates = require('is-valid-coordinates')`

all methods should return a boolean value

`isValidCoordinates(longitude, latitude)`

`isValidCoordinates.longitude(longitude)`

`isValidCoordinates.latitude(latitude)`

### example

```js
const isValidCoordinates = require('is-valid-coordinates')

const lon = -8.945406
const lat = 38.575078

isValidCoordinates(lon, lat)// returns true
isValidCoordinates.longitude(lon)// returns true
isValidCoordinates.latitude(lat)// returns true
```

#### ISC License (ISC)
