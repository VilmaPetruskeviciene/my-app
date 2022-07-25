import { useState } from "react";
import State222 from "./State222";

function State22() {

    const kont = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '20px 0',
        width: '80%',
        flexWrap: 'wrap'
    }

    const [kv, setKv] = useState([]);

    const kvadratasBlack = {
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'black',
                        margin: '20px'
    }

    const kvadratBlack = () => {
        setKv(k => [...k, kvadratasBlack]);
    }
        
    return (
        <>
        <div style={kont}>{kv.map((c, i) => <div style={kvadratasBlack} key={i}>{<State222></State222>}</div>)}</div>
        <button onClick={kvadratBlack}>pridėti</button>
        </>
    );

}

export default State22;