import { useState } from "react";
import PokemonsData from "./PokemonsData.json";
import SinglePokemon from "./SinglePokemon";
// import PageIndex from "./PageIndex.jsx";

const Pokemons = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // make index numbers
  let index = [];
  let aux = 0;
  for (let i = 0; i < PokemonsData.length; i += 50) {
    aux++;
    index.push(aux);
  }

  // page navigation arrows functions
  const pageDown = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const pageUp = () => {
    if (currentPage < index[index.length - 1]) {
      setCurrentPage(currentPage + 1);
    }
  };

  // HTML return
  return (
    <>
      {/* page index */}
      <div className="index">
        {/* Page down */}
        <p className="pages-index" onClick={pageDown}>
          &#8249;
        </p>

        {/* index numbers */}
        {index.map((each) => (
          <p
            className="pages-index"
            key={each}
            onClick={(e) => setCurrentPage(parseInt(e.target.innerHTML))}
          >
            {each}
          </p>
        ))}
        {/* !!! */}
        {/* page up | !!!! onClick={()=>{pageUp; console.log(currentPage)}} doesnt work ??? */}
        <p className="pages-index" onClick={pageUp}>
          &#8250;
        </p>
      </div>

      {/* pokemon cards  */}
      <div className="pokemons">
        {PokemonsData.slice((currentPage - 1) * 50, currentPage * 50).map(
          (each) => (
            //  !!!!!
            //  !!!!! why not? console.log(currentPage);
            <SinglePokemon
              key={each.id}
              id={each.id}
              imageThumb={each.image.thumbnail}
              nameEng={each.name.english}
              type={each.type}
              species={each.species}
              atk={Math.round(each.base.Attack / 10)}
              def={Math.round(each.base.Defense / 10)}
            />
          )
        )}
      </div>
    </>
  );
};

export default Pokemons;
