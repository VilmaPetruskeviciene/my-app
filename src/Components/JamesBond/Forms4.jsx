import { useState } from "react";

const colors = [
    {value: 1, color: 'red'},
    {value: 2, color: 'blue'},
    {value: 3, color: 'yellow'},
    {value: 4, color: 'black'},
    {value: 5, color: 'green'}
];

const sizes = [
    {value: 1, size: '16px'},
    {value: 2, size: '26px'},
    {value: 3, size: '32px'},
    {value: 4, size: '38px'},
    {value: 5, size: '44px'}
];

const fonts = [
    {value: 1, font: 'Arial'},
    {value: 2, font: 'Times new Roman'},
    {value: 3, font: 'Sans-Serif'},
    {value: 4, font: 'Monospace'},
    {value: 5, font: 'Fantasy'}
];

function Forms4() {
    
    const [color, setColor] = useState('blue');
    const colorInput = e => {
        setColor(e.target.value);
    }
console.log(color);
    const [size, setSize] = useState('16px');
    const sizeInput = e => {
        setSize(e.target.value);
    }

    const [font, setFont] = useState('');
    const fontInput = e => {
        setFont(e.target.value);
    }

    const [text, setText] = useState('');
    const textInput = e => {
        setText(e.target.value);
    }


    const kont = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: '20px 0',
        width: '80%',
        flexWrap: 'wrap'
      }   

    return (
        <>
        <fieldset>
            <legend>Select</legend>
            <div>
                <select value={color} onChange={colorInput}>
                    {
                        colors.map(c => <option key={c.value} value={c.color}>{c.color}</option>)
                    }
                </select>
            </div>
            <div>
                <select value={size} onChange={sizeInput}>
                    {
                        sizes.map(s => <option key={s.value} value={s.size}>{s.size}</option>)
                    }
                </select>
            </div>
            <div>
                <select value={font} onChange={fontInput}>
                    {
                        fonts.map(s => <option key={s.value} value={s.font}>{s.font}</option>)
                    }
                </select>
            </div>
            <div>
                <input type='text' value={text} onChange={textInput}></input>
            </div>
        </fieldset>
        <div style={kont}><p style={{
            color: color,
            fontSize: size,
            fontFamily: font
            }}>{text}</p></div>
        </>
    );
}

export default Forms4;