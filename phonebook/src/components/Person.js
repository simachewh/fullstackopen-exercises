import React from 'react'

const Person = (props) => {
    return(
        <div>
            {props.person.name} {props.person.phone}
        </div>
    )
}

export default Person