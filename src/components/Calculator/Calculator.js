import React from 'react'

class Calculator extends React.Component {
    state = {
        age: "",
        weight: null,
        gender: "",
        height: null
    };

    }
    render() {
        return (
            <div>
                <Card 
                title="Weight"
                name="weight"
                />

                <Card
                title= "Height"
                name="height"
                />
               
            </div>
        );
    }
}

export default Calculator
