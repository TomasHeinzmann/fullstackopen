import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Personform from './components/Personform'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

  const newnameEventhandler = (event) => {
    event.preventDefault()
    console.log("Escribiendo...", event.target.value)
    setNewName(event.target.value)
  }

  const newnumberEventhandler = (event) => {
    event.preventDefault()
    console.log("Escribiendo...", event.target.value)
    setNewNumber(event.target.value)
  }

  const newPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const foundName = persons.some(value => {return value.name === newName})
    const foundNumber = persons.some(value => {return value.number === newNumber})

    if (foundName) {
      alert(`${newName} is already added to phonebook`)
    } else if (foundNumber) {
      alert(`${newName} is already added to phonebook`)
    } else {
      console.log(foundName)
      console.log(foundNumber)
      setPersons(persons.concat(newPerson))
      setNewName("")
    }
  }

  return (
    <div>
      <Filter persons={persons}/>
      <h2>Phonebook</h2>
      <Personform newPerson={newPerson} newnameEventhandler={newnameEventhandler} newnumberEventhandler={newnumberEventhandler}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App