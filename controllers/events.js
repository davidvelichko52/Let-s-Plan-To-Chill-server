let router = require('express').Router()
let db = require('../models')

// NOTE: User should be logged in to access this route
router.get('/', (req, res) => {
    db.Event.find()
    .then(events => {
      res.send(events)
    })
    .catch(err => {
      console.log("error in index route", err)
      res.status(500).send({ message: 'oops?'})
    })
   
})

router.post('/new', (req, res) => {
    db.Event.create({
      location: req.body.location,
      pic: req.body.pic,
      description: req.body.description,
      date: req.body.date,
      things: req.body.things,
      user: req.body.user
    })
    .then(event => {
      res.send(event)
    })
    .catch(err => {
      console.log("error in the new event route", err);
    })
  })

  router.get('/singleEvent/:id', (req, res) => {
    db.event.findById(
        req.params.id
    )
    .then(post => {
        res.send(post)
    })
    .catch(err => {
        console.log("error in single post by id route", err)
    })
})

module.exports = router