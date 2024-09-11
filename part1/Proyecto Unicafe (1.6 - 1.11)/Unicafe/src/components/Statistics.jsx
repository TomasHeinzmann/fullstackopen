const Statistics = ({good, bad, neutral}) => {
    const total = good + bad + neutral;
    const average = (total / 3).toFixed(2)
    const positive = (good * 100 / total).toFixed(2)
    if (total === 0) {
        return (
            <p>No feedback given</p>
        )
    } return (
        <div>
            <table>
                <tbody>
                    <tr><th>good</th><td>{good}</td></tr>
                    <tr><th>neutral</th><td> {neutral}</td></tr>
                    <tr><th>bad</th><td>  {bad}</td></tr>
                    <tr><th>all</th><td> {total}</td></tr>
                    <tr><th>average</th><td> {average}</td></tr>
                    <tr><th>positive</th><td> {positive}%</td></tr>
                </tbody>
            </table>
        </div>
    ) 
}

export default Statistics