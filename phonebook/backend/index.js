// require just load shte expres spackage 
const express = require('express')
const cors = require('cors') // to allow cross-origin requests
const app = express() // server 

app.use(cors())
app.use(express.json())

const morgan = require('morgan')
app.use(morgan('tiny'))

let data = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

// api/perosns can be anythign that i want 
app.get('/api/persons', (request, response) => {
    response.json(data)
})

app.get('/info', (request, response) => {

    const time = new Date()
    response.send(`
        <p>Phonebook has info for ${data.length} people</p>
        <p>${time}</p>
    `)

})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id; // 1 or 3 or whatever u are in right now

    // params include the dictionary of all the (: things) (id is bc it is a placeholder)

    const thisPerson = data.find((d) => d.id === id)

    if (thisPerson) {
        res.json(thisPerson)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;

    // filter keeps whatever that fullfill the requirement 
    data = data.filter((d) => d.id !== id)
    res.status(204).end() // req sucess no content
})

app.post('/api/persons', (req, res) => {

    const body = req.body

    if (!body.name || !body.number) {
        // 400 is bad request incompelete or sth 
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const dup = data.find(d => d.name === body.name)
    if (dup) {
        return res.status(400).json({
            error: 'name is not unqiue'
        })
    }



    const newPerson = {
        id: String(Math.floor(Math.random() * 10000000)),
        name: body.name,
        number: body.number
    }

    data = data.concat(newPerson)
    res.json(newPerson)
})



const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})