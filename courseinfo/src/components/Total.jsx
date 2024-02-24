const Total = ( {course} ) => {

    const sum = (parts) => {
        const total = parts.reduce( (accumulator, current) => {
            return accumulator + current.exercises
        }, 0)
        return total
    } 

    const numberExercises = sum(course.parts)
    

    return (
        <h4>
            Total of {numberExercises} exercises
        </h4>
    )
}

export default Total