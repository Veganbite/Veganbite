import HowItWorks from "./HowItWorks";
import calculator from "./calculator.png";
import vegetarian from "./vegetarian.png";
import shuffle from "./shuffle.png";
/* import add from "./add.png";
 */
function HowItWorksCards() {
  return (
    <div className="howItWorksCards">
      <HowItWorks
        description="Calculate your Calories Intake"
        cardImage={calculator}
        /* addButton={add} */
      />
      <HowItWorks
        description="Vegan Meal Plan for the day
        (Breakfast, Lunch & Dinner)"
        cardImage={vegetarian}
        /* addButton={add} */
      />
      <HowItWorks
        description="Shuffle if the option is not ideal for you"
        cardImage={shuffle}
      />
    </div>
  );
}

export default HowItWorksCards;
