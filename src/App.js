import "./App.css";
import Pokemons from "./Pokemons.jsx";
import Title from "./Title.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Title />
        <Pokemons />
        <Footer />
      </main>
    </div>
  );
}

export default App;

// !!! !!! !!! !!!

// NAVBAR: .navbar padding ok BUT pokelogo is not aligned with left margin ??!!

// PAGE INDEX: IT SHOULDNT WORK!!! passing state to parent without useEffect ??!!

// STATS + CSS: Stats only starts working after second time.
//  
