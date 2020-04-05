import React from 'react'
import Part from './part'

const Content = ( props ) => {
    return (
        <div>
            {props.parts.map((part)=>{
                    return <Part key={part.id} part={part}></Part>
                })}
        </div>
    )
}

export default Content;