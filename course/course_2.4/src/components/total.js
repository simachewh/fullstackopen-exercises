import React from 'react'

const Total = ( props ) => {
    const total = props.parts.reduce( (sum, part)=>{
        return sum + part.exercises;
    }, 0 )
    return(
        <>
            <p>Total number of exercises {total}</p>
        </>
    )
}

export default Total;