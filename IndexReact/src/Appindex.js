import './App.css';
import Primercomponente from './components/Primercomponente';
import Segundocomponente from './components/Segundocomponente.js';
import Tercercomponente from './components/Tercercomponente.js';

function Appindex() {
  return (
    <div className="App">
      <Primercomponente/>
      <Segundocomponente/>
      <Tercercomponente/>
    </div>
  );
}

export default Appindex;