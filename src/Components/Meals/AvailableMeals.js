import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const Dummy_meals = [
  {
    id: "m1",
    name: "Chicken-biryani",
    description: "Made with spicy masala",
    price: "300",
  },

  {
    id: "m2",
    name: "Sushi",
    description: "finest fish with veggies",
    price: "350",
  },
  {
    id: "m3",
    name: "Salad",
    description: "Comes with veggies and some green",
    price: "200",
  },
  {
    id: "m4",
    name: "Mutton-Mandi",
    description: "Less spicy food and delicious",
    price: "400",
  },
];

export default function AvailableMeals() {
  const mealsList = Dummy_meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
