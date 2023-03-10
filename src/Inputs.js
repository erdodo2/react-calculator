import React, {useState,useEffect} from 'react';
export default function  Inputs({value}) {
    const [evalValue, setEvalValue] = useState("0");
    useEffect(() => {
        if(value[value.length-1] >=0) {
            let newEvalValue = eval(value)

            if((newEvalValue+'').length> 12) newEvalValue = Number(newEvalValue).toPrecision(12);
            setEvalValue(newEvalValue)
        }
    }, [value])

    return (
        <>

            <div className="d-flex flex-column align-items-end">
                <span className="h1">{evalValue}</span>
                <span className="h5">{value}</span>
            </div>
        </>
)
}