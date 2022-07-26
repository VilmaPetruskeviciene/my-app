import { useEffect } from "react";
import { useState } from "react";

function Checkbox() {
    
    const [cd, setCd] = useState({A:false, B:true, C:true, W:false});

    const [checked, setChecked] = useState([]);
    
    const handleInput = e => {
        setCd(c => ({...c, [e.target.value]: !c[e.target.value]}));
    }

    useEffect(() => {
        const box = [];
        for (const b in cd) {
            if (cd[b] === true) {
                box.push(b);
            }  
        }
        setChecked(box);
    }, [cd]);

    return (
        <>
        <fieldset>
            <legend>Checked
                {
                    checked.map(b => <b key={b}>{b}</b>)
                }
            </legend>
                A <input type="checkbox" value='A' checked={cd.A} onChange={handleInput}></input>
                B <input type="checkbox" value='B' checked={cd.B} onChange={handleInput}></input>
                C <input type="checkbox" value='C' checked={cd.C} onChange={handleInput}></input>
                W <input type="checkbox" value='W' checked={cd.W} onChange={handleInput}></input>
        </fieldset>
        </>
    );
}

export default Checkbox;