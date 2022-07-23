import { useState } from "react";

function State3() {

    const [count, setCount] = useState(0);

    const plusOne = () => {
        setCount(c => c + 1);

    }

    const minusThree = () => {
        setCount(c => c - 3);

    }
    
    return (
        <>
        <div style={{marginTop: '20px'}}>{count}</div>
    <button style={{marginTop: '5px'}} onClick={plusOne}>Plus</button>
    <button style={{marginTop: '5px'}} onClick={minusThree}>Minus</button>
        </>
    );

}

export default State3;