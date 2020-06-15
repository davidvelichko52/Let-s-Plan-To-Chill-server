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
    db.Event.findById(
        req.params.id
    )
    .then(event => {
        res.send(event)
    })
    .catch(err => {
        console.log("error in single event by id route", err)
    })
})

router.post ('/singleEvent/:id', (req, res) => {
  db.Event.findOneAndUpdate({
      _id: req.params.id
  },
  {
    $push: {
      "chats": {
        "content": req.body.content
      }
  }
})
.then(chats => {
res.send(chats)
})
.catch(err => {
console.log("error in single event by id route", err)
})
})


router.delete('/:id', (req, res) => {
  console.log("hitting the delete route")
    db.Event.deleteOne({
            _id: req.params.id
    })
    .then(event => {
        res.send(event)
    })
    .catch(err => {
        console.log("error in Delete single event route", err)
    })
})


router.get('/edit', (req, res) => {
  console.log("hitting the get edit route lets get it you are a king/queen you champion code star");
    db.Event.findOne({
        _id: req.body.id
    })
    .then(event => {
        res.send(event)
    })
    .catch(err => {
        console.log('you made a boo boo', err)
    })
})


router.put('/edit/:id', (req, res) => {
    db.Event.updateOne({
        _id: req.params.id,
    }, {
      $set: {
    
       "location" : req.body.location,
        "pic" : req.body.pic,
        "description" : req.body.description,
        "date" : req.body.date,
        "things" : req.body.things
    }
    })
    .then(event => {
       console.log("hitting the edit events route", event);
        res.send(event)

    })
    .catch(err => {
        console.log('you made a boo boo', err)
    })
})

module.exports = router