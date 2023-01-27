import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/index";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <Header />
      <Resume />
      <GlobalStyle />
    </>
  );
};
export default App;
