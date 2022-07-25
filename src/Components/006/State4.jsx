import { useState } from "react";

function State4() {

    const [kv, setKv] = useState([]);

    const kvadratas4 = {
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'blue',
                        margin: '20px'
    }

    const kvadratKv = () => {
        setKv(k => [...k, kvadratas4]);
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
        <div style={kont}>{kv.map((c, i) => <div style={kvadratas4} key={i}></div>)}</div>
        <button onClick={kvadratKv}>add</button>
        </>
    );

}

export default State4;