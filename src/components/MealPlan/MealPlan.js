import React from 'react';
import CardList from "./CardList"

class MealPlan extends React.Component {
    render() {
        return (
            <div>
                <h1>Meal Plan</h1>
                <div><CardList /></div>
                
            </div>
        )
    }
}

export default MealPlan