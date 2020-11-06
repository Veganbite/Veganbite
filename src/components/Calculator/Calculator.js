import React from 'react'

class Calculator extends React.Component {
    state = {
        age: "",
        weight: null,
        gender: "",
        height: null
    };

    handleChange = (event) => {
        const {name, value }
        this.setState({ [name]: value }, () => {
            this.caloricCalculator();
        });
    };

    caloricCalculator = () => {
        const {weight, height } = this.state;
        if (weight && height) {
            console.log(Number(weight) + Number(height));
        }
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
