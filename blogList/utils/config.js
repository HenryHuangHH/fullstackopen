//handling of environment variables

require('dotenv').config()

const PORT = process.env.PORT

const URL = process.env.NODE_ENV == 'test' ? process.env.TEST_URL : process.env.URL


module.exports = { PORT, URL }

// from package NODE_ENV = whatever we type dev,start, 
// process.env.node_ev is whatever is type is 