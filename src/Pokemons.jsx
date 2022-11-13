import { useState } from "react";
import PokemonsData from "./PokemonsData.json";
import SinglePokemon from "./SinglePokemon";
import PageIndex from "./PageIndex.jsx";

// !!! Por que funciona?? pasa state de child a padre !!!

const Pokemons = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const calcSpec = (spAtk, spDef) => {
    let spec = Math.floor((spAtk + spDef) / 2 / 10);
    return spec > 10 ? 10 : spec;
  };
  // HTML return
  return (
    <>
      <PageIndex currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* pokemon cards  */}
      <div className="pokemons">
        {PokemonsData.slice((currentPage - 1) * 50, currentPage * 50).map(
          (each) => (
            
            <SinglePokemon
              key={each.id}
              id={each.id}
              imageThumb={each.image.thumbnail}
              nameEng={each.name.english}
              type={each.type}
              species={each.species}
              atk={each.base ? Math.min(Math.round(each.base.Attack / 10), 10) : 0}
              def={each.base ? Math.min(Math.round(each.base.Defense / 10), 10) : 0}
              spec={
                each.base
                  ? calcSpec(each.base["Sp. Attack"], each.base["Sp. Defense"])
                  : 0
              }
              speed={each.base ? Math.min(Math.round(each.base.Speed / 10), 10) : 0}
            />
          )
        )}
      </div>

      <PageIndex currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Pokemons;
