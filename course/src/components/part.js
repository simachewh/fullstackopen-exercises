import React from 'react'

const Part = ( params ) => {
    return (
        <>
            <p>{params.part} {params.exercises}</p>
        </>
    );
};

export default Part;