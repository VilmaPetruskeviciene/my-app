import { useState } from "react";

function State1() {

    const [ap, setAp] = useState(50);

    const kvadratas = {width: '150px',
                        height: '150px',
                        backgroundColor: 'white',
                        marginTop: '20px',
                        marginBottom: '20px',
                        borderRadius: ap+'%'}
    
    const changeAp = () => {
        setAp(b => b === 50 ? 0 : 50);
    }

    return (
        <>
        <div style={kvadratas}></div>
    <button onClick={changeAp}>Change</button>
        </>
    );

}


export default State1;