import React from 'react'
import Content from './content'
import Header from './header'
import Total from './total'

const Course = ( props ) => {
    return(
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts}  />
            <Total parts={props.course.parts} ></Total>
        </div>
    )
}

export default Course;