const express = require('express')
const route = express.Router()

route.get('/', (req,res) => {
    res.send('PARK CHANYEOL')
})


module.exports = route