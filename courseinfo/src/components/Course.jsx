import CourseParts from './CourseParts'


const Course = ({courses}) => {

    return (
        <div>
            {courses.map ( (course) => {
                return (
                
                <div key = {course.id}>
                    <CourseParts course={course} />
                </div>
                )
            })}
        </div>
    )
}

export default Course