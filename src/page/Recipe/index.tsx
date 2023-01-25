import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as Styled from "./style";



export default function Recipe() {
  const [dataRecipe, setDataRecipe] = useState<any>({});

  useEffect(() => {
    const getDataRecipe: any = localStorage.getItem("recipe");
    setDataRecipe(JSON.parse(getDataRecipe));
  }, []);

  return (
    <Styled.Container>
      <Header search={false} />

      {Object.keys(dataRecipe).length > 0 && (
        <Styled.ContentRecipe className="center">
          <h1>{dataRecipe.title}</h1>

          <Styled.InfoRecipe>
            <p>
              <strong>Info: </strong> {dataRecipe.dietLabels}{" "}
              {dataRecipe.healthLabels.join(", ")}
            </p>
            <p>
              <strong>calories: </strong> {dataRecipe.calories}
            </p>
            <p>
              <strong>Meal type: </strong> {dataRecipe.mealType}
            </p>
            <p>
              <strong>Total time: </strong> {dataRecipe.totalTime}min
            </p>
          </Styled.InfoRecipe>

          <h2>Recipe</h2>

          <ul>
            {dataRecipe.ingredientLines.map((resp: any) => (
              <li key={resp}>{resp}</li>
            ))}
          </ul>
        </Styled.ContentRecipe>
      )}

      <Footer />
    </Styled.Container>
  );
}
