const express = require('express')
const router = express.Router()
const app = express()
const { sequelize, UserGames, UserBiodata, GameHistories } = require('../models')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Create New User
router.post('/user-game/add', async (req, res) => {
  const { username, password } = await req.body
    try{
      UserGames.create({ username, password })      
      .then(usergames => {
        console.log(usergames);
      });
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
})

router.get('/user-game/findall', async (req, res) => {
  try{
    UserGames.findAll().then(usergame => {
      res.status(200).json(usergame)
      })
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
})

//Find by Id
router.get('/user-game/find/:id', async (req, res) => {
  try{
    UserGames.findOne({
      where: { id: await req.params.user_id }
  }).then(usergame => {
    res.status(200).json(usergame)
    });
  } catch(err) {
      console.log(err);
      return res.status(500).json(err);
  }
})

//Delete by Id
router.get('/user-game/delete/:id', async (req, res) => {
  try{
    const target = await UserGames.findOne({
      where: { id: req.params.user_id }
    }).then (UserGames.destroy({
      where: { id: req.params.user_id }
    })
    ).then(usergame => {
    res.status(200).json(`${usergame} Deleted!`);
    console.log(`${target} Deleted`);
    })
  } catch(err) {
      console.log(err);
      return res.status(500).json(err);
  }
})
// GET all user data/articles/create, menampilkan form create

module.exports = router