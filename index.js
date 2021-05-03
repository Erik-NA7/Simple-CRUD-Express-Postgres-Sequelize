const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const path = require('path');  
const logger = require('morgan');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); 

let admin = require('./admin/admin.json')

// Routes
const apiRoute = require('./routes/apiroute')

app.get('/', (req, res) => {
    res.render('index', { tittle: 'Welcome to Dashboard' })
})

app.get('/create', (req, res) => {
  res.render('create', { title: 'Create New User' })  
})

app.get('/update', (req, res) => {
  res.render('update', { title: 'Update User Data' })  
})

app.use('/api', apiRoute)

app.listen(port, () => {
  console.log(`Server is up and running at http:localhost:${port}`)
})