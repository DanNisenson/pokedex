import logo from './logo.svg';
import './App.css';
import Pokemons from './Pokemons.jsx';
import Title from './Title.jsx';


function App() {
  return (
    <div className="App">
      <main>
        <Title /> 
     <Pokemons />
      </main>
    </div>
  );
}

export default App;
