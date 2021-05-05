const { UserGames, Biodata, GameHistories } = require('../models')
const express = require('express')

// UserGames Table controller
// Create and save new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content not be empty" })
  } else {
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
    });
  }
}

// Update a user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "No data changeed!" })
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

// Retrieve all user
exports.findAll = (req, res) => {
  UserGames.findAll()
  .then(data => {
      res.send(data)
    })
}

// Retrieve single user
exports.findOne = (req, res) => {
  if (req.params.id) {
    UserGames.findOne({
      where: { id: req.params.id }
    })
    .then (data => {
      res.send(data)
    })
  }
}

// Delete a user
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

// Biodata Table Controller
// Create and save new user bio
exports.createBio = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content not be empty" })
  }
  Biodata.create({
    fullname: req.body.fullname,
    email: req.body.email,
    userId: req.body.id
  })
  .then(data => {
      res.send(data)
      }).catch(err => {
    res.status(500).send({
      message:err.message||"Can't create user"
    })
  })
}

// Update and save user bio
exports.updateBio = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content not be empty" })
  }
  Biodata.update({
    fullname: req.body.fullname,
    email: req.body.email,
    userId: req.body.userId
  }, {
    where: { id: req.params.id }
    })
  .then(data => {
      // 
      res.send(data)
  }).catch(err => {
    res.status(500).send({
      message:err.message||"Can't update bio"
    })
  })
}

// Retrieve all biodata
exports.findAllbio = (req, res) => {
  Biodata.findAll()
  .then(data => {
      res.send(data)
    })
}

// Retrieve single biodata
exports.findOnebio = (req, res) => {
  if (req.params.id) {
    Biodata.findOne({
      where: { id: req.params.id }
    })
    .then (data => {
      res.send(data)
    })
  }
}