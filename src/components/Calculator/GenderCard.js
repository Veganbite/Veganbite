import React from "react";

function GenderCard (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button 
                name="gender" 
                value="male" 
                onClick={props.handleChangeGender} 
                className={props.currentGenderSelected === "male" ? "active" : null} >
                    Male
            </button>
            <button 
                name="gender" 
                value="female" 
                onClick={props.handleChangeGender} 
                className={props.currentGenderSelected === "female" ? "active" : null}>
                    Female
            </button>
        </div>
    );
}

export default GenderCard