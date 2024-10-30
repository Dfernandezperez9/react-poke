import React from 'react';
import './Container.css'

const Result = ({ result }) => {
  if (result) {
    return (
      <div className= "result-container">
        <h2>{result.name}</h2>
        <img src={result.sprites.front_default} alt={result.name} />
      </div>
    );
  } else {
    return <p>Pokémon no encontrado</p>;
  }
};

export default Result;