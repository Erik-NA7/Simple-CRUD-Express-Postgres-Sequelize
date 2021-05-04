const { UserGames, Biodata, GameHistories } = require('../models')
// const { Biodata } = require('../models').Biodata
// const { GameHistories } = require('../models').GameHistories
const express = require('express')
const api = express()

// create and save new user
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content not be empty" })
  }
  UserGames.create({
    username: req.body.username,
    password: req.body.password,
  })
  .then(data => {
      res.send(data)
  }).catch(err => {
    res.status(500).send({
      message:err.message||"Can't create user"
    })
  })
}

// update user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content not be empty" })
  }
  UserGames.update({
    username: req.body.username,
    password: req.body.password
  }, {
  where: { id: req.params.id }
  })
    .then(data => {
      if (!data) {
        res.stats(404).send({ message: `Can't update user with id: ${id} or User not found` })
      } else {
        res.send(data)
    }
  })
    .catch(err => {
      res.status(500).send({ message: "An Error Occured" })
  })
}

// retrieve all user or single user
exports.find = (req, res) => {
  UserGames.findAll()
  .then(usergames => {
      res.send( 
        usergames
      )
    })
}

exports.findOne = (req, res) => {
  if (req.params.id) {
    UserGames.findOne({
      where: { id: req.params.id }
    })
    .then (data => {
      res.send(data)
      // if (!data) {
      //   res.status(404).send({ message: "User not found" })
      // } else {
      //   res.send(data)
      // }
    })
  }
}

// delete a user
exports.delete = (req, res) => {
  UserGames.destroy({
      where: { id: req.params.id }
  })
  .then(data => {
    if (!data) {
      res.status(404).send({ message: `Can't delete user with id: ${id} or User not found` })
    } else {
      res.send({
        message: "User deleted"
      })
    }
      
  })
  .catch(err => {
    res.status(500).send({
      message: "Error occured"
    })
  })
}
// res.status(200).json(usergames)

// api.post('/createuser', (req, res) => {
//     UserGames.create({
//         username: req.body.username,
//         password: req.body.password,
//     })
//     .then(usergames => {
//         res.status(201).json(usergames)
//     }) .catch(err => {
//         res.status(422).json("Can't create user")
//     })
// })

// api.get('/usergames', (req, res) => {
//     UserGames.findAll()
//     .then(usergames => {
//         res.render('show', { 
//             usergames
//         })
//             res.status(200).json(usergames)
//     })
// })
    
    // GET usergames by ID
// api.get('/usergames/:id', (req, res) => {
//     UserGames.findOne({
//         where: { id: req.params.id }
//     })
//     .then(usergames => {
//         res.status(200).json(usergames)
//     })
// })

// api.put('/usergames/:id', (req, res) => {
//     UserGames.update({
//         username: req.body.username,
//         password: req.body.password
//     }, {
//     where: { id: req.params.id }
//     })
//         .then(usergames => {
//             res.status(201).json(usergames)
//         }) .catch(err => {
//             res.status(422).json("Can't update user")
//     })
// })

// Delete by id
// api.delete('/usergames/:id', (req, res) => {
//     UserGames.destroy({
//         where: { id: req.params.id }
//     })
//     .then(usergames => {
//         res.status(200).json(usergames)
//     })
// })

// module.exports = api;