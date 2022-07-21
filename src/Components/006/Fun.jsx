import { useState } from "react";

function Fun({spalva, setCount}) {
    
    const [bg, setBg] = useState('green');
    

    const changeB = () => {
        setBg(b => b === 'green' ? 'crimson' : 'green');
        //setBg(bg === 'green' ? 'crimson' : 'green');
    }

    const addOne = () => {
        setCount(c => c + 1);
        
        //setCount(count + 1);
        //setCount(count + 1);
        //setCount(count + 1);
    }

    return (
        <>
        <h2 style={{
            color: spalva,
            backgroundColor: bg
        }}>Fun</h2>
    <button onClick={changeB}>Do red</button>
    <button onClick={addOne}>+ 1</button>
        </>
    );
}


export default Fun;