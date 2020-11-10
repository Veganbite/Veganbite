import React from "react";
import Meal from "./Meal";

class MealList extends React.Component{
    state={
        meals:[
            {   id:1,
                tipe:"Breakfast",
                title:"Overnight Oats",
                image:"https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/11/healthy-overnight-oats.jpg?resize=1250%2C702&ssl=1",
                calories:"400 kcal"
            },
            {   id:2,
                tipe:"Lunch",
                title:"Tofu Tikka Massala",
                image:"https://holycowvegan.net/wp-content/uploads/2017/03/tofu-tikka-masala-13.jpg",
                calories:"850 kcal"
            },
            {   id:3,
                tipe:"Dinner",
                title:"Falafel Bowl",
                image:"https://www.eatingbirdfood.com/wp-content/uploads/2019/06/falafel-bowls-3-768x1152.jpg",
                calories:"750 kcal"
            },

        ]
    }
    render(){
        return (
            <div>
                {this.state.meals.map(item =>(
                    <Meal
                    tipe={item.tipe}
                    title={item.title}
                    image={item.image}
                    calories={item.calories}
                    />

                ))}
            </div>
        );
    }
}

export default MealList