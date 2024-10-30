import { useState } from 'react';
import './Formulario.css';

const Content = (props) => {
  const [pokemon, setPokemon] = useState('');
  
  const HANDLE_SUBMIT = async (e) => {
    e.preventDefault();
    const RESPONSE = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (RESPONSE.ok) {
      const DATA = await RESPONSE.json();
      props.onResult(DATA);
    } else {
      props.onResult(null);
    }
  };

  return (
    <form className="formulario" onSubmit={HANDLE_SUBMIT}>
      <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value.toLowerCase())} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default Content;