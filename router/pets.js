const express = require('express')
const router = express.Router()
const Pets = require('../pets/pets')
const newPets = new Pets()

router.get('/pets', newPets.getPets.bind(newPets))
router.post('/create', newPets.createPets.bind(newPets))

module.exports = router