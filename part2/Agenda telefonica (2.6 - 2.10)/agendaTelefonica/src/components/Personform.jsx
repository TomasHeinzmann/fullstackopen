const Personform = ({newPerson, newnameEventhandler, newnumberEventhandler}) => {
    return (
        <form onSubmit={newPerson}>
            <div>
                <p>name</p>
                <input onChange={newnameEventhandler} />
                <p>number</p>
                <input onChange={newnumberEventhandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Personform