import { useEffect, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../data/drinks.json";

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });
  const [currDrink, setCurrDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});
  const [correct, setCorrect] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };

  const getNextDrink = () => {
    const randomDrinkIndex = Math.floor(
      Math.random() * drinksJson.drinks.length,
    );
    setCurrDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };

  useEffect(getNextDrink, []);

  const onCheckAnswer = () => {
    if (trueRecipe.temp != inputs["temperature"]) {
      setCorrect({ ...correct, temperature: "wrong" });
    } else {
      setCorrect({ ...correct, temperature: "correct" });
    }
    if (trueRecipe.syrup != inputs["syrup"]) {
      setCorrect({ ...correct, syrup: "wrong" });
    } else {
      setCorrect({ ...correct, syrup: "correct" });
    }
    if (trueRecipe.milk != inputs["milk"]) {
      setCorrect({ ...correct, milk: "wrong" });
    } else {
      setCorrect({ ...correct, milk: "correct" });
    }
    if (trueRecipe.blended != inputs["blended"]) {
      setCorrect({ ...correct, blended: "wrong" });
    } else {
      setCorrect({ ...correct, blended: "correct" });
    }
  };

  const onNewDrink = () => {
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });
    setCorrect({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });

    getNextDrink();
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header">{currDrink}</h2>
        <button className="button newdrink" onClick={onNewDrink}>
          🔄
        </button>
      </div>
      <form>
        <h3>Temperature</h3>
        <div className={`answer-space ${correct.temperature}`}>
          {inputs["temperature"]}
        </div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="temperature"
          choices={ingredients["temperature"]}
          checked={inputs["temperature"]}
        />
        <h3>Milk</h3>
        <div className={`answer-space ${correct.milk}`}>{inputs["milk"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="milk"
          choices={ingredients["milk"]}
          checked={inputs["milk"]}
        />
        <h3>Syrup</h3>
        <div className={`answer-space ${correct.syrup}`}>{inputs["syrup"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="syrup"
          choices={ingredients["syrup"]}
          checked={inputs["syrup"]}
        />
        <h3>Blended</h3>
        <div className={`answer-space ${correct.blended}`}>
          {inputs["blended"]}
        </div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="blended"
          choices={ingredients["blended"]}
          checked={inputs["blended"]}
        />
      </form>
      <button className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button className="button submit" onClick={onNewDrink}>
        New Drink
      </button>
    </div>
  );
};

export default BaristaForm;
