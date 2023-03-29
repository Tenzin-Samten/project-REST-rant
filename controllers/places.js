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

// GET /places

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else {
    res.render('places/show', {place: places[id], id })
  }
})






router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})
 router.get('/', (req, res) => {
    res.render('palces/index')
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
