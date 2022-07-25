import { useState } from "react";

function State21() {

    const kvadratasZalias = {
                        width: '750px',
                        height: '200px',
                        backgroundColor: 'green',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: '20px 0',
                        flexWrap: 'wrap'
    }

    const [kv1, setKv1] = useState([]);

    const kvadratasMazas1 ={
                        width: '244px',
                        height: '150px',
                        border: '3px solid yellow'
    }

    const kvadratZalias1 = () => {
        setKv1(k => [...k, kvadratasMazas1]);
    }

    const [kv2, setKv2] = useState([]);

    const kvadratasMazas2 ={
        width: '244px',
        height: '150px',
        border: '3px solid yellow'
    }

    const kvadratZalias2 = () => {
        setKv2(k => [...k, kvadratasMazas2]);
    }

    const [kv3, setKv3] = useState([]);

    const kvadratasMazas3 ={
        width: '244px',
        height: '150px',
        border: '3px solid yellow'
    }

    const kvadratZalias3 = () => {
        setKv3(k => [...k, kvadratasMazas3]);
    }
        
    return (
        <>
        <div style={kvadratasZalias}>{kv1.map((c, i) => <div style={kvadratasMazas1} key={i}>ąžuolas</div>)}{kv2.map((c, i) => <div style={kvadratasMazas2} key={i}>beržas</div>)}{kv3.map((c, i) => <div style={kvadratasMazas3} key={i}>uosis</div>)}</div>
        <button onClick={kvadratZalias1}>ąžuolas</button>
        <button onClick={kvadratZalias2}>beržas</button>
        <button onClick={kvadratZalias3}>uosis</button>
        </>
    );

}

export default State21;