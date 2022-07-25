import { useEffect } from "react";
import { useState } from "react";

function State23() {

    const [count, setCount] = useState(null);

    useEffect(() => {
        const howMuch = localStorage.getItem('myLife');
        if (null === howMuch) {
            setCount({yearsPast: 0});
        } else {
            setCount(JSON.parse(howMuch));
        }
    }, []);


    useEffect(() => {
        if (count === null) {
            return;
        }
        localStorage.setItem('myLife', JSON.stringify(count));
    }, [count]);

    const addOne = () => {
        setCount(c => ({...c, yearsPast: c.yearsPast +1 }));
    }

    return (
        <>
        <h1 style={{marginTop: '50px'}}>{count?.yearsPast}</h1>
        <button style={{marginBottom: '50px'}} onClick={addOne}>+</button>
        </>
    );
    
}

export default State23;