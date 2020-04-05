import React from 'react'
import Content from './content'
import Header from './header'

const Course = ( props ) => {
    return(
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts}  />
        </div>
    )
}

export default Course;