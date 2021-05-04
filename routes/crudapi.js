const { UserGames, Biodata, GameHistories } = require('../models')
// const { Biodata } = require('../models').Biodata
// const { GameHistories } = require('../models').GameHistories
const express = require('express')

// create and save new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content not be empty" })
  } else {
    UserGames.create({
      username: req.body.username,
      password: req.body.password,
    })
    .then(data => { 
      // res.send(data)
      res.redirect('/createbio')
    }).catch(err => {
      res.status(500).send({
        message:err.message||"Can't create user"
      })
    });
  }
}

// update user
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

// create and save new user bio
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
      res.redirect('/')
  }).catch(err => {
    res.status(500).send({
      message:err.message||"Can't create user"
    })
  })
}

// update and save user bio
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

// retrieve all user
exports.findAll = (req, res) => {
  UserGames.findAll()
  .then(data => {
      res.send(data)
    })
}

// retrieve single user
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

// retrieve all biodata
exports.findAllbio = (req, res) => {
  Biodata.findAll()
  .then(data => {
      res.send(data)
    })
}

// retrieve single biodata
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

exports.deleteBio = (req, res) => {
  Biodata.destroy({
      where: { id: req.params.id }
  })
  .then(data => {
    if (!data) {
      res.status(404).send({ message: `Can't delete biodata with id: ${id} or data not found` })
    } else {
      res.send({
        message: "Biodata deleted"
      })
    }
      
  })
  .catch(err => {
    res.status(500).send({
      message: "Error occured"
    })
  })
}