import { useEffect } from "react";
import { useState } from 'react';

function Forms2() {

    const [katinai, setKatinai] = useState([]);
    const Change = () => {
          setKatinai(a => [...a,[catName, ': ', catW, ' kg.']]);
      }

    const [catName, setCatName] = useState('');  
    const name = (a) => {
      setCatName(a.target.value)
    }

    const [catW, setCatW] = useState('');
    const weight = (a) => {
      setCatW(a.target.value)
    }

    const submit = (s) => {
      s.preventDefault();
    }
    
    useEffect(() => {
      const catList = localStorage.getItem('myCats');
      if (catList !== null) setKatinai(JSON.parse(catList)) 
  }, [])
  useEffect(() => {
      localStorage.setItem('myCats', JSON.stringify(katinai));
  }, [katinai]);

    const kont = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '20px 0',
        width: '80%',
        flexWrap: 'wrap'
      }
    
    

    return (
        <>
        <form onSubmit={submit}>
          <fieldset>
              <legend>Katinukai</legend>
              <div>
                  <input type='text' value={catName} onChange={name}></input>
              </div>
              <div>
                  <input type='text' value={catW} onChange={weight}></input> 
              </div>
              <div>
              <button type='submit' onClick={Change}>Button</button>
              </div>
          </fieldset>
        </form>
        <div style={kont}>
          <div><span>Katinukų sąrašas:</span></div>
          <div>
          {katinai.sort((a,b) => b[2] - a[2]).map((a,i) => <div key={i}>{a}</div>)}
          </div>
          <div>
            <p>Bendras katinikų svoris: {katinai.length !== 0 ? katinai.map(a => parseFloat(a[2])).reduce((a, b) => a + b) : null} KG.</p>
          </div>
        </div>
        </>
    );
  }

export default Forms2;