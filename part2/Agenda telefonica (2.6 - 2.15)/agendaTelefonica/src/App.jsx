import { useState, useEffect } from 'react'
import People from './components/People'
import Filter from './components/Filter'
import Personform from './components/Personform'
import peopleServices from './components/Services'
import axios from "axios"
const App = () => {
  const [people, setPeople] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    peopleServices.getAll().then(initialpeople => {setPeople(initialpeople)})
  }, [])
  console.log(people)

  const newnameEventhandler = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const newnumberEventhandler = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const newPerson = (event) => {
    event.preventDefault()
    const newId = people.length + 1
    const strId = newId.toString
    const newPerson = {
      name: newName,
      number: newNumber,
      id: strId
    }

    const updatedPerson = {
      name: newName,
      number: newNumber
    }

    const foundName = people.some(value => {return value.name === newName})
    const foundNumber = people.some(value => {return value.number === newNumber})

    if (foundName) {
      const idFound = people.findIndex(person => person.name === newName) + 1
      peopleServices.update(idFound, updatedPerson).then(response =>{
        const copypeople = [...people]
        copypeople[idFound-1] = response
        setPeople(copypeople)
        setNewName("")
      })
    } else if (foundNumber) {
      alert(`${newNumber} is already added to phonebook`)
    } else {
      peopleServices.create(newPerson)
      .then(response => {
        setPeople(people.concat(response))
        setNewName("")
      })
      
    }
  }

  const handleDelete = (id) => {
    const notdeletedNumbers = people.filter(person => person.id !== id )
    peopleServices.deleteNumber(id)
    setPeople(notdeletedNumbers)
  };

  return (
    <div>
      <Filter people={people}/>
      <h2>Phonebook</h2>
      <Personform newPerson={newPerson} newnameEventhandler={newnameEventhandler} newnumberEventhandler={newnumberEventhandler}/>
      <h2>Numbers</h2>
      <People people={people} handledelete={handleDelete}/>
    </div>
  )
}

export default App