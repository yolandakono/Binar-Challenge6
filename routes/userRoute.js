const express = require('express')
const route = express.Router()
//const UsernameController = require('../controllers/usernameControllers')

route.get('/', (req,res) => {
    res.send('BYUN BAEKHYUN')
}),

//route.get('/getall', UsernameController.getall)

module.exports = route