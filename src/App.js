import React from "react";
import { Header } from "./Components/Header";
import { Container } from "./Styles/Pages/app.style";
import GlobalStyles from "./Styles";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
      <Header />
        <AppRoutes />
      </BrowserRouter>
    </Container>
  );
}

export default App;
