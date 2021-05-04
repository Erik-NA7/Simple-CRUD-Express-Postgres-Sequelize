const express = require('express')
const router = express.Router()
const crudapi = require('./crudapi')

//API
router.post('/users', crudapi.create)
router.post('/biodata', crudapi.createBio)
router.put('/users/:id', crudapi.update)
router.put('/biodata/:id', crudapi.updateBio)
router.get('/users', crudapi.findAll)
router.get('/users/:id', crudapi.findOne)
router.get('/biodata', crudapi.findAllbio)
router.get('/biodata/:id', crudapi.findOnebio)
router.delete('/users/:id', crudapi.delete)

module.exports = router;