import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Calculator from './components/Calculator/Calculator/Calculator';
import HomePage from './components/HomePage/HomePage';
import MealPlan from './components/MealPlan/MealPlan';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/meal-plan" component={MealPlan} />
      </Switch>
    </div>
  );
}

export default App;
