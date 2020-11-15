import React from "react";
import BFCard from "./BFCard";
import LCard from './LCard';
import DCard from './DCard';
import MealCard from './MealCard';
import axios from 'axios';

const YOUR_APP_ID = '60645151';
const YOUR_APP_KEY = '755275472391afd460251ecf421222b1';

let minRangeBreakfast = 100; //'caloricIntake * 0.2 - 250';
let maxRangeBreakfast = 700; //'caloricIntake * 0.2 + 250';
// let minRangeLunch = 'caloricIntake * 0.5 - 250';
// let maxRangeLunch = 'caloricIntake * 0.5 + 250';
// let minRangeDinner = 'caloricIntake * 0.5 - 250';
// let maxRangeDinner = 'caloricIntake * 0.5 + 250';


class MealPlan extends React.Component {
    state={
        caloricIntake: '',
        breakfast: [{
            name: 'Vegan Bacon Cheese and Fries',
            pic: 'https://gravatar.com/avatar/5efd1bc2c70beddb6c90b5a6f0678d91?s=400&d=robohash&r=x',
            calories: '500kcal'
        }],
        lunch: [{
            name: "Veggie Buger",
            pic:"https://gravatar.com/avatar/c6edc999d67e59220de043666a610b41?s=400&d=robohash&r=x",
            calories: '1000kcal'
        }],
        dinner: [{
            name: "Grilled Tofu with Broccoli",
            pic:"https://gravatar.com/avatar/c6edc999d67e59220de043666a610b41?s=400&d=robohash&r=x",
            calories: '1000kcal'
        }],
        meal: [{
            label: '',
            image: '',
            url: '',
            calories: ''
        }]
    }

    componentDidMount() {
       this.getMealData();
    }

    randomNumberGenerator = () => {
        return Math.floor(Math.random() * 80)
    }

    getMealData = () => {
        axios
         .get(`https://api.edamam.com/search?q=breakfast&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=80&calories=${minRangeBreakfast}-${maxRangeBreakfast}&health=vegan`)
         .then((response) => this.setState({meal: [response.data.hits[this.randomNumberGenerator()].recipe]}))
    }
    render() {
        return(
           <div>
               {this.state.breakfast.map((meal, index) => <BFCard key={index} name={meal.name} pic={meal.pic} calories={meal.calories} recipe="https://gravatar.com/avatar/c6edc999d67e59220de043666a610b41?s=400&d=robohash&r=x" />)}
               {this.state.lunch.map((meal, index) => <LCard key={index} name={meal.name} pic={meal.pic} calories={meal.calories} recipe="https://gravatar.com/avatar/c6edc999d67e59220de043666a610b41?s=400&d=robohash&r=x" />)}
               {this.state.dinner.map((meal, index) => <DCard key={index} name={meal.name} pic={meal.pic} calories={meal.calories} recipe="https://gravatar.com/avatar/c6edc999d67e59220de043666a610b41?s=400&d=robohash&r=x" />)}
               {this.state.meal.map((meal, index) => <MealCard key={index} label={meal.label} image={meal.image} calories={meal.calories} recipe={meal.url} />)}
           </div>
        )
    }
}

export default MealPlan;
