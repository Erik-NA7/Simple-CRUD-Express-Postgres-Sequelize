const express = require('express')
const router = express.Router()
const crudapi = require('./crudapi')

// Routes
router.get('/create/', (req, res) => {
  res.render('create', { title: 'Create New User' })  
})

router.get('/update', (req, res) => {
  res.render('update', { title: 'Update User Data' })  
})

//API
router.post('/users', crudapi.create)
router.get('/users', crudapi.findAll)
router.get('/users/:id', crudapi.findOne)
router.put('/users/:id', crudapi.update)
router.delete('/users/:id', crudapi.delete)

module.exports = router;