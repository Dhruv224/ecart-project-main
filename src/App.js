import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contect from "./pages/Contect";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const theme = {
    colors:{
      primary: "#1b243f",
      primary: "#1840a5",
      black: "black",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      gradient: "linear-gradient(to right, #E040FB, #00BCD4);"
    },

    media:{
      mobile: "768px",
      tab: "998px"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contect' element={<Contect />} />
              <Route path='/products' element={<Products />} />
              <Route path='/singleproduct/:id' element={<SingleProduct />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
