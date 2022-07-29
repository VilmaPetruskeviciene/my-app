import './App.css';
import PirmasisKontekstas from './Contexts/PirmasisKontekstas';
import M1 from './Components/009/M1';
import { useState } from 'react';
import { useRef } from 'react';


function App() {

    const [count, setCount] = useState(0);

    const blaSuper = useRef(5);

    let bla = 5;

    const doCount = () => setCount(c => c+1);

    bla++;
    console.log(bla);

    blaSuper.current++;
    console.log(blaSuper.current);

    return (
        <PirmasisKontekstas.Provider value={{
            pirmas: 'Valio',
            spalva: 'pink'
        }}>
        <div className="App">
            <header className="App-header">
                <h1>useContext & useRef {count}</h1>
                <M1 kas='Penki'></M1>
                <button onClick={doCount}>+1</button>
            </header>
        </div>
        </PirmasisKontekstas.Provider>
    );
  }
  
  export default App;