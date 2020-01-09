import React from 'react'

const Content = ( params ) => {
    return (
        <>
            <p>{params.part1} {params.exercise1}</p>
            <p>{params.part2} {params.exercise2}</p>
            <p>{params.part3} {params.exercise3}</p>
        </>
    )
}

export default Content;