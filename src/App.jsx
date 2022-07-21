import './App.css';
import Dogs1 from './Components/005/Dogs1';
import Dogs2 from './Components/005/Dogs2';
import Dogs3 from './Components/005/Dogs3';
import Dogs4 from './Components/005/Dogs4';
import KatesSunys from './Components/005/KatesSunys';
import Kn from './Components/005/Kn';
import Kosmosas from './Components/005/Kosmosas';
import LabasZuiki from './Components/005/LabasZuiki';
import PropsH1 from './Components/005/PropsH1';
import Spalvotas from './Components/005/Spalvotas';
import ZebraiIrBebrai from './Components/005/ZebraiIrBebrai';
import rand from './Functions/rand';

const dogs1 = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
const yel = 'yellow';
const ms = {color: yel, backgroundColor: 'skyblue'};
const mas = ['Pilkis', 'Murkis', 'Gagarinas'];
const tex = 'Hello World';
const cat1 = 'Kates ir sunys';
const cat2 = 'Cats and dogs';
const spalv1 = 'Spalvotas';
const spalv2 = 'Spalvotas, spalvotas';
const spalv3 = {color: 'yellow'};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {dogs1.map((n, i) => <Dogs1 key={i} name={n}></Dogs1>)}
        {[...dogs1].sort((a, b) => b.length - a.length).map((n, i) => <Dogs2 key={i} index={i} name={n}></Dogs2>)}
        {dogs1.map((n, i) => <Dogs3 key={i} index={i} name={n}></Dogs3>)}
        {dogs1.map((n, i) => <Dogs4 key={i} index={i} name={n}></Dogs4>)}
        <LabasZuiki></LabasZuiki>
        <PropsH1 tekstas={tex}></PropsH1>
        <ZebraiIrBebrai zeb={rand(1, 2)}></ZebraiIrBebrai>
        <KatesSunys kates={cat1}></KatesSunys>
        <KatesSunys sunys={cat2}></KatesSunys>
        <Spalvotas spalva1={spalv1} spalva3={spalv3}></Spalvotas>
        <Spalvotas spalva2={spalv2} spalva3={spalv3}></Spalvotas>
        <h1>Labas</h1>
        {
          mas.map((n, i) => <Kn key={i} name={n}></Kn>)
        }
        <Kosmosas spalva='pink' krastas='40'></Kosmosas>
        <Kosmosas spalva={yel} krastas='70' manoStilius={ms}></Kosmosas>
      </header>
    </div>
  );
}

export default App;
