import logo from "./logo.svg";
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

// TITLE: useEffect not working to update useState.
//   Looks like it runs once AFTER page is rendered. Does it run AFTER render??

// PAGE INDEX: IT SHOULDNT WORK!!! passing state to parent without useEffect ??!!

// STATS + CSS: Stats only starts working after second time.
//  

// https://www.youtube.com/watch?v=V-6m0jW0X9E&ab_channel=CollegeHumor