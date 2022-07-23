import { useState } from "react";
import rand from "../../Functions/rand";

function State2() {

    const [ap2, setAp2] = useState(50);

    const kvadratas2 = {width: '150px',
                        height: '150px',
                        backgroundColor: 'white',
                        color: 'black',
                        marginTop: '20px',
                        marginBottom: '20px',
                        borderRadius: ap2+'%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }
    
    const changeAp2 = () => {
        setAp2(b => b === 50 ? 0 : 50);
    }

    const [rn, setRn] = useState(rand(5, 25));
    
    const random2 = () => {
        setRn(c => c === rand(5, 25) ? rand(5, 25) : rand(5, 25));
    }
    
    return (
        <>
        <div style={kvadratas2}>{rn}</div>
    <button onClick={changeAp2}>Change</button>
    <button style={{marginTop: '10px'}} onClick={random2}>Random</button>
        </>
    );

}

export default State2;