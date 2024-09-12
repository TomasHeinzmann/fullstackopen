import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Courses = ({courses}) => {
    const header0 = courses[0].name
    const content0 = courses[0].parts
    const classes0 = content0.map(value => <li key={value.id}>{value.name} has {value.exercises} exercises</li>)

    const header1 = courses[1].name
    const content1 = courses[1].parts
    const classes1 = content1.map(value => <li key={value.id}>{value.name} has {value.exercises} exercises</li>)
    return (
        <div>
            <Header title={header0}/>
            <Content li={classes0}/>
            <Total content={content0}/>
            <Header title={header1}/>
            <Content li={classes1}/>
            <Total content={content1}/>
        </div>
    )
}

export default Courses