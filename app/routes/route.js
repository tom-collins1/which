const express = require('express');
const router = express.Router();
const isValidEmailFormat = require('../validation/emailValidator')

let Grid = require('../gridModel/grid')

//acting as DB to store users and location data
let cache = require('../../cache')
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
        let email = req.params.email
        let direction = req.params.direction
        if (!['left','right','forward'].includes(direction)) return res.status(400).send("Must use valid direction: forward, left or right")
        if (!cache[email])
        {
            cache[email] = {grid: new Grid()}
        }
        let evidence = cache[email].grid.checkLocation(direction)
        res.json({evidence})
    }
    catch(e)
    {
        res.status(400).send("Out of range, try different direction")
    }
});

router.get('/api/:email/gps/', validateRequest(), (req, res)=>{
    let email = req.params.email
    let gps = cache[email].grid.printGrid()
    res.send(gps)
});

module.exports = router;