import { Link } from "react-router-dom";
import * as Styled from "./style";

import logo from "../../assets/LogoHeader.png";
import searchImg from "../../assets/search.svg";
import { useContext, useState } from "react";
import axios from "axios";
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

export default function Header({ search = false }: any) {

  const { recipeOfList, setRecipeOfList } = useContext(MyContext);

  const [inputSearch, setInputSearch] = useState("");

  async function handleSearch(e:any) {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: inputSearch },
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
    <Styled.Container>
      <Link to="/">
        <div>
          <img src={logo} alt="logo do site" />
          <h1>confort food</h1>
        </div>
      </Link>

      {search && (
        <Styled.ContainerSearch onSubmit={(e) => handleSearch(e)} >
          <label>
              <input type="text" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="search for a recipe" />
              <button onSubmit={(e) => handleSearch(e)} >
                <img src={searchImg} alt="botão de pesquisa" />
              </button>
          </label>
        </Styled.ContainerSearch>
      )}
    </Styled.Container>
  );
}
