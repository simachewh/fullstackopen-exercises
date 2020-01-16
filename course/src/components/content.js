import React from 'react'

const Content = ( params ) => {
    return (
        <>
            <p>{params.part1} {params.exercises1}</p>
            <p>{params.part2} {params.exercises2}</p>
            <p>{params.part3} {params.exercises3}</p>
        </>
    )
}

export default Content;