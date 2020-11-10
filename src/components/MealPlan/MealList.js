import React from "react";
import Meal from "./Meal";

class MealList extends React.Component{
    render(){
        return <Meal 
            tipe="Breakfast"
            title="Overnight Oats"
            image="https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/11/healthy-overnight-oats.jpg?resize=1250%2C702&ssl=1"
            calories="400 kcal"

        />;
    }
}

export default MealList