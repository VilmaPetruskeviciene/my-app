import { useEffect } from "react";

function Kv({c, i}) {

    useEffect(() => {
        console.log('As gyvas', i);
        return () => {
            console.log('numiro', i);
        }
    }, [i]);

    return (
        <div className="kv" style={{
            backgroundColor: c + '66',
            borderColor: c
        }}></div>
    )
}

export default Kv;