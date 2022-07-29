import { useState } from 'react';
import rand from '../../Functions/rand';

function Forms1() {

  const [text, setText] = useState('');

  const [sk, setSk] = useState([]);

  const skaicius = () => {
    for (let i = 0; i < text; i++) {
      setSk(s => [...s, rand(100, 200)]);
      
    }
  }

  const kvadrat = {
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    margin: '20px'
  }

  const kont = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '20px 0',
    width: '80%',
    flexWrap: 'wrap'
  }

    return (
      <>
      <fieldset>
        <legend>Forms1</legend>
        <input type='text' onChange={a => setText(a.target.value)}></input>
        <div>
          <button onClick={skaicius}>Button</button>
        </div>
      </fieldset>
      <div style={kont}>{sk.map((c, i) => <div style={kvadrat} key={i}>{c}</div>)}</div>
      </>
    );
  }

export default Forms1;