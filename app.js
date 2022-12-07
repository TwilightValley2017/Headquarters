const express = require('express')
const path = require('path')
const { PORT } = require('./port.module')

const headquartersApp = express()

headquartersApp.use(express.static(path.join(__dirname, 'public')))
headquartersApp.use(express.static(path.join(__dirname, 'dist')))

headquartersApp.get('/hello', (req, res) => {
    res.send(`Welcome to headquarters!`)
})

headquartersApp.listen(PORT.HEADQUARTERS, () => console.log(`http://localhost:${PORT.HEADQUARTERS}`))
