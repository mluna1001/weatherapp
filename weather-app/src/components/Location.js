import React from 'react'

// Para colocar un parámetro, se debe colocar en la declaración del componente
/*
const Location = (props) => {
    // const city = props.city;
    // Destructing
    const { city } = props;

    return (
        <div><h1>{city}</h1></div>
    );
};
*/

//esto también es válido
const Location = ({city}) => (
    <div>
        <h1>{city}</h1>
    </div>
);

export default Location;