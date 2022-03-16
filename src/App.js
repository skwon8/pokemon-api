import logo from './logo.svg';
import './App.css';
import PokémonApi from './components/PokémonApi';

function App() {
  return (
    <div className="App">
      <h1>Pokémon Viewer</h1>
      <PokémonApi></PokémonApi>
    </div>
  );
}

export default App;
