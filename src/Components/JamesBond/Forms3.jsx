import { useState } from 'react';

function Forms3() {

    const [pirmas, setPirmas] = useState(100);
    const [antras, setAntras] = useState(50);
    
    const sk1 = e => {
       setPirmas(e.target.value);
       setAntras(e.target.value/2);
    }
    const sk2 = e => {
        setAntras(e.target.value);
        setPirmas(e.target.value*2);
    }

    return (
        <>
        <form >
          <fieldset>
              <legend>Skaičiai</legend>
              <div>
                  <input type='text' value={pirmas} onChange={sk1}></input>
              </div>
              <div>
                  <input type='text' value={antras} onChange={sk2}></input> 
              </div>
          </fieldset>
        </form>
        </>
    );
  }

export default Forms3;