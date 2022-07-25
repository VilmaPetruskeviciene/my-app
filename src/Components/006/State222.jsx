import { useState } from "react";

function State222() {

    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(c => c + 1);
    }

    return (
        <>
        <div>{count}</div>
        <button onClick={addOne}>+</button>
        </>
    );
    
}

export default State222;