const app = require('./app')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')

// start the server
mongoose.connect(config.URL, { family: 4 })

const PORT = config.PORT

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})