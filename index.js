/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const between = require('between-range')

const isValidCoordinates = module.exports = fnIsValidCoordinates

isValidCoordinates.longitude = longitude
isValidCoordinates.latitude = latitude

function fnIsValidCoordinates (lon, lat) {
  return longitude(lon) && latitude(lat)
}

function longitude (lon) {
  return !!(isNumber(lon) && between(lon, -180, 180))
}

function latitude (lat) {
  return !!(isNumber(lat) && between(lat, -90, 90))
}

function isNumber (n) {
  return typeof n === 'number'
}
