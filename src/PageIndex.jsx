import PokemonsData from "./PokemonsData.json";

const PageIndex = (props) => {
 // make index numbers
 let index = [];
 let aux = 0;
 for (let i = 0; i < PokemonsData.length; i += 50) {
   aux++;
   index.push(aux);
 }

 // page navigation arrows functions
 const pageDown = () => {
   if (props.currentPage > 1) {
    props.setCurrentPage(props.currentPage - 1);
   }
 };
 const pageUp = () => {
   if (props.currentPage < index[index.length - 1]) {
    props.setCurrentPage(props.currentPage + 1);
   }
 };

  return (
   <div className="index">
   {/* Page down */}
   <p className="pages-index text-hover" onClick={pageDown}>
     &#8249;
   </p>

   {/* index numbers */}
   {index.map((each) => (
     <p
       className="pages-index text-hover"
       key={each}
       onClick={(e) => props.setCurrentPage(parseInt(e.target.innerHTML))}
     >
       {each}
     </p>
   ))}
   {/* !!! */}
   {/* page up | !!!! onClick={()=>{pageUp; console.log(currentPage)}} doesnt work ??? */}
   <p className="pages-index text-hover" onClick={pageUp}>
     &#8250;
   </p>
 </div>
  );
};

export default PageIndex;
