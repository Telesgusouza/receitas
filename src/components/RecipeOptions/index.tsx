import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as Styled from "./style";

import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";

type PropsRecipe = {
  title: string;
  image: string;
  ingredientLines: [];
  mealType: [];
  totalTime: number;
  calories: number;
  dietLabels: string | undefined;
  healthLabels: [];
};

export default function RecipeOptions() {
  const { recipeOfList, setRecipeOfList } = useContext(MyContext);

  const navigation = useNavigate();

  useEffect(() => {
    handleRecipeOfList();
  }, []);

  async function handleRecipeOfList() {
    /* API 1 DE RECEITA CONTA 2 */

    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: "chicken" },
      headers: {
        "X-RapidAPI-Key": "c0b5484bc0msh69586a67644776bp1f0a73jsn8db92be9f8f6",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const listRecipe: PropsRecipe[] = [];

        response.data.hits.forEach((element: any) => {
          const recipe: PropsRecipe = {
            title: element.recipe.label,
            image: element.recipe.image,
            ingredientLines: element.recipe.ingredientLines,
            mealType: element.recipe.mealType,
            totalTime: element.recipe.totalTime,
            calories: parseInt(element.recipe.calories),
            dietLabels:
              element.recipe.dietLabels[0] !== undefined
                ? element.recipe.dietLabels[0] + ", "
                : "",
            healthLabels: element.recipe.healthLabels,
          };
          listRecipe.push(recipe);
        });

        setRecipeOfList(listRecipe);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function handleRecipe(element: object) {
    setRecipeOfList(element);
    localStorage.setItem("recipe", JSON.stringify(element));
    navigation("/recipe");
  }

  function filterOptionRecipe(option: string) {
    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: option },
      headers: {
        "X-RapidAPI-Key": "c0b5484bc0msh69586a67644776bp1f0a73jsn8db92be9f8f6",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const listRecipe: PropsRecipe[] = [];

        response.data.hits.forEach((element: any) => {
          const recipe: PropsRecipe = {
            title: element.recipe.label,
            image: element.recipe.image,
            ingredientLines: element.recipe.ingredientLines,
            mealType: element.recipe.mealType,
            totalTime: element.recipe.totalTime,
            calories: parseInt(element.recipe.calories),
            dietLabels:
              element.recipe.dietLabels[0] !== undefined
                ? element.recipe.dietLabels[0] + ", "
                : "",
            healthLabels: element.recipe.healthLabels,
          };
          listRecipe.push(recipe);
        });

        setRecipeOfList(listRecipe);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <Styled.Container className="center">
      <Styled.ContainerFilter>
        <p onClick={() => filterOptionRecipe("lunch")}> Lunch </p>
        <p onClick={() => filterOptionRecipe("dinner")}> Dinner </p>
        <p onClick={() => filterOptionRecipe("easy")}> Easy </p>
        <p onClick={() => filterOptionRecipe("fast")}> Fast </p>
      </Styled.ContainerFilter>
      <Styled.ListRecipe>
        {recipeOfList.length > 0 &&
          recipeOfList.map((element: any) => (
            <Styled.OptionRecipe
              key={element.image} // element.title
              onClick={() => handleRecipe(element)}
            >
              <img src={element.image} alt="ilustração da receita" />
              <div>
                <strong>{element.title}</strong>

                <p>
                  {element.dietLabels} {element.healthLabels.join(", ")}
                </p>
              </div>
            </Styled.OptionRecipe>
          ))}
      </Styled.ListRecipe>
    </Styled.Container>
  );
}
