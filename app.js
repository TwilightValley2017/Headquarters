const express = require('express')
const path = require('path')
const { PORT } = require('./port.module')

const headquartersApp = express()

headquartersApp.use(express.static(path.join(__dirname, 'public')))

headquartersApp.get('/hello', (req, res) => {
    res.send(`Welcome to headquarters!`)
})

headquartersApp.listen(PORT.HEADQUARTERS, () => console.log(`http://localhost:${PORT.HEADQUARTERS}`))

const infantryTroopsApp = express()

infantryTroopsApp.use(express.static(path.join(__dirname, 'dist')))

infantryTroopsApp.get('/hello', (req, res) => {
    res.send(`Infantry troops coming soon`)
})

infantryTroopsApp.listen(PORT.INFANTRY_TROOPS, () => console.log(`http://localhost:${PORT.INFANTRY_TROOPS}`))
