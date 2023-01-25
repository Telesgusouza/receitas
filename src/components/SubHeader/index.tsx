import * as Styled from "./style";
import bg from "../../assets/Capa.png";

import dish from "../../assets/Vegan-Coconut-Curry-5 1.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

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

export default function SubHeader() {
  const [optionsRecipe, setOptionsRecipe] = useState<PropsRecipe[] | []>([]);
  const { recipeOfList, setRecipeOfList } = useContext(MyContext);

  const navigation = useNavigate();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: "meat" },
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

        setOptionsRecipe(listRecipe.slice(0, 3));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function handleRecipe(element: object) {
    setRecipeOfList(element);
    localStorage.setItem("recipe", JSON.stringify(element));
    navigation("/recipe");

  }


  return (
    <Styled.Container bg={bg}>
      <Styled.ContentContainer className="center">
        <Styled.Content>
          <h1>check out one of our recipes for a delicious {optionsRecipe.length > 0 && optionsRecipe[0].title}!</h1> 
        </Styled.Content>

        <Styled.OptionRecipe>
          {optionsRecipe.length > 0 &&
            optionsRecipe.map((resp) => (
              <img key={resp.image} onClick={() => handleRecipe(resp)} src={resp.image} alt="Main dish of the day photo" />
            ))}
        </Styled.OptionRecipe>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
