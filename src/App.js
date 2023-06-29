import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import GlobalStyles from "./components/GlobalStyle";
import bg_theme from "./images/pattern15.png";
import logo from "./images/logo2.png";

const theme = {
  colors: {
    nav: "rgb(246, 248, 250)",
    white: "#fff",
    icons: "rgb(123,123,123)",
    yellow: "rgb(245, 233, 201)",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
  },
  img: {
    backgroundimage: `url(${bg_theme})`,
    logoimage: `url(${logo})`,
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="App">
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/lancemeup" element={<Home />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
