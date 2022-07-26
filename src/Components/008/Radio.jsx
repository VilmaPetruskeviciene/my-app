import { useState } from "react";

function Radio() {
    
    const [radio, setRadio] = useState('B');

    const handleInput = e => {
        setRadio(e.target.value)
    }

    return (
        <>
        <fieldset>
            <legend>Radio: <b>{radio}</b></legend>
                <label>A</label> <input id="_a" type="radio" name="b" value='A' onChange={handleInput} checked={radio === 'A'}></input>
                <label>B</label> <input id="_b" type="radio" name="b" value='B' onChange={handleInput} checked={radio === 'B'}></input>
                <label>C</label> <input id="_c" type="radio" name="b" value='C' onChange={handleInput} checked={radio === 'C'}></input>
        </fieldset>
        </>
    );
}

export default Radio;