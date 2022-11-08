import PokemonsData from "./PokemonsData.json";

const PageIndex = () => {
  let index = [];
  let aux = 0;
  for (let i = 0; i < PokemonsData.length; i += 50) {
    aux++;
    index.push(aux);
  }

  return (
    <div className="pages">
      <p className="pages-index">&#8249;</p>
      {index.map((each) => (
        <p
          className="pages-index"
          key={each}
          value={each}
          // onClick={(e) => setCurrentPage(e.target.innerHTML)} // !!! con value no me funciona!
        >
          {each}
        </p>
      ))}
      <p className="pages-index">&#8250;</p>
    </div>
  );
};

export default PageIndex;
