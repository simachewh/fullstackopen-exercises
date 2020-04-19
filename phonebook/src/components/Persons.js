import React from 'react'
import Person from './Person'

const Persons = (props) => {
    return (
        <div>
            <ul>
                {
                    props.persons.map( (person) => <Person key={person.name} person={person}></Person>)
                }
            </ul>
        </div>
    )
}

export default Persons