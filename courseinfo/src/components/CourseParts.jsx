import Total from './Total'


const CourseParts = ( {course} ) => {

    return (
        <div>
            <h2> {course.name} </h2>
            <div>
                {course.parts.map( (p) => {
                    return (
                    <p key = {p.id}> {p.name} {p.exercises} </p>
                    )
                })}
            </div>

            <Total course = {course}/>
        </div>



    )
}

export default CourseParts