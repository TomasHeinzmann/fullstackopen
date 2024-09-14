import { useState } from "react"

const Filter = ({people}) => {
    const [filteredPersons, setfilterPersons] = useState([])
    const [filterText, setfilterText] = useState("")

    let peopleFilter = ""
    let result = ""
    const newFilterEventHandler = (event) => {
        event.preventDefault()
        const filter = event.target.value
        console.log(filter)
        setfilterText(filter)

        peopleFilter = people.filter((people) => people.name.includes(filter))
        setfilterPersons(peopleFilter)
        console.log(peopleFilter)

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