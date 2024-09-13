const Persons = ({persons}) => {
    const result = persons.map(value => <li key={value.id}>{value.name} {value.number}</li>)
    return (
        <ul>
            {result}
        </ul>
    )
}

export default Persons