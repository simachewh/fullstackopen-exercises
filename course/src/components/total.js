import React from 'react'

const Total = ( params ) => {
    let total = 0;
    params.parts.forEach( item => total += item.exercises );
    return(
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}

export default Total;