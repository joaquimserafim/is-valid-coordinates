/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const isValidCoordinates = require('.')

const lon = -8.945406
const lat = 38.575078

test('is-valid-coordinates', (assert) => {

  assert.deepEqual(
    isValidCoordinates(lon, lat),
    true,
    'should return true for valid coordinates'
  )

  assert.deepEqual(
    isValidCoordinates(),
    false,
    'should return false when pass empty coordinates'
  )

  assert.deepEqual(
    isValidCoordinates.longitude(-181),
    false,
    'should return false when given a longitude with value -181'
  )

  assert.deepEqual(
    isValidCoordinates.longitude(181),
    false,
    'should return false when given a longitude with value 181'
  )

  assert.deepEqual(
    isValidCoordinates.longitude(-180),
    true,
    'should return true when a longitude inside of valid range'
  )

  assert.deepEqual(
    isValidCoordinates.longitude(180),
    true,
    'should return true when a longitude inside of valid range'
  )

  assert.deepEqual(
    isValidCoordinates.latitude(-90),
    true,
    'should return true when a latitude inside of valid range'
  )

  assert.deepEqual(
    isValidCoordinates.latitude(90),
    true,
    'should return true when a latitude inside of valid range'
  )

  assert.deepEqual(
    isValidCoordinates.longitude(181),
    false,
    'should return false when given a longitude is not inside of a valid range'
  )

  assert.deepEqual(
    isValidCoordinates.latitude(-91),
    false,
    'should return false when given a latitude is not inside of a valid range'
  )

  assert.deepEqual(
    isValidCoordinates.latitude(91),
    false,
    'should return false when given a latitude is not inside of a valid range'
  )

  assert.deepEqual(
    isValidCoordinates(180, 90),
    true,
    'should return true when inside of a valid range'
  )

  assert.deepEqual(
    isValidCoordinates('180', '90'),
    false,
    'should return false when pass strings'
  )

  assert.deepEqual(
    isValidCoordinates(lon),
    false,
    'should return false when pass an undefined latitude'
  )

  assert.deepEqual(
    isValidCoordinates(undefined, lat),
    false,
    'should return false when pass an undefined longitude'
  )

  assert.deepEqual(
    isValidCoordinates.longitude(lon),
    true,
    'should return true for valid longitude'
  )

  assert.deepEqual(
    isValidCoordinates.latitude(lat),
    true,
    'should return true for valid latitude'
  )

  assert.end()
})
