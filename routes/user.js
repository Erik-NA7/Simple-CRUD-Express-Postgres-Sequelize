const express = require('express')
const router = express.Router()

// Create User Form
router.get('/create', (req, res) => {
  res.render('create', { title: 'Create New User' })  
})

router.get('/find', (req, res) => {
  res.render('find', { title: 'Find User' })  
})

router.get('/findall', (req, res) => {
  res.render('show', { title: 'Show All User' })  
})

router.get('/update', (req, res) => {
  res.render('update', { title: 'Update User Data' })  
})

router.get('/delete', (req, res) => {
  res.render('delete', { title: 'Delete User' })  
})


module.exports = router;