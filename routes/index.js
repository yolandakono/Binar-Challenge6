const express = require('express')
const route = express.Router()
const userRoute = require('./userRoute')
const biodataRoute = require('./biodataRoute')
const historyRoute = require('./historyRoute')


route.get('/', (req,res) => {
    res.send('MEMBER OF EXO BOYGROUP FROM SOUTH KOREA')
})

route.use('/user',userRoute)
route.use('/biodata',biodataRoute)
route.use('/history',historyRoute)


module.exports = route