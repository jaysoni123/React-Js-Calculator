import React from 'react'
import "./bootstrap.min.css"
import Header from "./header"
import Middle from "./middle"

const Calc = () => {
    return(
        <React.Fragment>
            <Header />
            <Middle />
        </React.Fragment>
    );
}

export default Calc;