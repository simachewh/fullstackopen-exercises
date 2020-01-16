import React from 'react'
import Part from './part'

const Content = ( params ) => {
    return (
        <>
            <Part part={params.parts[ 0 ]} />
            <Part part={params.parts[ 1 ]} />
            <Part part={params.parts[ 2 ]} />
        </>
    )
}

export default Content;