
export default function  Buttons({value,setValue}) {
    const setLocalValue = (localVal) => {
        if(localVal == "AC"){
            setValue("0");
            localVal = "0";
            return;
        }

        if(value == "0")setValue(localVal);
        else {

            if(localVal == "islemDegis")setValue(value * -1);
            else if(localVal == "%")setValue(value / 100);
            else if(localVal =='=') setValue(eval(value));
            else setValue(value + localVal);
        }
    }
    return(
        <>
            <div className="d-flex px-1">

                <div className="button-div">
                    <button className="button-2" onClick={(e) => setLocalValue("AC")}>AC</button>
                </div>
                <div className="button-div">
                    <button className="button-2" onClick={(e) => setLocalValue("islemDegis")}>±</button>
                </div>
                <div className="button-div">
                    <button className="button-2" onClick={(e) => setLocalValue("%")}>%</button>
                </div>
                <div className="button-div">
                    <button className="button-1" onClick={(e) => setLocalValue("/")}>/</button>
                </div>
            </div>
            <div className="d-flex px-1 pt-2">
                <div className="button-div">
                    <button className="button-3" onClick={(e) => setLocalValue("7")}>7</button>
                </div>
                <div className="button-div">
                    <button className="button-3" onClick={(e) => setLocalValue("8")}>8</button>
                </div>
                <div className="button-div">
                    <button className="button-3" onClick={(e) => setLocalValue("9")}>9</button>
                </div>
                <div className="button-div">
                    <button className="button-1" onClick={(e) => setLocalValue("*")}>x</button>
                </div>
            </div>
            <div className="d-flex px-1 pt-2">
                <div className="button-div">
                    <button className="button-3" onClick={(e) => setLocalValue("4")}>4</button>
                </div>
                <div className="button-div">
                    <button className="button-3"  onClick={(e) => setLocalValue("5")}>5</button>
                </div>
                <div className="button-div">
                    <button className="button-3"  onClick={(e) => setLocalValue("6")}>6</button>
                </div>
                <div className="button-div">
                    <button className="button-1"  onClick={(e) => setLocalValue("-")}>-</button>
                </div>
            </div>
            <div className="d-flex px-1 pt-2">
                <div className="button-div">
                    <button className="button-3" onClick={(e) => setLocalValue("1")}>1</button>
                </div>
                <div className="button-div">
                    <button className="button-3"  onClick={(e) => setLocalValue("2")}>2</button>
                </div>
                <div className="button-div">
                    <button className="button-3"  onClick={(e) => setLocalValue("3")}>3</button>
                </div>
                <div className="button-div">
                    <button className="button-1"  onClick={(e) => setLocalValue("+")}>+</button>
                </div>
            </div>
            <div className="d-flex px-1 pt-2">
                <div className="button-div-2">
                    <button className="button-3"  onClick={(e) => setLocalValue("0")}>0</button>
                </div>

                <div className="button-div">
                    <button className="button-3"  onClick={(e) => setLocalValue(".")}>,</button>
                </div>
                <div className="button-div">
                    <button className="button-1"  onClick={(e) => setLocalValue("=")}>=</button>
                </div>
            </div>
        </>
    )
}