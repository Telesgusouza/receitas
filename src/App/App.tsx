import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "../context/MyContext";
import Main from "../page/Main";
import Recipe from "../page/Recipe";

function App() {
  const [recipeOfList, setRecipeOfList] = useState<any>([]);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ recipeOfList, setRecipeOfList }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
