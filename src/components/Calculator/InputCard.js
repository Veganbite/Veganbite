import React from "react";

function InputCard (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <input
                value={props.currentvalue}
                onChange={props.handleChange}
                name={props.name}
                />
        </div>
    );
}

export default InputCard