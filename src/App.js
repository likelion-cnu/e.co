import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import reset from "styled-reset";
import Theme from "./style/Theme";
import routes from "./router";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <StyledThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRouter />
    </StyledThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    letter-spacing: -0.017em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }
  
  button {
    padding: 0;
  }
`;

export default App;
