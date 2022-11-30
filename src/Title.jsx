import { useState, useEffect } from 'react';
import PokemonsData from "./PokemonsData.json";

const Title = () => {
  const [randomPokemon, setRandomPokemon] = useState(1);

  useEffect(() => {
    setRandomPokemon(Math.floor(Math.random() * PokemonsData.length));
  }, [])
  
  console.log(randomPokemon);
  return (
    <div className="header">
      <span className="title-box">
        <h1>Pokedex</h1>
      </span>

      <img className='thumbnails' src={PokemonsData[randomPokemon].image.thumbnail}  />
    </div>
  );
};

export default Title;
