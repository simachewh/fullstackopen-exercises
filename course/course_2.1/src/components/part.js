import React from 'react'

const Part = ( props ) => {
    console.log('the part ', props);
    
    return (
        <div>
            <p>{props.part.name} {props.part.exercises}</p>
        </div>
    );
};

export default Part;