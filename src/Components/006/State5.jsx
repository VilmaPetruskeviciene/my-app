import { useState } from "react";

function State5() {

    const [kv, setKv] = useState([]);

    const kvadratasBlue = {
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'blue',
                        margin: '20px'
    }

    const kvadratBlue = () => {
        setKv(k => [...k, kvadratasBlue]);
    }

    const [kv2, setKv2] = useState([]);

    const kvadratasRed = {
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'red',
                        margin: '20px'
    }

    const kvadratRed = () => {
        setKv2(r => [...r, kvadratasRed]);
    }
   
    const kont = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '20px 0',
        width: '80%',
        flexWrap: 'wrap'
    }

    const clearState = () => {
        setKv([])
        setKv2([])
    }
        
    return (
        <>
        <div style={kont}>{kv.map((c, i) => <div style={kvadratasBlue} key={i}></div>)}{kv2.map((c, i) => <div style={kvadratasRed} key={i}></div>)}</div>
        <button onClick={kvadratRed}>add red</button>
        <button onClick={kvadratBlue}>add blue</button>
        <button onClick={clearState}>reset</button>
        </>
    );

}

export default State5;