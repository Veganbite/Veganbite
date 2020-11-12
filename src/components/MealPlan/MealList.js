import React from "react";
import Meal from "./Meal";
import axios from "axios";

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
                }
            ],
        breakfast: []
  }

  componentDidMount(){
   this.fetchMeals();
  }

  fetchBreakfast= ()=>{
      axios
        .get(`https://rickandmortyapi.com/api/character/1`)
        .then((response)=> this.setState({meals: [response.data]}))
  };

  fetch= ()=>{
    axios
      .get(`https://rickandmortyapi.com/api/character/1`)
      .then((response)=> this.setState({meals: [response.data]}))
};

  render(){
      return (
          <div>
              {this.state.meals.map(item =>(
                  <Meal
                  key={item.id}
                  meal={item.name}
                  image={item.image}
                  calories={item.status}
                  recipe={item.created}
                  />
              ))}
              {/* {this.state.breakfast.map(item =>(
                  <Meal
                  key={item.id}
                  tipe={item.tipe}
                  title={item.title}
                  image={item.image}
                  calories={item.price}
                  />
              ))} */}
          </div>
      );
  }
}

export default MealList