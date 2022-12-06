const express = require('express')
const path = require('path')

const headquartersApp = express()

headquartersApp.use(express.static(path.join(__dirname, 'public')))

headquartersApp.get('/hello', (req, res) => {
    res.send(`Welcome to headquarters!`)
})

headquartersApp.listen(10800, () => console.log(`http://localhost:${10800}`))