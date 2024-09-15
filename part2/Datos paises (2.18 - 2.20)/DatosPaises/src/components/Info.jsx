const Showinfo = ({info}) => {
    return (
        <div>
            <h1>{info.name.common}</h1>
            <p>Capital: {info.capital}</p>
            <p>Area: {info.area}</p>
            <h4>Languages</h4>
            <ul>
            {Object.values(info.languages).map((language, index) => (
                <li key={index}>{language}</li>
            ))}
            </ul>
            <img src={info.flags.png} alt={`Flag of ${info.name.common}`} />
        </div>
    )
}

export default Showinfo