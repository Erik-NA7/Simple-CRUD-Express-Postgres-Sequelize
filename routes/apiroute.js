const express = require('express')
const router = express.Router()
const crudapi = require('./crudapi')

//API

// UserGames Routes
// Create new user
router.post('/users', crudapi.create)

// Find all users
router.get('/users', crudapi.findAll)

// Find a single user
router.get('/users/:id', crudapi.findOne)

// Update user
router.put('/users/:id', crudapi.update)

// Delete a user
router.delete('/users/:id', crudapi.delete)

// Biodata Routes
// Create new user bio data
router.post('/biodata', crudapi.createBio)

// Update biodata
router.put('/biodata/:id', crudapi.updateBio)

// Find all biodata
router.get('/biodata', crudapi.findAllbio)

// Find a single user biodata
router.get('/biodata/:id', crudapi.findOnebio)

// GameHistories Routes
// Create a User Game History
router.post('/history', crudapi.createHistory)

// Find All Game Histories
router.get('/history', crudapi.findAllhistory)

// Find a User Game History
router.get('/history/:id', crudapi.findUserhistory)

module.exports = router;