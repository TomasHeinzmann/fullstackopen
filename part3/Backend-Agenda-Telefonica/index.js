const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('dist'))

let people = [
    { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
    },
    { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
    },
    { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
    },
    { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
    }
]

app.get("/", (request, response) => response.render("./dist/index.html"))

app.get("/notes", (request, response) => response.json(people))

app.get("/notes/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = people.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get("/info", (request, response) => {
    const nowDate = new Date()
    response.send(`
    <div>
        <p>Phonebook has info for ${people.length}</p>
        <br/>
        <p>${nowDate}</p>
    </div>
    `)
})

app.delete("/notes/:id", (request, response) =>{
    const id = Number(request.params.id)
    people = people.filter(person => person.id !== id)
    response.status(204).end()
})

app.use(express.json())

app.post("/notes", (request, response) => {
    console.log(request.body)
    const person = request.body
    console.log(person)
    const name = person.name
    person.id = Math.floor(Math.random() * 999999)
    const foundName = people.find((person => person.name === name))
    if (!person.name || !person.number) {
        response.status(400).send(
            {error: "Name or Number not defined"}
        )
    } 
    if (foundName) {
        response.status(400).send(
            {error: "Name already in Phonebook"}
        )
    } 
    people = people.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})