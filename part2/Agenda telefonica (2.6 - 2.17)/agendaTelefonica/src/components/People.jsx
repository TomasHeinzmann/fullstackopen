import peopleServices from "./Services.jsx"

const People = ({people, handledelete}) => {
    const result = people.map(value => 
        (<li key={Math.random()}>
            {value.name} 
        {value.number}
        <button onClick={() => {handledelete(value.id)}}>Delete</button>
        </li>
        ))
    return (
        <ul>
            {result}
        </ul>
    )
}


export default People