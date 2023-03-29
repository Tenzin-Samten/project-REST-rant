const router = require('express').Router()
const places = require('../models/places.js')

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


router.get('/', (req, res) => {
    res.render('places/index', { places })
})




// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/resturant.jpg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/cafe.jpg'
  }]

  router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


res.render('GET/places', {places})
})


  router.get('/', (req, res) => {
    res.render('palces/index')
  })
  
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  router.put('/places/id', (req, res) => {
    res.render('PUT/places')
    })
    
    router.get('/places/:id/edit', (req, res) => {
        res.render('GET/places')
    })
    router.delete('/places/:id/rant', (req, res) => {
        res.render('GET/places')
    })
    router.get('/places/:id', (req, res) => {
        res.render('DELETE/places')
    })
    router.post('/places/:id/edit/rant', (req, res) => {
        res.render('POST/places')
    })
    router.delete('/places/:id/rantld', (req, res) => {
        res.render('DELETE/places')
    })
    router. get('*', (req, res) => {
        res.render('GET/places')
    })




module.exports = router
