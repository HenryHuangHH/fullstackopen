// four paramter middleware mean it is error middleware, first is error
// middleware 3 or more paramter in https reqyuest
//next go to next middleware, next(err) go to the one with eror 

// require just load shte expres spackage 
const express = require('express')
const cors = require('cors') // to allow cross-origin requests
const app = express() // server 

// import dotenv from 'dotenv'
// dotenv.config() // the two liesn are same as 
require('dotenv').config()

const Person = require('./models/person') // Person modle to connect to db

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

// log the reqeust on the terminal
const morgan = require('morgan')
app.use(morgan('tiny'))

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

// api/perosns can be anythign that i want 
app.get('/api/persons', (request, response) => {
    // Person is the model we imported
    Person.find({}).then(data => {
        response.json(data)
    }) // .then runs when prmise is fullfilled
})

app.get('/info', (request, response) => {

    const time = new Date()
    Person.countDocuments({}).then(count => {
        response.send(`
      <p>Phonebook has info for ${count} people</p>
      <p>${time}</p>
    `)
    })

})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(p => {
            if (p) { // if person exist 
                res.json(p)
            } else {
                res.status(404).end()
            }
        })
        .catch(err => {
            next(err)
            // console.log(err)
            // res.status(400).send({ error: 'malformatted id' })
            // 400 bad request client give invalid request
        })
})

app.delete('/api/persons/:id', (req, res, next) => {

    Person.findByIdAndDelete(req.params.id).then(() => {
        res.status(204).end() // req sucess no content
    })
        .catch(err => next(err))
})

app.post('/api/persons', (req, res) => {
    //getbody(data) of the http requres r
    const body = req.body

    if (!body.name || !body.number) {
        // 400 is bad request incompelete or sth 
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const newPerson = new Person({
        name: body.name,
        number: body.number
    }) // new Person model

    // newPerson is an instance of the Person model so it can save 

    newPerson.save().then(savedP =>
        res.json(savedP)
    )
})

// app.put('/api/notes/:id', (request, response, next) => {
//   const { content, important } = request.body

//   Note.findById(request.params.id)
//     .then(note => {
//       if (!note) {
//         return response.status(404).end()
//       }

//       note.content = content
//       note.important = important

//       return note.save().then((updatedNote) => {
//         response.json(updatedNote)
//       })
//     })
//     .catch(error => next(error))
// })

// this has to be the last loaded middleware
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



