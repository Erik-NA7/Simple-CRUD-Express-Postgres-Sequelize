const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const path = require('path');  
const logger = require('morgan');
const axios = require('axios');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); 

let admin = require('./admin/admin.json')

// Routes
const apiRoute = require('./routes/apiroute');
const { response } = require('express');

app.get('/', (req, res) => {
     res.render('index', { title: "Welcome to Dashboard" })
  })

app.get('/showall', (req, res) => {
  axios.get('http://localhost:3000/api/users')
  .then(function(response) {
    res.render('showall', { users: response.data })
  })
  .catch(err => {
    response.send(err);
  })
})

app.get('/create', (req, res) => {
  res.render('create', { title: 'Create New User' })  
})

app.get('/update', (req, res) => {
  res.render('update', { title: 'Update User Data' })  
})

app.use('/api', apiRoute)

app.listen(port, async () => {
  console.log(`Server is up and running at http:localhost:${port}`)
})