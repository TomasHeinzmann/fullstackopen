const Total = ({content}) => {
    const total = content.reduce(
    (acummulator, obj, index) => {
        const exercise = obj.exercises
        return acummulator += exercise
    }, 0); 

    return (
        <div>
            <p><strong>Total of {total} exercises</strong></p>
        </div>
    )
}

export default Total