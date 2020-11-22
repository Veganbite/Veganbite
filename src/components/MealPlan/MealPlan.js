import React from "react";
import BFCard from "./BFCard";
import LCard from './LCard';
import DCard from './DCard';
import './MealPlan.css';
import SCard from './SCard';
// import { CALORIC_GOAL } from '../Calculator/Calculator/Calculator';
import axios from 'axios';

const YOUR_APP_ID = '60645151';
const YOUR_APP_KEY = '755275472391afd460251ecf421222b1';

let minRangeBreakfast = 0; //Number(CALORIC_GOAL) * 0.2 - 250;
let maxRangeBreakfast = 400; //Number(CALORIC_GOAL) * 0.2 + 250;
let minRangeLunch = 400; //Number(CALORIC_GOAL) * 0.5 - 250;
let maxRangeLunch = 900; //Number(CALORIC_GOAL) * 0.5 + 250;
let minRangeDinner = 400; //Number(CALORIC_GOAL) * 0.5 - 250;
let maxRangeDinner = 900; //Number(CALORIC_GOAL) * 0.5 + 250;
let minRangeSnack = 100; //Number(CALORIC_GOAL) * 0.2 - 250;
let maxRangeSnack = 300; //Number(CALORIC_GOAL) * 0.2 + 250;

class MealPlan extends React.Component {
    state={
        caloricIntake: '',
        breakfast: [{
            label: '',
            image: '',
            url: '',
            calories: ''
        }],
        lunch: [{
            label: '',
            image: '',
            url: '',
            calories: ''
        }],
        dinner: [{
            label: '',
            image: '',
            url: '',
            calories: ''
        }],
        snack: [{
            label: '',
            image: '',
            url: '',
            calories: ''
        }]
    }

    componentDidMount() {
        this.getBreakfastData();
        this.getLunchData();
        this.getDinnerData();
        this.getSnackData();
    }

    randomNumberGenerator = () => {
        return Math.floor(Math.random() * 80)
    }

    getSnackData = () => {
        axios
         .get(`https://api.edamam.com/search?q=snack&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=80&calories=${minRangeSnack}-${maxRangeSnack}&health=vegan`)
         .then((response) => this.setState({snack: [response.data.hits[this.randomNumberGenerator()].recipe]}))
    }

    getBreakfastData = () => {
        axios
         .get(`https://api.edamam.com/search?q=breakfast&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=80&calories=${minRangeBreakfast}-${maxRangeBreakfast}&health=vegan`)
         .then((response) => this.setState({breakfast: [response.data.hits[this.randomNumberGenerator()].recipe]}))
    }

    getLunchData = () => {
        axios
         .get(`https://api.edamam.com/search?q=lunch&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=80&calories=${minRangeLunch}-${maxRangeLunch}&health=vegan`)
         .then((response) => this.setState({lunch: [response.data.hits[this.randomNumberGenerator()].recipe]}))
    }

    getDinnerData = () => {
        axios
         .get(`https://api.edamam.com/search?q=dinner&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=80&calories=${minRangeDinner}-${maxRangeDinner}&health=vegan`)
         .then((response) => this.setState({dinner: [response.data.hits[this.randomNumberGenerator()].recipe]}))
    }

    render() {
        return(
           <div className='mp'>
                {this.state.breakfast.map((meal, index) => <BFCard key={index} label={meal.label} image={meal.image} calories={meal.calories / meal.yield} recipe={meal.url} />)}
                {this.state.lunch.map((meal, index) => <LCard key={index} label={meal.label} image={meal.image} calories={meal.calories / meal.yield} recipe={meal.url} />)}
                {this.state.dinner.map((meal, index) => <DCard key={index} label={meal.label} image={meal.image} calories={meal.calories / meal.yield} recipe={meal.url} />)}
                {this.state.snack.map((meal, index) => <SCard key={index} label={meal.label} image={meal.image} calories={meal.calories / meal.yield} recipe={meal.url} />)}
           </div>
        )
    }
}

export default MealPlan;
