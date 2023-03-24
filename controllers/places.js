const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    res.render('GET/places')
  })

  router.post('/places', (req, res) => {
    res.render('POST/places')
  })

  router.get('/places/new', (req, res) => {
    res.render('GET/places')
  })
  
  router.get('/places/:id', (req, res) => {
    res.render('GET/places')
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
    router.psot('/places/:id/edit/rant', (req, res) => {
        res.render('POST/places')
    })
    router.delete('/places/:id/rantld', (req, res) => {
        res.render('DELETE/places')
    })
    router. get('*', (req, res) => {
        res.render('GET/places')
    })




module.exports = router
