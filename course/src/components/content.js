import React from 'react'
import Part from './part'

const Content = ( params ) => {
    return (
        <>
            <Part part={params.part1} />
            <Part part={params.part2} />
            <Part part={params.part3} />
        </>
    )
}

export default Content;