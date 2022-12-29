const express = require('express');
const router = express.Router();
const isValidEmailFormat = require('../validation/emailValidator')

const Grid = require('../gridModel/grid')

//acting as DB to store users and location data
const cache = require('../../cache')
const validateRequest = () => {
    return (req, res, next) => {
    if (!isValidEmailFormat(req.params.email)){
        res.status(400).send("Email must be of valid format")
    }
    else {
        next()
      }
    }
  }
  

router.get('/api/:email/direction/:direction', validateRequest(), (req, res)=>{
    try
    {
        const email = req.params.email
        const direction = req.params.direction
        if (!['left','right','forward'].includes(direction)) return res.status(400).send("Must use valid direction: forward, left or right")
        if (!cache[email])
        {
            cache[email] = {grid: new Grid()}
        }
        const evidence = cache[email].grid.checkLocation(direction)
        res.json({evidence})
    }
    catch(e)
    {
        res.status(400).send("Out of range, try different direction")
    }
});

router.get('/api/:email/gps/', validateRequest(), (req, res)=>{
    const email = req.params.email
    const gps = cache[email].grid.printGrid()
    res.send(gps)
});

module.exports = router;