import { useState } from "react";

function Forms5() {
    
    const [width, setWidth] = useState('100');
    const widthInput = e => {
        setWidth(e.target.value);
    }

    const [height, setHeight] = useState('100');
    const heightInput = e => {
        setHeight(e.target.value);
    }

    const [color, setColor] = useState('#000000');
    const handleColorInput = e => {
        setColor(e.target.value);
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
      
      const kvadratas = {
        width: width+'px',
        height: height+'px',
        backgroundColor: color,
        margin: '20px'
}

    const [kv, setKv] = useState([]);
    const newKvadratas = e => {
        setKv(k => [...k, kvadratas]);
        
    } 

    const [list, setList] = useState([]);
    const save = () => {
        setList(b => [...b, {width, height, color}]);
        setKv(_ => []);
    }


    return (
        <>
        <fieldset>
            <legend>Range</legend>
            <div>
                <input type="range" id="width" name="width" min="10" max="200" value={width} onChange={widthInput}></input>
            </div>
            <div>
                <input type="range" id="height" name="height" min="10" max="200" value={height} onChange={heightInput}></input>
            </div>
            <div>
                <input type='color' value={color} onChange={handleColorInput}></input>
            </div>
            <div>
                <button type="submit" onClick={newKvadratas}>sukurti</button>
            </div>
            <div>
                <button type="submit" onClick={save}>išsaugoti</button>
            </div>
        </fieldset>
            <div style={kont}>
                {kv.map((_, i) => <div style={kvadratas} key={i}></div>)}
                {list.map((a, i) => <div style={{
                    width: a.width+'px',
                    height: a.height+'px',
                    backgroundColor: a.color,
                    margin: '20px'
                }} key={i}></div>)}
            </div>
            
        </>
    );
}

export default Forms5;