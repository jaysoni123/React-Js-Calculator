import React, { useState } from 'react'

const Middle = () => {

    const [number1, updateNumber1] = useState(0);
    const [number2, updateNumber2] = useState(0);
    const [total, updateTotal]   =   useState(0);
    const [operation, changeOperation] = useState("Select Operation");

    const calculate = () => {
        if(operation === "Select Operation") {
            alert("Please Select any Operation");
            return false;
        }

        if(operation === "dividation" && number1 !== 0 && number2 === 0) {
            alert(number1+" can not dividable by 0");
            return false;
        }

        if(operation === "addition") {
            updateTotal(number1 + number2);
        }

        if(operation === "subtraction") {
            updateTotal(number1 - number2);
        }

        if(operation === "multiplication") {
            updateTotal(number1 * number2);
        }

        if(operation === "dividation") {
            updateTotal(number1 / number2);
        }

        if(operation === "modulo") {
            updateTotal(number1 % number2);
        }
    }

    return(
        <div className="">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <input className="form-control" placeholder="Number 1" type="number" value={number1} onChange={(e) => updateNumber1(parseInt(e.target.value))} />
                </div>
                <div className="col-auto">
                    <select className="form-control" onChange={(e) => changeOperation(e.target.value)}>
                        <option  value="Select Operation">OPERATION</option>
                        <option className="h3 text-primary" value="addition">+</option>
                        <option className="h3 text-primary" value="subtraction">-</option>
                        <option className="h3 text-primary" value="multiplication">X</option>
                        <option className="h3 text-primary" value="dividation">/</option>
                        <option className="h3 text-primary" value="modulo">%</option>
                    </select>
                </div>
                <div className="col-auto">
                    <input className="form-control" placeholder="Number 2" type="number" value={number2} onChange={(e) => updateNumber2(parseInt(e.target.value))} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger" onClick={calculate}>Calculate</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger" onClick={() => {
                         updateTotal(0);
                         updateNumber1(0);
                         updateNumber2(0); 
                        }}>clear</button>
                </div>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-auto">
                <label className="h2 text-info mx-2">Total :</label>
                    <label className="h2 text-success mx-2">{total}</label>  
                </div>
            </div>
        </div>
    );
}

export default Middle;