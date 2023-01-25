import { useState } from "react";
import MyContext from "../../context/MyContext";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RecipeOptions from "../../components/RecipeOptions";
import SubHeader from "../../components/SubHeader";
import * as Styled from "./style";

export default function Main() {

  return (
    <Styled.Container>
        
        <Header search />
        <SubHeader />
        <RecipeOptions />
        <Footer />
      
    </Styled.Container>
  );
}
