import React from "react";

function GenderCard (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.isMan} value={props.currentvalue}>Male</button>
            <button onClick={props.isWoman} value={props.currentvalue}>Female</button>
        </div>
    );
}

export default GenderCard