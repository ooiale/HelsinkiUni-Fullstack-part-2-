import Person from './Person'

const PhoneList = ({listToShow, deletePerson}) => {

    return (
        <ul>
        {listToShow.map ( (p) => {
          return (
           <Person 
              key = {p.id} 
              person = {p} 
              deletePerson = {() => deletePerson(p.id)} />
          )
        })}
      </ul>
    )
}

export default PhoneList