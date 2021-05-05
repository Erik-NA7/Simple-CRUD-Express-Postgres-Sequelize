const express = require('express')
const router = express.Router()
const crudapi = require('./crudapi')

//API

// Create new user
router.post('/users', crudapi.create)

// Create new user bio data
router.post('/biodata', crudapi.createBio)

// Update user
router.put('/users/:id', crudapi.update)

// Update biodata
router.put('/biodata/:id', crudapi.updateBio)

// Find all users
router.get('/users', crudapi.findAll)

// Find a single user
router.get('/users/:id', crudapi.findOne)

// Find all biodata
router.get('/biodata', crudapi.findAllbio)

// Find a single user biodata
router.get('/biodata/:id', crudapi.findOnebio)

// Delete a user
router.delete('/users/:id', crudapi.delete)

module.exports = router;