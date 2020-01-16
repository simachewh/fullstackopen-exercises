import React from 'react'

const Part = ( params ) => {
    return (
        <>
            <p>{params.part.name} {params.part.exercises}</p>
        </>
    );
};

export default Part;