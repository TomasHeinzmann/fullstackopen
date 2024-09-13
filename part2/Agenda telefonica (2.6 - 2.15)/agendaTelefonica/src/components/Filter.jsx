import { useState } from "react"

const Filter = ({persons}) => {
    const [filteredPersons, setfilterPersons] = useState([])
    const [filterText, setfilterText] = useState("")

    let personsFilter = ""
    let result = ""
    const newFilterEventHandler = (event) => {
        event.preventDefault()
        const filter = event.target.value
        console.log(filter)
        setfilterText(filter)

        personsFilter = persons.filter((person) => person.name.includes(filter))
        setfilterPersons(personsFilter)
        console.log(personsFilter)

        result = filteredPersons.map((value) => <li key={value.id}>{value.name} {value.number}</li>) 
    }
    return (
    <div>
        Filter shown with <input onChange={newFilterEventHandler}/>
        <p>Number filtered</p>
        <ul>{filteredPersons.map((value) => <li key={value.id}>{value.name} {value.number}</li>)}</ul>
    </div>)   
}

export default Filter