import { useState } from 'react';

function Forms2() {



    
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
        <legend>Katinukai</legend>
        <div>
            <input type='text'></input>
        </div>
        <div>
            <input type='number'></input> 
        </div>
        <div>
          <button>Button</button>
        </div>
      </fieldset>
      <div style={kont}></div>
      </>
    );
  }

export default Forms2;