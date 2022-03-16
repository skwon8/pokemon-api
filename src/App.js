import logo from './logo.svg';
import './App.css';
import PokémonApi from './components/PokémonApi';
import PokémonApiAxios from './components/PokémonApiAxios';

function App() {
  return (
    <div className="App">
      <h1>Pokémon Viewer</h1>
      {/* <PokémonApi></PokémonApi> */}
      <PokémonApiAxios></PokémonApiAxios>
    </div>
  );
}

export default App;
